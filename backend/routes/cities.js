import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

// GET /api/cities/:cityName/reviews
router.get('/:cityName/reviews', async (req, res) => {
  try {
    const reviews = await Review.find({ cityName: req.params.cityName }).sort({ createdAt: -1 });
    const avgRating = reviews.length
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : null;
    res.json({ reviews, avgRating, count: reviews.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
