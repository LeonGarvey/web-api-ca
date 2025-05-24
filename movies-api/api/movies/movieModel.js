import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const Schema = mongoose.Schema;

const MovieSchema = new Schema({
   title: { type: String, required: true },
  genre: { type: String },
  year: { type: Number },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true } // Link to the user
});


  

export default mongoose.model('Movie', MovieSchema);
