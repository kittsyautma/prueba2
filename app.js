import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import{test} from './backend/controllers/alumnos.controllers.js';


dotenv.config();
mongoose.connect(process.env.url_bd)
.then(() => console.log("Si funciona la base de datos"))
.catch((error) => console.log("Algo fallo con la conexion"));

const app = express();
app.use(cors());
app.listen(4000, () => console.log("Funciona el servidor"));

