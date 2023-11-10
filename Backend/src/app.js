import express from 'express'
import morgan from 'morgan';
import cors from 'cors';

//importaciones de rutas

import usuariosRoutes from './routes/usuarios.routes.js'


const app = express()

//middleware generales

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//rutas

app.use("/api/usuarios", usuariosRoutes);

export default app;