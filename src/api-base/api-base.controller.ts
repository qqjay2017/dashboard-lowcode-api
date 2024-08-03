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
import { IdParamDto } from 'src/designer/dto';
import { ApiBaseService } from './api-base.service';
import { CreateApiBaseDto } from './dto/createApiBase.dto';

@Controller('api-base')
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
  @Put()
  update(@Body() dto: CreateApiBaseDto) {
    return this.apiGroupService.update(dto);
  }
  @Delete(':id')
  deleteOne(@Param() param: IdParamDto) {
    return this.apiGroupService.deleteOne(param);
  }
}
