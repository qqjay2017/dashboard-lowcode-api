import { Module } from '@nestjs/common';
import { ApiManageController } from './api-manage.controller';
import { ApiManageService } from './api-manage.service';
import { getFeaturePipes } from 'src/config/getFeaturePipes';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiManage } from 'src/entities/apiManage.entity';
import { ApiGroup } from 'src/entities/apiGroup.entity';
import { ApiBase } from 'src/entities/apiBase.entity';
import { ApiOrigin } from 'src/entities/apiOrigin.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ApiManage, ApiGroup, ApiBase, ApiOrigin]),
  ],
  controllers: [ApiManageController],
  providers: [...getFeaturePipes(), ApiManageService],
  exports: [ApiManageService],
})
export class ApiManageModule {}
