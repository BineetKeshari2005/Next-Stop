import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title:    { type: String, required: true },
  date:     { type: String, required: true },
  time:     { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, enum: ['Music', 'Sports', 'Family', 'Arts', 'Culture', 'Food'], required: true },
  image:    { type: String, required: true },
  price:    { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('Event', eventSchema);
