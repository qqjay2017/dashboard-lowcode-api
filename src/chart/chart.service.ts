import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdParamDto } from 'src/designer/dto';
import { Chart } from '../entities/chart.entity';
import { Repository } from 'typeorm';
import { CreateChartDto } from './dto/createChart.dto';
import { UpdateChartDto } from './dto/updateChart.dto';
import { PaginationDto } from 'src/designer/dto/pagination.dto';
import { getFindPageOptions } from 'src/utils/getFindPageOptions';

@Injectable()
export class ChartService {
  constructor(
    @InjectRepository(Chart)
    private chartRepo: Repository<Chart>,
  ) {}
  async findAll(param: IdParamDto) {
    const list = await this.chartRepo.find({
      order: {
        updateAt: 'DESC',
      },
      where: {
        ...param,
      },
    });
    return (list || []).map((item) => {
      return {
        ...item,
        content: undefined,
      };
    });
  }
  async pageList(pageParam: PaginationDto, param: IdParamDto) {
    const total = await this.chartRepo.count({
      where: {
        ...param,
      },
    });
    const list = await this.chartRepo.find({
      ...getFindPageOptions(pageParam),
      order: {
        updateAt: 'desc',
      },
      where: {
        ...param,
      },
    });
    return {
      rows: (list || []).map((item) => {
        return {
          ...item,
          content: undefined,
        };
      }),
      total: total,
    };
  }
  async findOne(param: IdParamDto) {
    const chartItem = await this.chartRepo.findOne({
      where: {
        ...param,
      },
    });
    if (!chartItem) {
      throw new NotFoundException();
    }

    return chartItem;
  }
  async create(dto: CreateChartDto) {
    return await this.chartRepo.save(dto);
  }
  async update(id: string, dto: UpdateChartDto) {
    return await this.chartRepo.update(id, dto);
  }
  async deleteOne(param: IdParamDto) {
    return await this.chartRepo.softRemove(param);
  }
}
