import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  
  nombre: {
    type:String,
    required:true,
    trim:true 
  },
  comentario: {
    type: String,
    required:true,
    trim:true 
  },
  
},{
  timestamps:true,
});

export default mongoose.model('Comment', commentSchema);

