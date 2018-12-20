import mongoose from 'mongoose';

const Kitten = mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.model('Kitten', Kitten);
