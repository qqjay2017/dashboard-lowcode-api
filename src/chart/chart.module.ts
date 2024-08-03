import { Module } from '@nestjs/common';
import { ChartController } from './chart.controller';
import { ChartService } from './chart.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getFeaturePipes } from 'src/config/getFeaturePipes';
import { Chart } from 'src/entities/chart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chart])],
  controllers: [ChartController],
  providers: [...getFeaturePipes(), ChartService],
})
export class ChartModule {}
