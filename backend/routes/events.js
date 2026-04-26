import express from 'express';
import Event from '../models/Event.js';
import protect from '../middleware/auth.js';

const router = express.Router();

// GET /api/events  — get all events, optional ?category=Music
router.get('/', async (req, res) => {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const events = await Event.find(filter).sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/events/:id
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
