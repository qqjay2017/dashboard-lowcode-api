import {} from '@nestjs/common';
import { IsString, Allow, IsNumber } from 'class-validator';

export class CreateAppGroupDto {
  @IsString()
  name: string;

  @Allow()
  description?: string;
  @Allow()
  icon?: string;
  @IsNumber()
  @Allow()
  sortNum?: number;
}
