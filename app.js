import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import MainRoutes from "./routes/mainRoutes.js";
import loginRoutes from "./routes/login.js";
import Gerenciarroutes from "./routes/Gerenciar.js"
import cookieParser from "cookie-parser";

import ApiUsuarios from "./models/api/UsuariosApi.js";
import ApiInstrumentos from "./models/api/InstrumentosApi.js";
import ApiCursos from "./models/api/CursosApi.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cookieParser())
app.use(helmet());
app.use(morgan("dev"));

app.use("/", loginRoutes);
app.use("/", MainRoutes);
app.use("/", Gerenciarroutes)

app.use("/", ApiCursos);
app.use("/", ApiInstrumentos);
app.use("/", ApiUsuarios);

app.listen(process.env.SERVER_PORT, err => console.log(err));
