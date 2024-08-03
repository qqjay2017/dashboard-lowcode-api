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
import { CreateAppGroupDto } from './dto/createAppGroup.dto';
import { AppGroupService } from './app-group.service';
import { TransformInterceptor } from 'src/transform.interceptor';

@Controller('app-group')
@UseInterceptors(TransformInterceptor)
export class AppGroupController {
  constructor(private appGroupService: AppGroupService) {}

  @Get()
  findAll(@Query() param: IdParamDto) {
    return this.appGroupService.findAll(param);
  }
  @Post('list')
  pageList() {
    return this.appGroupService.pageList();
  }

  @Get(':id')
  findOne(@Param() param: IdParamDto) {
    return this.appGroupService.findOne(param);
  }

  @Post()
  create(@Body() dto: CreateAppGroupDto) {
    return this.appGroupService.create(dto);
  }
  @Put()
  update(@Body() dto: CreateAppGroupDto) {
    return this.appGroupService.update(dto);
  }
  @Delete(':id')
  deleteOne(@Param() param: IdParamDto) {
    return this.appGroupService.deleteOne(param);
  }
}
