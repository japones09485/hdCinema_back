import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Productos {
    @PrimaryGeneratedColumn()
    id: string
    @Column()
    name: string
    @Column()
    descripcion: string
    @Column()
    fk_categoria: number
    @Column()
    img1: string
    @Column()
    img2: string
    @Column()
    img3: string
    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date
}