import mongoose from 'mongoose';

const cursoSchema = new mongoose.Schema({
  
    titulo: {
    type:String,
    required:true,
    trim:true 
  },
    descripcion: {
    type: String,
    required:true,
    trim:true 
  },
    resumen: {
    type: String,
    required:true,
    trim:true 
  },
    imagen: {
    type: Buffer,
    required:true
  },

},{
  timestamps:true,
});

export default mongoose.model('Curso', cursoSchema);

