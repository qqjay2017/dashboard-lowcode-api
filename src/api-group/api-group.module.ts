import { Module } from '@nestjs/common';
import { ApiGroupController } from './api-group.controller';
import { ApiGroupService } from './api-group.service';
import { getFeaturePipes } from 'src/config/getFeaturePipes';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiGroup } from 'src/entities/apiGroup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApiGroup])],
  controllers: [ApiGroupController],
  providers: [...getFeaturePipes(), ApiGroupService],
})
export class ApiGroupModule {}
