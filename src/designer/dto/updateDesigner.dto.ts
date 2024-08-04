import { PartialType } from '@nestjs/mapped-types';
import { CreateDesignerDto } from './createDesigner.dto';

export class UpdateDesignerDto extends PartialType(CreateDesignerDto) {}
