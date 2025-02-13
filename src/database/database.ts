import { DataSource } from "typeorm";
import { User } from "../entities/Users";
import { Categories } from "../entities/Categories";
import { Products } from "../entities/Products";
import { Offers } from "../entities/Offers";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "hdcinema-db",
    port: 3306,
    username: "hdcinema",
    password: "hdcinema",
    database: "hdcinema",
    entities: [User,Categories,Products,Offers],
    synchronize: true,
    logging: true,
})