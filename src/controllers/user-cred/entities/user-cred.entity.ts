import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserCred {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 30, type: 'int'
  })
  firstname: string;
  @Column({ length: 30, type: 'varchar' })
  middlename: string;
  @Column({ length: 30, type: 'varchar' })
  lastname: string;
  @Column({ length: 11, type: 'varchar' })
  contactno: string;
  @Column({ length: 200, type: 'text' })
  address: string;
}
