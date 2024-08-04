import {} from '@nestjs/common';
import { PartialType } from '@nestjs/mapped-types';

import { CreateApiBaseDto } from './createApiBase.dto';

export class UpdateApiBaseDto extends PartialType(CreateApiBaseDto) {}
