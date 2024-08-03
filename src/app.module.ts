import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DesignerModule } from './designer/designer.module';
import { AppGroupModule } from './app-group/app-group.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/dbConfig';
import { ApiManageModule } from './api-manage/api-manage.module';
import { ApiGroupModule } from './api-group/api-group.module';
import { ApiBaseModule } from './api-base/api-base.module';
import { ApiOriginModule } from './api-origin/api-origin.module';

@Module({
  imports: [
    DesignerModule,
    AppGroupModule,
    TypeOrmModule.forRoot(dbConfig),
    ApiManageModule,
    ApiGroupModule,
    ApiBaseModule,
    ApiOriginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
