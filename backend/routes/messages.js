import express from 'express';
import Message from '../models/Message.js';
import protect from '../middleware/auth.js';

const router = express.Router();

// POST /api/messages
// Send a new contact message
router.post('/', protect, async (req, res) => {
  const { subject, message } = req.body;

  try {
    const newMessage = await Message.create({
      user: req.user._id,
      name: req.user.name,
      email: req.user.email,
      subject,
      message
    });

    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: 'Failed to send message', error: err.message });
  }
});

export default router;
