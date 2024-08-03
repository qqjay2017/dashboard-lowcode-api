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
import { TransformInterceptor } from 'src/transform.interceptor';
import { ChartService } from './chart.service';
import { IdParamDto } from 'src/designer/dto';
import { CreateChartDto } from './dto/createChart.dto';

@Controller('chart')
@UseInterceptors(TransformInterceptor)
export class ChartController {
  constructor(private apiGroupService: ChartService) {}

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
  create(@Body() dto: CreateChartDto) {
    return this.apiGroupService.create(dto);
  }
  @Put()
  update(@Body() dto: CreateChartDto) {
    return this.apiGroupService.update(dto);
  }
  @Delete(':id')
  deleteOne(@Param() param: IdParamDto) {
    return this.apiGroupService.deleteOne(param);
  }
}
