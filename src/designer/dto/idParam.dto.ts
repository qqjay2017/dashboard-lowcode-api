import { IsOptional, IsString } from 'class-validator';

export class IdParamDto {
  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  @IsOptional()
  appGroupName: string;
}
