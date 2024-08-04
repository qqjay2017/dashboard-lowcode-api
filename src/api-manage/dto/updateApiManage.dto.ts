import { PartialType } from '@nestjs/mapped-types';

import { CreateApiManageDto } from './createApiManage.dto';

export class UpdateApiManageDto extends PartialType(CreateApiManageDto) {}
