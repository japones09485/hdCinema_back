import {Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Categories } from "./Categories";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: string
    @Column()
    name: string
    @Column()
    description: string
    @Column()
    fk_category: number
    @Column()
    img1: string
    @Column()
    img2: string
    @Column()
    img3: string

    // Relationships
    // Relationship with Category
    @ManyToMany(()=> Categories)
    @JoinTable({
        name: `rel_products_categories`,
        joinColumn: {
            name: `fk_product`,
            referencedColumnName: `id`,
        },
        inverseJoinColumn:{
            name: `fk_category`,
            referencedColumnName: `id`,
        }
    })
    categories: Categories[]

    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date
}