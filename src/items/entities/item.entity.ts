import { BaseEntity } from 'src/database/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Item extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  barcode: string;
}
