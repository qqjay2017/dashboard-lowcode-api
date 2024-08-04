import { ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

export const getFeaturePipes = () => {
  return [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        skipUndefinedProperties: true,
        skipNullProperties: true,
        skipMissingProperties: true,

        whitelist: true,
        forbidNonWhitelisted: false,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    },
  ];
};
