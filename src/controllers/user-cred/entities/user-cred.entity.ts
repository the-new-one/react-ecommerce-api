import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserCred {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 30,
  })
  firstname: string;
  @Column({ length: 30 })
  middlename: string;
  @Column({ length: 30 })
  lastname: string;
  @Column({ length: 11 })
  contactno: string;
  @Column({ length: 200 })
  address: string;
}
