import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { getFeaturePipes } from 'src/config/getFeaturePipes';
import { ApiBase } from 'src/entities/apiBase.entity';
import { ApiBaseController } from './api-base.controller';
import { ApiBaseService } from './api-base.service';

@Module({
  imports: [TypeOrmModule.forFeature([ApiBase])],
  controllers: [ApiBaseController],
  providers: [...getFeaturePipes(), ApiBaseService],
})
export class ApiBaseModule {}
