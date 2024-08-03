import {} from '@nestjs/common';
import { Allow, IsString } from 'class-validator';

export class CreateChartDto {
  @IsString()
  name: string;
  @IsString()
  type: string;
  @Allow()
  description: string;
  @Allow()
  content: string;
  @Allow()
  coverThumbnail;
}
