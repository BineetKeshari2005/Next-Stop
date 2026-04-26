import express from 'express';
import User from '../models/User.js';
import Review from '../models/Review.js';
import protect from '../middleware/auth.js';

const router = express.Router();

// GET /api/user/lists  — get all saved lists for logged-in user
router.get('/lists', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('bucketListCities visitedCities bucketListEvents');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/user/bucketlist/city  — toggle a city in bucket list
router.post('/bucketlist/city', protect, async (req, res) => {
  const { city } = req.body;
  try {
    const user = await User.findById(req.user._id);
    const idx = user.bucketListCities.indexOf(city);
    if (idx > -1) {
      user.bucketListCities.splice(idx, 1); // remove
    } else {
      user.bucketListCities.push(city);
      // remove from visited if adding to bucket list
      user.visitedCities = user.visitedCities.filter(c => c !== city);
    }
    await user.save();
    res.json({ bucketListCities: user.bucketListCities, visitedCities: user.visitedCities });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/user/visited/city  — toggle a city in visited
router.post('/visited/city', protect, async (req, res) => {
  const { city } = req.body;
  try {
    const user = await User.findById(req.user._id);
    const idx = user.visitedCities.indexOf(city);
    if (idx > -1) {
      user.visitedCities.splice(idx, 1);
    } else {
      user.visitedCities.push(city);
      // remove from bucket list if marking as visited
      user.bucketListCities = user.bucketListCities.filter(c => c !== city);
    }
    await user.save();
    res.json({ bucketListCities: user.bucketListCities, visitedCities: user.visitedCities });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/user/bucketlist/event  — toggle an event in bucket list
router.post('/bucketlist/event', protect, async (req, res) => {
  const { eventId } = req.body;
  try {
    const user = await User.findById(req.user._id);
    const idx = user.bucketListEvents.indexOf(eventId);
    if (idx > -1) {
      user.bucketListEvents.splice(idx, 1);
    } else {
      user.bucketListEvents.push(eventId);
    }
    await user.save();
    res.json({ bucketListEvents: user.bucketListEvents });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/user/reviews  — add or update a review for a city
router.post('/reviews', protect, async (req, res) => {
  const { cityName, rating, comment } = req.body;
  try {
    const review = await Review.findOneAndUpdate(
      { userId: req.user._id, cityName },
      { userName: req.user.name, rating, comment },
      { upsert: true, new: true }
    );
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
