import { Injectable, NotFoundException } from '@nestjs/common';
import { ApiProxyDto } from './dto/apiProxy.dto';
import { ApiManageService } from 'src/api-manage/api-manage.service';
import { getProxyRes } from './getProxyRes';
import { Response } from 'express';
import { ApiManage } from 'src/entities/apiManage.entity';
@Injectable()
export class ApiProxyService {
  constructor(private readonly apiManageService: ApiManageService) {}

  async handleProxyStatic(
    dto: ApiProxyDto,
    { apiConfig }: { apiConfig: ApiManage },
  ) {
    if (!dto || !dto.apiId) {
      throw new NotFoundException();
    }

    if (apiConfig.type === 'json') {
      try {
        return {
          code: 200,
          data: {
            ...apiConfig,
            data: JSON.parse(apiConfig.content),
          },
        };
      } catch (error) {
        return {
          code: 200,
          data: {
            ...apiConfig,
            data: apiConfig.content,
          },
        };
      }
    }
    if (apiConfig.type === 'js') {
      return {
        code: 200,
        data: {
          ...apiConfig,
          data: apiConfig.content,
        },
      };
    }
  }

  async handleProxyHttp(
    dto: ApiProxyDto,
    {
      reqHeaders,
      response,
      apiConfig,
    }: { reqHeaders?: any; response: Response; apiConfig: ApiManage },
  ) {
    try {
      const proxyRes = await getProxyRes(apiConfig, {
        reqHeaders,
        originParam: dto.origin,
        response,
      });

      return {
        code: 200,
        data: {
          ...apiConfig,
          data: proxyRes,
        },
      };
    } catch (error) {
      return {
        code: 200,
        data: {
          ...apiConfig,
        },
      };
    }
  }

  async handleProxyAll(
    dto: ApiProxyDto,
    {
      reqHeaders,
      response,
    }: {
      reqHeaders?: any;
      response: Response;
    },
  ) {
    const apiConfig = await this.apiManageService.findOneById(dto.apiId);
    if (!apiConfig) {
      throw new NotFoundException();
    }
    if (apiConfig.type === 'json' || apiConfig.type === 'js') {
      return this.handleProxyStatic(dto, {
        apiConfig,
      });
    } else if (apiConfig.type === 'http') {
      return this.handleProxyHttp(dto, {
        reqHeaders,
        response,
        apiConfig,
      });
    }
  }
}
