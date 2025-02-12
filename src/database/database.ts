import { DataSource } from "typeorm";
import { User } from "../entities/Users";
import { Categoria } from "../entities/Categorias";
import { Productos } from "../entities/Productos";
import { Ofertas } from "../entities/Ofertas";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "hdcinema-db",
    port: 3306,
    username: "hdcinema",
    password: "hdcinema",
    database: "hdcinema",
    entities: [User,Categoria,Productos,Ofertas],
    synchronize: true,
    logging: true,
})