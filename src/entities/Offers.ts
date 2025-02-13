import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Offers {
    @PrimaryGeneratedColumn()
    id: string
    @Column()
    name: string
    @Column()
    description: string
    @Column()
    date_start: Date
    @Column()
    date_end: Date
    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date
}