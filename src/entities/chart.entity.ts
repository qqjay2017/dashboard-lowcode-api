import { Entity, Column } from 'typeorm';
import { SysColumns } from './sysColumns';

@Entity()
export class Chart extends SysColumns {
  @Column({ unique: true })
  name: string;
  @Column({
    default: 'other',
  })
  type: string;

  @Column()
  @Column({ default: '' })
  description: string;
  @Column({
    type: 'longtext',
  })
  content: string;
  @Column({ default: '' })
  coverThumbnail?: string;
}
