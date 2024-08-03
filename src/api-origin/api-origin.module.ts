import { Module } from '@nestjs/common';
import { ApiOriginController } from './api-origin.controller';
import { ApiOriginService } from './api-origin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiOrigin } from 'src/entities/apiOrigin.entity';
import { getFeaturePipes } from 'src/config/getFeaturePipes';

@Module({
  imports: [TypeOrmModule.forFeature([ApiOrigin])],
  controllers: [ApiOriginController],
  providers: [...getFeaturePipes(), ApiOriginService],
})
export class ApiOriginModule {}
