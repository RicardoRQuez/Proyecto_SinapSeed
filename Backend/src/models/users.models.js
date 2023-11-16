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
    email:{
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
    password:{
        type:String,
        required:true,
        trim:true
    },
    situacionLaboral:{
        type:String,
        required:true
    },
    administrador: { 
        type: Boolean, 
        default: false 
    },
    imagen: {
        type: Buffer,
      }
},{
    timestamps:true,
})

export default mongoose.model('User', userSchema);


