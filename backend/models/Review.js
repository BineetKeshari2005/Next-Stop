import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userName: { type: String, required: true },
  cityName: { type: String, required: true }, // matches your travelData city names
  rating:   { type: Number, min: 1, max: 5, required: true },
  comment:  { type: String, required: true, trim: true },
}, { timestamps: true });

// One review per user per city
reviewSchema.index({ userId: 1, cityName: 1 }, { unique: true });

export default mongoose.model('Review', reviewSchema);
