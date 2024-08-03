import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { ApiProxyService } from './api-proxy.service';
import { ApiProxyDto } from './dto/apiProxy.dto';

@Controller('api-proxy')
export class ApiProxyController {
  constructor(private apiProxyService: ApiProxyService) {}

  @Post('proxy')
  @HttpCode(200)
  handleProxy(@Body() dto: ApiProxyDto) {
    return this.apiProxyService.handleProxy(dto);
  }
}
