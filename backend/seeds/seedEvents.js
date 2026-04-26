// Run once: node seeds/seedEvents.js
// This replaces the uploadEvents() call that was running on every page load in Firebase.jsx

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Event from '../models/Event.js';

dotenv.config();

const events = [
  { title: "Arijit Singh Live in Mumbai", date: "Sep 10, 2025", time: "07:00 PM - 11:00 PM", location: "Dome NSCI, Mumbai", category: "Music", image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753116065/Arijit-Singh-Stage-scaled_p8qfe2.jpg" },
  { title: "NH7 Weekender Pune", date: "Nov 22, 2025", time: "04:00 PM - 11:00 PM", location: "Laxmi Lawns, Pune", category: "Music", image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753119831/NH7-Weekender-2023-Clique-26-1_cxhdzx.jpg" },
  { title: "Sunburn Goa", date: "Dec 27, 2025", time: "05:00 PM - 12:00 AM", location: "Vagator Beach, Goa", category: "Music", image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753119954/sunburn_xc6pil.jpg" },
  { title: "IPL Final 2026", date: "May 30, 2026", time: "07:30 PM", location: "Narendra Modi Stadium, Ahmedabad", category: "Sports", image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753120200/ipl_final_cover.jpg" },
  { title: "Jaipur Literature Festival", date: "Jan 29, 2026", time: "09:00 AM - 07:00 PM", location: "Diggi Palace, Jaipur", category: "Culture", image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753120100/jlf_cover.jpg" },
];

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Event.deleteMany();
  await Event.insertMany(events);
  console.log('Events seeded successfully!');
  process.exit();
};

seed().catch(err => { console.error(err); process.exit(1); });
