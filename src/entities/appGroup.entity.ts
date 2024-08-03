import { Entity, Column } from 'typeorm';
import { SysColumns } from './sysColumns';

@Entity()
export class AppGroup extends SysColumns {
  @Column({ unique: true })
  name: string;

  @Column()
  description: string;
  @Column()
  icon: string;
  @Column({
    default: 0,
  })
  sortNum: number;
}
