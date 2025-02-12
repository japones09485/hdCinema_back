import { DataSource } from "typeorm";
import { User } from "../entities/Users";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "hdcinema-db",
    port: 3306,
    username: "hdcinema",
    password: "hdcinema",
    database: "hdcinema",
    entities: [User],
    synchronize: true,
    logging: true,
})