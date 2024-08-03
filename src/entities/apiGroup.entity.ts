import { Entity, Column } from 'typeorm';
import { SysColumns } from './sysColumns';

@Entity()
export class ApiGroup extends SysColumns {
  @Column({ unique: true })
  name: string;
}
