import { Entity, Column } from 'typeorm';
import { SysColumns } from './sysColumns';

@Entity()
export class ApiFilter extends SysColumns {
  @Column({ unique: true })
  name: string;

  @Column()
  description: string;
  @Column({
    type: 'longtext',
  })
  content: string;
}
