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
import { IdParamDto } from 'src/designer/dto';
import { ApiBaseService } from './api-base.service';
import { CreateApiBaseDto } from './dto/createApiBase.dto';
import { TransformInterceptor } from 'src/transform.interceptor';
import { UpdateApiBaseDto } from './dto/updateApiBase.dto';

@Controller('api-base')
@UseInterceptors(TransformInterceptor)
export class ApiBaseController {
  constructor(private apiGroupService: ApiBaseService) {}

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
  create(@Body() dto: CreateApiBaseDto) {
    return this.apiGroupService.create(dto);
  }
  @Put(':id')
  update(@Param() param: IdParamDto, @Body() dto: UpdateApiBaseDto) {
    return this.apiGroupService.update(param.id, dto);
  }
  @Delete(':id')
  deleteOne(@Param() param: IdParamDto) {
    return this.apiGroupService.deleteOne(param);
  }
}
