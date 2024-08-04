import { PartialType } from '@nestjs/mapped-types';

import { CreateApiOriginDto } from './createApiOrigin.dto';

export class UpdateApiOriginDto extends PartialType(CreateApiOriginDto) {}
