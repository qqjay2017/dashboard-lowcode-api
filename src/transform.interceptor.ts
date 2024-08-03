import {
  NestInterceptor,
  ExecutionContext,
  Injectable,
  CallHandler,
} from '@nestjs/common';

import { map } from 'rxjs/operators';

/**
 * 全局的响应映射拦截器
 */

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    /**
     * 支持异步
     */
    return next.handle().pipe(map((data) => ({ code: 200, data })));
  }
}
