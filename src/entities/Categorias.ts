import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: string
    @Column()
    name: string
    @Column()
    descripcion: string
    @Column()
    img1: string
    @Column()
    img2: string
    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date
}