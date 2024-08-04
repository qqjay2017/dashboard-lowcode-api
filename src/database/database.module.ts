import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'src/config/dbConfig';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const config = {
            ...dbConfig,
            username:
              (configService.get('DATABASE_USERNAME') as string) || 'root',
            password:
              (configService.get('DATABASE_PASSWORD') as string) ||
              'mysecretpassword',
            host:
              (configService.get('DATABASE_HOST') as string) || '192.168.0.101',
            port: Number(configService.get('DATABASE_PORT') || "3306"),
            database:
              (configService.get('DATABASE_DATABASE') as string) || 'dashboard',
          }
        return config;
      },
    }),
  ],
})
export class DatabaseModule {}
