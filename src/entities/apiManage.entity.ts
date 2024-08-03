import { Entity, Column } from 'typeorm';
import { SysColumns } from './sysColumns';

@Entity()
export class ApiManage extends SysColumns {
  @Column({ unique: true })
  name: string;
  @Column({
    // enum: ['js', 'json', 'http', 'magic'],
  })
  type: string;

  @Column({
    default: null,
  })
  description: string;
  @Column({
    type: 'longtext',
  })
  content: string;

  @Column({
    default: null,
  })
  url: string;
  @Column({
    default: null,
  })
  method: string;

  @Column({
    default: null,
  })
  groupName: string;
  @Column({
    default: null,
  })
  baseName: string;
  @Column({
    default: null,
  })
  originName: string;
  @Column({
    type: 'longtext',
  })
  headers: string;
}
