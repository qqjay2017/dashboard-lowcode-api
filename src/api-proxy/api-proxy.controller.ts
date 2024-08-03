import { Body, Controller, HttpCode, Post, Req, Res } from '@nestjs/common';

import { ApiProxyService } from './api-proxy.service';
import { ApiProxyDto } from './dto/apiProxy.dto';
import { Request, Response } from 'express';
import { ApiManageService } from 'src/api-manage/api-manage.service';

@Controller('api-proxy')
export class ApiProxyController {
  constructor(
    private apiProxyService: ApiProxyService,
    private readonly apiManageService: ApiManageService,
  ) {}

  @Post('proxy')
  @HttpCode(200)
  async handleProxy(
    @Body() dto: ApiProxyDto,
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.apiProxyService.handleProxyAll(dto, {
      reqHeaders: request.headers,
      response,
    });
  }
}
