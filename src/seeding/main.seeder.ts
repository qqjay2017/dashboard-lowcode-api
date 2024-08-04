import { Chart } from '../entities/chart.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class MainSeeder implements Seeder {
  track?: boolean;
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const chartRepo = dataSource.getRepository(Chart);
    await chartRepo.save([]);

    const chartFatory = factoryManager.get(Chart);
    const charts = await chartFatory.saveMany(2);
    console.log(charts, 'charts');
  }
}
