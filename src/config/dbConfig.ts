import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { isDevelopment } from '.';

import { join } from 'node:path';

export const dbConfig: MysqlConnectionOptions = {
  type: 'mysql',
  username: 'root',
  password: 'mysecretpassword',
  host: '192.168.0.101',
  port: 3306,
  database: 'dashboard',
  synchronize: isDevelopment,
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
};
