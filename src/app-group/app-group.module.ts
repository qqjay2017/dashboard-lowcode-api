import { Module } from '@nestjs/common';
import { AppGroupController } from './app-group.controller';
import { AppGroupService } from './app-group.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppGroup } from 'src/entities/appGroup.entity';

import { getFeaturePipes } from 'src/config/getFeaturePipes';

@Module({
  imports: [TypeOrmModule.forFeature([AppGroup])],
  controllers: [AppGroupController],
  providers: [...getFeaturePipes(), AppGroupService],
})
export class AppGroupModule {}
