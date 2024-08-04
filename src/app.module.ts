import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DesignerModule } from './designer/designer.module';
import { AppGroupModule } from './app-group/app-group.module';

import { ApiManageModule } from './api-manage/api-manage.module';
import { ApiGroupModule } from './api-group/api-group.module';
import { ApiBaseModule } from './api-base/api-base.module';
import { ApiOriginModule } from './api-origin/api-origin.module';
import { ApiProxyModule } from './api-proxy/api-proxy.module';
import { ChartModule } from './chart/chart.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    }),
    DatabaseModule,
    DesignerModule,
    AppGroupModule,

    ApiManageModule,
    ApiGroupModule,
    ApiBaseModule,
    ApiOriginModule,
    ApiProxyModule,
    ChartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
