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
import { UpdateChartDto } from './dto/updateChart.dto';
import { PaginationDto } from 'src/designer/dto/pagination.dto';

@Controller('chart')
@UseInterceptors(TransformInterceptor)
export class ChartController {
  constructor(private apiGroupService: ChartService) {}

  @Get()
  findAll(@Query() param: IdParamDto) {
    return this.apiGroupService.findAll(param);
  }
  @Get('list')
  pageList(@Query() pageParam: PaginationDto, @Query() param: IdParamDto) {
    return this.apiGroupService.pageList(pageParam, param);
  }

  @Get(':id')
  findOne(@Param() param: IdParamDto) {
    return this.apiGroupService.findOne(param);
  }

  @Post()
  create(@Body() dto: CreateChartDto) {
    return this.apiGroupService.create(dto);
  }
  @Put(':id')
  update(@Param() param: IdParamDto, @Body() dto: UpdateChartDto) {
    return this.apiGroupService.update(param.id, dto);
  }
  @Delete(':id')
  deleteOne(@Param() param: IdParamDto) {
    return this.apiGroupService.deleteOne(param);
  }
}
