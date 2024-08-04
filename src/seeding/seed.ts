import { dbConfig } from '../config/dbConfig';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions, runSeeders } from 'typeorm-extension';
import { ChartFactory } from './user.factory';
import { MainSeeder } from './main.seeder';
const options: DataSourceOptions & SeederOptions = {
  ...dbConfig,
  factories: [ChartFactory],
  seeds: [MainSeeder],
};

const datasource = new DataSource(options);
datasource.initialize().then(async () => {
  await datasource.synchronize(true);
  await runSeeders(datasource);
  process.exit();
});
