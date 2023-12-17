import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductItem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  quantity: number;
}
