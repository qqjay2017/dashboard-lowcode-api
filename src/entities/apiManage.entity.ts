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

  @Column()
  description: string;
  @Column({
    type: 'longtext',
  })
  content: string;

  @Column()
  url: string;
  @Column()
  method: string;

  @Column()
  groupName: string;
  @Column()
  baseName: string;
  @Column()
  originName: string;
  @Column({
    type: 'longtext',
  })
  headers: string;
}
