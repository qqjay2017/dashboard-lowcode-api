import {} from '@nestjs/common';
import { Allow } from 'class-validator';

export class CreateDesignerDto {
  @Allow()
  name: string;
  @Allow()
  coverThumbnail: string;
  @Allow()
  description: string;
  @Allow()
  content: string;
  @Allow()
  appGroupId?: string;
  @Allow()
  appGroupName?: string;
}
