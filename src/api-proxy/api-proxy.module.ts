import { Module } from '@nestjs/common';
import { ApiProxyController } from './api-proxy.controller';

import { TypeOrmModule } from '@nestjs/typeorm';

import { getFeaturePipes } from 'src/config/getFeaturePipes';
import { ApiManage } from 'src/entities/apiManage.entity';
import { ApiProxyService } from './api-proxy.service';
import { ApiManageModule } from 'src/api-manage/api-manage.module';

@Module({
  imports: [TypeOrmModule.forFeature([ApiManage]), ApiManageModule],
  controllers: [ApiProxyController],
  providers: [...getFeaturePipes(), ApiProxyService],
})
export class ApiProxyModule {}
