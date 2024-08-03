export const NODE_ENV =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

export const isProduction = NODE_ENV === 'production';
export const isDevelopment = NODE_ENV === 'development';
