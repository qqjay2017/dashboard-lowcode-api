import {} from '@nestjs/common';
import { IsString } from 'class-validator';

export class CreateApiOriginDto {
  @IsString()
  name: string;
}
