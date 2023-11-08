import express from 'express'
import morgan from 'morgan';
import router from './routes/usuarios.routes.js';

const app = express()

//Middleware generales
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use("/api/v1", router)



export default app;