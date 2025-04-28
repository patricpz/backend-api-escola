import express from "express";
import dotenv from "dotenv";
import homeRoutes from "./src/routes/homeRoutes";
import alunoRoutes from "./src/routes/alunoRoutes";
import userRoutes from "./src/routes/userRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import imageROutes from "./src/routes/imageRoutes";
import './src/database'

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homeRoutes);
app.use('/', alunoRoutes);
app.use('/', userRoutes);
app.use('/', tokenRoutes);
app.use('/', imageROutes);

export default app;
