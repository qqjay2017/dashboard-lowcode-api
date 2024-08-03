import {} from '@nestjs/common';
import { IsString } from 'class-validator';

export class CreateApiGroupDto {
  @IsString()
  name: string;
}
