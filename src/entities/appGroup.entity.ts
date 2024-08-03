import { Entity, Column } from 'typeorm';
import { SysColumns } from './sysColumns';

@Entity()
export class AppGroup extends SysColumns {
  @Column({ unique: true })
  name: string;

  @Column({
    default: null,
  })
  description: string;
  @Column({
    default: null,
  })
  icon: string;
  @Column({
    default: 0,
  })
  sortNum: number;
}
