import { Allow, IsOptional } from 'class-validator';

export class IdParamDto {
  @Allow()
  @IsOptional()
  id?: string;
  @Allow()
  appGroupName?: string;
  @Allow()
  appGroupId?: string;
}
