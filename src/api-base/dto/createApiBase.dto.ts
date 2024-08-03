import {} from '@nestjs/common';
import { IsString } from 'class-validator';

export class CreateApiBaseDto {
  @IsString()
  name: string;
}
