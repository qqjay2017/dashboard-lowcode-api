import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdParamDto } from 'src/designer/dto';
import { Chart } from 'src/entities/chart.entity';
import { Repository } from 'typeorm';
import { CreateChartDto } from './dto/createChart.dto';
import { UpdateChartDto } from './dto/updateChart.dto';

@Injectable()
export class ChartService {
  constructor(
    @InjectRepository(Chart)
    private chartRepo: Repository<Chart>,
  ) {}
  async findAll(param: IdParamDto) {
    return await this.chartRepo.find({
      order: {
        updateAt: 'DESC',
      },
      where: {
        ...param,
      },
    });
  }
  async pageList() {}
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
