import { Allow } from 'class-validator';

export class IdParamDto {
  @Allow()
  id?: string;
  @Allow()
  appGroupName?: string;
  @Allow()
  appGroupId?: string;
}
