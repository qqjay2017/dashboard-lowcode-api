import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

/**
 * 全局querypipe，去除空参数
 */
@Injectable()
export class ParseIdParamPipe implements PipeTransform {
  transform(valueObj: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'query') {
      if (typeof valueObj === 'object') {
        const keys = Reflect.ownKeys(valueObj);
        if (keys.length === 0) {
          return valueObj;
        }
        return keys.reduce((memo, cur) => {
          const v = valueObj[cur];

          if (v !== '' && v !== undefined && v !== null) {
            memo[cur] = v;
          }
          return memo;
        }, {});
      } else {
        return valueObj;
      }
    }
    return valueObj;
  }
}
