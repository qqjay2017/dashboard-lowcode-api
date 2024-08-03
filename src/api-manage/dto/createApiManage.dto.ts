import {} from '@nestjs/common';
import { IsString, Allow } from 'class-validator';

export class CreateApiManageDto {
  @IsString()
  name: string;
  @IsString()
  type: string;
  @Allow()
  description?: string;
  @Allow()
  content?: string;

  @Allow()
  url: string;
  @Allow()
  method: string;

  @Allow()
  groupName: string;
  @Allow()
  baseName: string;
  @Allow()
  originName: string;
  @Allow()
  headers: string;
}
