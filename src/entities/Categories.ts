import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export interface ICategory {
    id?: string
    name: string
    description: string
    img1: string
    img2: string
}

@Entity()
export class Categories extends BaseEntity implements ICategory {
    @PrimaryGeneratedColumn()
    id: string
    @Column()
    name: string
    @Column()
    description: string
    @Column()
    img1: string
    @Column()
    img2: string
    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date

    constructor({name, description, img1, img2} : Partial<ICategory> = {} ) { 
        super();
        if (name) this.name = name;
        if (description) this.description = description;
        if (img1) this.img1 = img1;
        if (img2) this.img2 = img2;
    }
}