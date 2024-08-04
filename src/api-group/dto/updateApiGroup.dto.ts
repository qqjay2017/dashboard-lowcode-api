import { PartialType } from '@nestjs/mapped-types';

import { CreateApiGroupDto } from './createApiGroup.dto';

export class UpdateApiGroupDto extends PartialType(CreateApiGroupDto) {}
