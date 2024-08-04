import {} from '@nestjs/common';
import { Allow, IsOptional, IsString } from 'class-validator';

export class CreateChartDto {
  @IsString()
  @IsOptional()
  name: string;
  @IsString()
  @IsOptional()
  type: string;
  @Allow()
  description: string;
  @Allow()
  content: string;
  @Allow()
  coverThumbnail;
}
