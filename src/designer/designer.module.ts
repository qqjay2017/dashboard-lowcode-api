import { Module, ValidationPipe } from '@nestjs/common';
import { DesignerController } from './designer.controller';
import { APP_PIPE } from '@nestjs/core';
import { DesignerService } from './designer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Designer } from 'src/entities/designer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Designer])],
  controllers: [DesignerController],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        // whitelist: true,
        // forbidNonWhitelisted: false,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    },
    DesignerService,
  ],
})
export class DesignerModule {}
