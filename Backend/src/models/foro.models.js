import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({

  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Curso'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
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

