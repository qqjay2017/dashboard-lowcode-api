import { Entity, Column } from 'typeorm';
import { SysColumns } from './sysColumns';

@Entity()
export class Designer extends SysColumns {
  @Column({ unique: true })
  name: string;

  @Column({ default: '' })
  coverThumbnail?: string;

  @Column({ default: '' })
  description: string;
  @Column({ type: 'longtext' })
  content: string;
  @Column({ default: null })
  appGroupId?: string;
  @Column({ default: null })
  appGroupName?: string;
}
