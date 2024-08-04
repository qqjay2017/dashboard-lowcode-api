import {} from '@nestjs/common';
import { Allow, IsString } from 'class-validator';

export class CreateDesignerDto {
  @IsString()
  name: string;
  @Allow()
  coverThumbnail: string;
  @Allow()
  description: string;
  @IsString()
  content: string;
  @Allow()
  appGroupId?: string;
  @Allow()
  appGroupName?: string;
}
