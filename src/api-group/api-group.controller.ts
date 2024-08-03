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
import { ApiGroupService } from './api-group.service';
import { IdParamDto } from 'src/designer/dto';
import { CreateApiGroupDto } from './dto/createApiGroup.dto';

@Controller('api-group')
export class ApiGroupController {
  constructor(private apiGroupService: ApiGroupService) {}

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
  create(@Body() dto: CreateApiGroupDto) {
    return this.apiGroupService.create(dto);
  }
  @Put()
  update(@Body() dto: CreateApiGroupDto) {
    return this.apiGroupService.update(dto);
  }
  @Delete(':id')
  deleteOne(@Param() param: IdParamDto) {
    return this.apiGroupService.deleteOne(param);
  }
}
