import { Faker } from '@faker-js/faker';
import { Chart } from '../entities/chart.entity';
import { setSeederFactory } from 'typeorm-extension';

export const ChartFactory = setSeederFactory(Chart, (faker: Faker) => {
  const chart = new Chart();
  chart.name = faker.person.firstName();
  chart.content = 'option = {}';
  chart.description = faker.lorem.sentence();
  chart.coverThumbnail = faker.image.urlPicsumPhotos();
  return chart;
});
