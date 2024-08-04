import { PartialType } from '@nestjs/mapped-types';
import { CreateAppGroupDto } from './createAppGroup.dto';

export class UpdateAppGroupDto extends PartialType(CreateAppGroupDto) {}
