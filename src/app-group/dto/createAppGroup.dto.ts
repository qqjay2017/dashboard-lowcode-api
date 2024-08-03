import {} from '@nestjs/common';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateDesignerDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  icon?: string;
  @IsNumber()
  @IsOptional()
  sortNum?: string;
}
