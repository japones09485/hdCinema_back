import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import { homeRouter } from "./routes/home.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { config } from "./config/env";

const app = express();

// Middlewares de seguridad
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan("combined"));

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use("/", homeRouter);

// Middleware de manejo de errores
app.use(errorHandler);

export default app;
