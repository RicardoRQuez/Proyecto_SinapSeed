import mongoose from 'mongoose'


export const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.CONEXION_DB);
        console.log('Conectado a la base de datos de SinapSeed...');

    }catch(err){
        console.log(err)
        throw new Error("Error a la hora de inciar la base de datos");
    }
 }
