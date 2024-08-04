import { ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ParseIdParamPipe } from 'src/designer/pipes/parseIdPipe';

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
    {
      provide: APP_PIPE,
      useValue: new ParseIdParamPipe(),
    },
  ];
};
