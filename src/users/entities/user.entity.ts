import { BaseEntity } from 'src/database/base.entity';
import { Entity, Column, PrimaryGeneratedColumn, BeforeUpdate, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true, select: false })
  passkey: string;

  @BeforeInsert()
  async updatePassword() {
    this.passkey = await bcrypt.hash(this.email + this.passkey, 12);
  }
}
