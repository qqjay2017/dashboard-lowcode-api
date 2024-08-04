import { Module } from '@nestjs/common';
import { DesignerController } from './designer.controller';

import { DesignerService } from './designer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Designer } from 'src/entities/designer.entity';
import { getFeaturePipes } from 'src/config/getFeaturePipes';

@Module({
  imports: [TypeOrmModule.forFeature([Designer])],
  controllers: [DesignerController],
  providers: [...getFeaturePipes(), DesignerService],
})
export class DesignerModule {}
