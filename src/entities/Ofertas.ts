import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Ofertas {
    @PrimaryGeneratedColumn()
    id: string
    @Column()
    name: string
    @Column()
    descripcion: string
    @Column()
    fch_inicio: Date
    @Column()
    fch_fin: Date
    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date
}