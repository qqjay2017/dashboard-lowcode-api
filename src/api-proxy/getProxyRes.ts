import { join } from 'path';
import { ApiManage } from 'src/entities/apiManage.entity';
import * as superagent from 'superagent';
import { Response } from 'express';
const headerKeys = [
  'fp',
  'ct',
  'pt',
  'authorization',
  'user-agent',
  'system-id',
  'access_token',
  // 'host',
  // 'origin',
  // 'cookie',
  'accept-encoding',
  'accept',
  'content-type',
  'cache-control',
  'transfer-encoding',
  'access-control-allow-credentials',
  'content-security-policy',
  'x-content-type-options',
  'strict-transport-security',
  'x-frame-options',
  'x-xss-protection',
  'referrer-policy',
  'access-control-allow-methods',
  'expires',
  'access-control-max-age',
  'access-control-allow-headers',
  'access-control-expose-headers',
  'date',
  'access-control-allow-origin',
];

const proxyResHeaderKeys = [
  'access_token',
  'access-control-allow-credentials',
  'content-security-policy',
  'x-content-type-options',
  'strict-transport-security',
  'x-frame-options',
  'x-xss-protection',
  'referrer-policy',
  'access-control-allow-methods',
  'expires',
  'access-control-max-age',
  'access-control-allow-headers',
  'access-control-expose-headers',
  'date',
  'access-control-allow-origin',
];

function getConfigHeaders(headers = ''): any {
  try {
    return JSON.parse(headers || '{}');
  } catch (error) {
    return {};
  }
}
export async function getProxyRes(
  apiManage: ApiManage,
  {
    originParam,
    reqHeaders,
    response,
    data,
    query,
  }: {
    originParam: string;
    reqHeaders?: any;
    response: Response;
    data?: any;
    query?: any;
  },
) {
  const origin = apiManage.originName || originParam;
  const method = (apiManage?.method || 'get').toLowerCase();
  const url = origin + join(apiManage?.baseName || '', apiManage?.url || '');
  console.log(method,url)
  const requestIns = superagent(method, url);

  if (data && method != 'get') {
    requestIns.send(data);
  }
  if (query) {
    requestIns.query(query);
  }

  const configHeders = getConfigHeaders(apiManage.headers);

  const allHeaders = {
    ...reqHeaders,
    ...configHeders,
  };
  return handleProxyFetch({
    requestIns,
    allHeaders,
    response,
  });
}

async function handleProxyFetch({ allHeaders, requestIns, response }: any) {
  Reflect.ownKeys(allHeaders).forEach((k) => {
    const key = String(k).toLowerCase();
    if (headerKeys.includes(key)) {
      requestIns.set(key, String(allHeaders[key]));
    }
  });
  const proxyRes = await requestIns;
  Reflect.ownKeys(proxyRes.headers).forEach((k) => {
    const key = String(k);
    if (proxyResHeaderKeys.includes(key)) {
      const value = proxyRes.headers[key];

      response.set(key, value);
    }
  });

  response.status(proxyRes?.status);
  return proxyRes?.body;
}
