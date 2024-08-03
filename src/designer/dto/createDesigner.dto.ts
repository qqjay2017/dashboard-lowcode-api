import {} from '@nestjs/common';
import { IsString, IsOptional } from 'class-validator';

export class CreateDesignerDto {
  @IsString()
  name: string;
  @IsString()
  @IsOptional()
  coverThumbnail: string;
  @IsString()
  @IsOptional()
  description: string;
  @IsString()
  @IsOptional()
  content: string;
  @IsString()
  @IsOptional()
  appGroupId?: string;
  @IsString()
  @IsOptional()
  appGroupName?: string;
}
