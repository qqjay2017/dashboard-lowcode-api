import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiManageService } from './api-manage.service';
import { IdParamDto } from 'src/designer/dto';
import { CreateApiManageDto } from './dto/createApiManage.dto';

@Controller('api-manage')
export class ApiManageController {
  constructor(private apiManageService: ApiManageService) {}

  @Get()
  findAll(@Query() param: IdParamDto) {
    return this.apiManageService.findAll(param);
  }
  @Post('list')
  pageList() {
    return this.apiManageService.pageList();
  }

  @Get(':id')
  findOne(@Param() param: IdParamDto) {
    return this.apiManageService.findOne(param);
  }

  @Post()
  create(@Body() dto: CreateApiManageDto) {
    return this.apiManageService.create(dto);
  }
  @Put()
  update(@Body() dto: CreateApiManageDto) {
    return this.apiManageService.update(dto);
  }
  @Delete(':id')
  deleteOne(@Param() param: IdParamDto) {
    return this.apiManageService.deleteOne(param);
  }
}
