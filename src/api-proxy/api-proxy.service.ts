import { Injectable, NotFoundException } from '@nestjs/common';
import { ApiProxyDto } from './dto/apiProxy.dto';
import { ApiManageService } from 'src/api-manage/api-manage.service';

@Injectable()
export class ApiProxyService {
  constructor(private readonly apiManageService: ApiManageService) {}

  async handleProxy(dto: ApiProxyDto) {
    if (!dto || !dto.apiId) {
      throw new NotFoundException();
    }
    const apiConfig = await this.apiManageService.findOneById(dto.apiId);

    if (!apiConfig) {
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
    console.log(dto, 'dto');
  }
}
