import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export interface IUser {
    id?: string
    name: string
    email: string
    password: string
    phone: string
    address: string
}

@Entity()
export class User extends BaseEntity implements IUser {
    @PrimaryGeneratedColumn()
    id: string
    @Column()
    name: string
    @Column()
    email: string
    @Column()
    password: string
    @Column()
    phone: string
    @Column()
    address: string
    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date

    constructor({name, email, password, phone, address} : Partial<IUser> = {} ) { 
        super();
        if (name) this.name = name;
        if (email) this.email = email;
        if (password) this.password = password;
        if (phone) this.phone = phone;
        if (address) this.address = address;
    }
}