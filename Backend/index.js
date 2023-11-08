import app from './src/app.js';
import {dbConnection} from './src/database/db.js'

const PORT = 3000
app.listen(PORT)
console.log(`Servidor conectado en el puerto ${PORT}`)


dbConnection()

