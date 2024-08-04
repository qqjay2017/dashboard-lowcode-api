import { PartialType } from '@nestjs/mapped-types';

import { CreateChartDto } from './createChart.dto';

export class UpdateChartDto extends PartialType(CreateChartDto) {}
