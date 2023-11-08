import mongoose from 'mongoose'


export const dbConnection = async() => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/SinapSeed");
        console.log('Conectado a la base de datos de SinapSeed...');

    }catch(err){
        console.log(err)
        throw new Error("Error a la hora de inciar la base de datos");
    }
 }
