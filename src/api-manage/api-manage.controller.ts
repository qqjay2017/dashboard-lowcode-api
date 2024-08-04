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
import { ApiManageService } from './api-manage.service';
import { IdParamDto } from 'src/designer/dto';
import { CreateApiManageDto } from './dto/createApiManage.dto';
import { TransformInterceptor } from 'src/transform.interceptor';
import { UpdateApiManageDto } from './dto/updateApiManage.dto';
import { PaginationDto } from 'src/designer/dto/pagination.dto';

@Controller('api-manage')
@UseInterceptors(TransformInterceptor)
export class ApiManageController {
  constructor(private apiManageService: ApiManageService) {}

  @Get()
  findAll(@Query() param: IdParamDto) {
    return this.apiManageService.findAll(param);
  }
  @Get('list')
  pageList(@Query() pageParam: PaginationDto, @Query() param: IdParamDto) {
    return this.apiManageService.pageList(pageParam, param);
  }

  @Get(':id')
  findOne(@Param() param: IdParamDto) {
    return this.apiManageService.findOne(param);
  }

  @Post()
  create(@Body() dto: CreateApiManageDto) {
    return this.apiManageService.create(dto);
  }
  @Put(':id')
  update(@Param() param: IdParamDto, @Body() dto: UpdateApiManageDto) {
    return this.apiManageService.update(param.id, dto);
  }
  @Delete(':id')
  deleteOne(@Param() param: IdParamDto) {
    return this.apiManageService.deleteOne(param);
  }
}
