import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOriginService } from './api-origin.service';
import { IdParamDto } from 'src/designer/dto';
import { CreateApiOriginDto } from './dto/createApiOrigin.dto';
import { TransformInterceptor } from 'src/transform.interceptor';

@Controller('api-origin')
@UseInterceptors(TransformInterceptor)
export class ApiOriginController {
  constructor(private apiGroupService: ApiOriginService) {}

  @Get()
  findAll(@Query() param: IdParamDto) {
    return this.apiGroupService.findAll(param);
  }
  @Post('list')
  pageList() {
    return this.apiGroupService.pageList();
  }

  @Get(':id')
  findOne(@Param() param: IdParamDto) {
    return this.apiGroupService.findOne(param);
  }

  @Post()
  create(@Body() dto: CreateApiOriginDto) {
    return this.apiGroupService.create(dto);
  }
  @Put()
  update(@Body() dto: CreateApiOriginDto) {
    return this.apiGroupService.update(dto);
  }
  @Delete(':id')
  deleteOne(@Param() param: IdParamDto) {
    return this.apiGroupService.deleteOne(param);
  }
}
