import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import eventRoutes from './routes/events.js';
import cityRoutes from './routes/cities.js';
import messageRoutes from './routes/messages.js';

dotenv.config();
connectDB();

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) callback(null, true);
    else callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/messages', messageRoutes);

app.get('/', (req, res) => res.json({ message: 'NextStop API running' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));