import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Categories } from "./Categories";

export interface IProduct {
  id?: string;
  name: string;
  description: string;
  fk_category: number;
  img1: string;
  img2: string;
  img3: string;
}

@Entity()
export class Products extends BaseEntity implements IProduct {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  fk_category: number;
  @Column({ default: "" })
  img1: string;
  @Column({ default: "" })
  img2: string;
  @Column({ default: "" })
  img3: string;

  // Relationships
  // Relationship with Category
  @ManyToMany(() => Categories)
  @JoinTable({
    name: `rel_products_categories`,
    joinColumn: {
      name: `fk_product`,
      referencedColumnName: `id`,
    },
    inverseJoinColumn: {
      name: `fk_category`,
      referencedColumnName: `id`,
    },
  })
  categories: Categories[];

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  constructor({
    name,
    description,
    fk_category,
    img1,
    img2,
    img3,
  }: Partial<IProduct> = {}) {
    super();
    if (name) this.name = name;
    if (description) this.description = description;
    if (fk_category) this.fk_category = fk_category;
    if (img1) this.img1 = img1;
    if (img2) this.img2 = img2;
    if (img3) this.img3 = img3;
  }
}
