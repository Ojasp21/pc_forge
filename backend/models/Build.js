import mongoose from 'mongoose';


const BuildSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    parts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Part'
    }]
  });
  
  export default mongoose.model('Build', BuildSchema);