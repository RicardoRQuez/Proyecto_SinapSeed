import app from './src/app.js';
import { config } from 'dotenv';
config();

const PORT = process.env.PORT || 3001

app.listen(PORT)
console.log(`Servidor conectado en el puerto http://localhost:${PORT}`)