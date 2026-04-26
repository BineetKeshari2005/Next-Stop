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

// Manual CORS headers — works with Express 5
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/messages', messageRoutes);

app.get('/', (req, res) => res.json({ message: 'NextStop API running' }));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
