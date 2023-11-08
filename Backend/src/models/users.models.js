import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombre:{ 
        type:String,
        required:true,
        trim:true     
    },
    rut:{
        type:String,
        required:true,
        trim:true, 
        unique:true
    },
    correo:{
        type:String,
        required:true,
        trim:true, 
        unique:true
    },
    telefono:{
        type:Number,
        required:true,
        trim:true 
    },
    region:{
        type:String,
        required:true,
        trim:true
    },
    contraseña:{
        type:String,
        required:true,
        trim:true
    },
    situacionLaboral:{
        type:String,
        required:true
    },
   
},{
    timestamps:true,
})

export default mongoose.model('User', userSchema);


