import { Entity, Column } from 'typeorm';
import { SysColumns } from './sysColumns';

@Entity()
export class ApiOrigin extends SysColumns {
  @Column({ unique: true })
  name: string;
}
