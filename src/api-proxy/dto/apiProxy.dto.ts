import {} from '@nestjs/common';
import { Allow, IsString } from 'class-validator';

export class ApiProxyDto {
  @IsString()
  apiId: string;
  @Allow()
  data?: any;
  @Allow()
  formValues?: any;

  @Allow()
  headers?: any;
  @Allow()
  origin?: string;
}
