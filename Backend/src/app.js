import express from 'express'
import morgan from 'morgan';
import userRouter from './routes/usuarios.routes.js';
import foroRouter from './routes/foro.routes.js';

const app = express()

//Middleware generales
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use("/api/v1", userRouter, foroRouter)



export default app;