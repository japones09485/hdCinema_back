import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import { homeRouter } from "./routes/home.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { adminRouter } from "./routes/admin.routes";

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
app.use("/admin", adminRouter);

// Middleware de manejo de errores
app.use(errorHandler);

export default app;
