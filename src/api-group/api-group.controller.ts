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
import { ApiGroupService } from './api-group.service';
import { IdParamDto } from 'src/designer/dto';
import { CreateApiGroupDto } from './dto/createApiGroup.dto';
import { TransformInterceptor } from 'src/transform.interceptor';
import { UpdateApiGroupDto } from './dto/updateApiGroup.dto';

@Controller('api-group')
@UseInterceptors(TransformInterceptor)
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
  @Put('id')
  update(@Param() param: IdParamDto, @Body() dto: UpdateApiGroupDto) {
    return this.apiGroupService.update(param.id, dto);
  }
  @Delete(':id')
  deleteOne(@Param() param: IdParamDto) {
    return this.apiGroupService.deleteOne(param);
  }
}
