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
import { CreateDesignerDto } from './dto/createDesigner.dto';
import { IdParamDto } from './dto/idParam.dto';
import { DesignerService } from './designer.service';
import { TransformInterceptor } from 'src/transform.interceptor';
import { UpdateDesignerDto } from './dto/updateDesigner.dto';

@Controller('designer')
@UseInterceptors(TransformInterceptor)
export class DesignerController {
  constructor(private designerService: DesignerService) {}

  @Get('/')
  findAll(@Query() param: IdParamDto) {
    return this.designerService.findAll(param);
  }
  @Post('list')
  pageList() {
    return this.designerService.pageList();
  }

  @Get(':id')
  findOne(@Param() param: IdParamDto) {
    return this.designerService.findOne(param);
  }

  @Post()
  create(@Body() dto: CreateDesignerDto) {
    return this.designerService.create(dto);
  }

  @Put(':id')
  update(@Param() param: IdParamDto, @Body() dto: UpdateDesignerDto) {
    return this.designerService.update(param.id, dto);
  }
  @Delete(':id')
  deleteOne(@Param() param: IdParamDto) {
    return this.designerService.deleteOne(param);
  }
}
