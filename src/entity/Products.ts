import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length: 20})
    name: string;
    @Column()
    price: number;
    @Column()
    quantity: number;
}