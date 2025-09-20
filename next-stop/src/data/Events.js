// import React, { useEffect, useState } from "react";
// import { fetchEvents } from "../Firebase/eventsAPI"; // import your "API"
// import { motion } from "framer-motion";

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchEvents().then(data => {
//       setEvents(data);
//       setLoading(false);
//     });
//   }, []);

//   // if (loading) return <p>Loading events...</p>;

//   return (
//     <div className="events-grid">
//       {events.map(event => (
//         <motion.div key={event.id} className="event-card" whileHover={{ scale: 1.05 }}>
//           <img src={event.image} alt={event.title} className="event-img" />
//           <h3>{event.title}</h3>
//           <p>{event.date} | {event.time}</p>
//           <p>{event.location}</p>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Events;




import jaipur_G_4 from "../assets/images/jaipur_G_4.jpg"
export const Events = [{
  id: 1,
  title: "Arijit Singh Live in Mumbai",
  date: "Sep 10, 2025",
  time: "07:00 PM - 11:00 PM",
  location: "Dome NSCI, Mumbai",
  category: "Music",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753116065/Arijit-Singh-Stage-scaled_p8qfe2.jpg",
},
{
  id: 2,
  title: "NH7 Weekender Pune",
  date: "Nov 22, 2025",
  time: "04:00 PM - 11:00 PM",
  location: "Laxmi Lawns, Pune",
  category: "Music",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753119831/NH7-Weekender-2023-Clique-26-1_cxhdzx.jpg",
},
{
  id: 3,
  title: "Sunburn Goa",
  date: "Dec 27, 2025",
  time: "05:00 PM - 12:00 AM",
  location: "Vagator Beach, Goa",
  category: "Music",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753119872/1700637033164_c1bfru.webp",
},
{
  id: 4,
  title: "Shreya Ghoshal Night, Kolkata",
  date: "Oct 18, 2025",
  time: "06:30 PM - 10:30 PM",
  location: "Netaji Indoor Stadium, Kolkata",
  category: "Music",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753119968/Concert-of-Shreya-Ghoshal_pxkjcf.jpg",
},
{
  id: 5,
  title: "Lollapalooza India, Mumbai",
  date: "Jan 18, 2026",
  time: "03:00 PM - 11:00 PM",
  location: "Mahalaxmi Racecourse, Mumbai",
  category: "Music",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753120009/lollapalooz-festival_l3webo.jpg",
},
{
  id: 6,
  title: "Indian Ocean Live, Delhi",
  date: "Sep 25, 2025",
  time: "07:00 PM - 10:00 PM",
  location: "Jawaharlal Nehru Stadium, Delhi",
  category: "Music",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753120252/indianoceanmusic-3_nc53ac.jpg",
},
{
  id: 7,
  title: "IPL Final, Ahmedabad",
  date: "May 28, 2025",
  time: "07:30 PM - 11:30 PM",
  location: "Narendra Modi Stadium, Ahmedabad",
  category: "Sports",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753116174/1696337437393_modi_jllg9i.webp",
},
{
  id: 8,
  title: "Delhi Half Marathon",
  date: "Oct 15, 2025",
  time: "05:30 AM - 10:00 AM",
  location: "Jawaharlal Nehru Stadium, Delhi",
  category: "Sports",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753120311/vbsvmisxpbdufawmqx9n_c7hzi3.jpg",
},
{
  id: 9,
  title: "Mumbai City FC vs Bengaluru FC",
  date: "Nov 10, 2025",
  time: "07:00 PM - 09:30 PM",
  location: "Mumbai Football Arena, Mumbai",
  category: "Sports",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753120412/ISL-2022-23-Indian-Super-League-Bengaluru-FC-vs-Mumbai-City-Match-Preview_knxlue.jpg",
},
{
  id: 10,
  title: "Pro Kabaddi League Finals",
  date: "Jan 5, 2026",
  time: "06:00 PM - 09:00 PM",
  location: "Gachibowli Indoor Stadium, Hyderabad",
  category: "Sports",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753120451/QmZ1meOV2o_ec2ajf.jpg",
},
{
  id: 11,
  title: "Chennai Open Tennis",
  date: "Feb 12, 2026",
  time: "04:00 PM - 09:00 PM",
  location: "SDAT Tennis Stadium, Chennai",
  category: "Sports",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753120478/IMG_2025_Australian_Open_2_1_L1DTM67U_byxwk0.jpg",
},
{
  id: 12,
  title: "Jaipur Polo Championship",
  date: "Dec 3, 2025",
  time: "02:00 PM - 06:00 PM",
  location: "Rambagh Polo Ground, Jaipur",
  category: "Sports",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753120612/GdDof39bkAAYdD6_nexbby.jpg",
},
{
  id: 13,
  title: "Disney on Ice, Delhi",
  date: "Nov 18, 2025",
  time: "05:00 PM - 08:00 PM",
  location: "Indira Gandhi Indoor Stadium, Delhi",
  category: "Family",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753116351/happily-ever-after-blue-disney_kuirok.jpg",
},
{
  id: 14,
  title: "KidZania Family Day, Mumbai",
  date: "Oct 22, 2025",
  time: "10:00 AM - 06:00 PM",
  location: "KidZania, Mumbai",
  category: "Family",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753120718/8quh29zjlyojk0qymyq1m4qs9ll5_learn-life-today_anchmm.jpg",
},
{
  id: 15,
  title: "Lego Festival, Bengaluru",
  date: "Dec 10, 2025",
  time: "11:00 AM - 07:00 PM",
  location: "White Orchid Convention Center, Bengaluru",
  category: "Family",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753120729/lego-festival-decoy_hixnul.webp",
},
{
  id: 16,
  title: "Pet Fair India, Hyderabad",
  date: "Jan 25, 2026",
  time: "10:00 AM - 05:00 PM",
  location: "Hitex Exhibition Center, Hyderabad",
  category: "Family",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753120822/111991ee-cb13-4c13-b703-7214b2445300-Paw_and_Claws_wwpkgn.jpg",
},
{
  id: 17,
  title: "Adventure Island Family Carnival, Delhi",
  date: "Dec 22, 2025",
  time: "12:00 PM - 09:00 PM",
  location: "Adventure Island, Rohini, Delhi",
  category: "Family",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753120830/pexels-mihai-vlasceanu-1403653-1024x741_muwfh4.jpg",
},
{
  id: 18,
  title: "Science Expo for Kids, Chennai",
  date: "Feb 2, 2026",
  time: "09:00 AM - 06:00 PM",
  location: "Chennai Trade Centre, Chennai",
  category: "Family",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753120905/elementary-school-students-sitting-behind-260nw-2452912053_qaqolr.jpg",
},
{
  id: 19,
  title: "Kala Ghoda Arts Festival, Mumbai",
  date: "Feb 5, 2026",
  time: "10:00 AM - 09:00 PM",
  location: "Kala Ghoda, Mumbai",
  category: "Arts",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753116482/1649148575664230103_dqqqfj.jpg",
},
{
  id: 20,
  title: "Jaipur Literature Festival",
  date: "Jan 21, 2026",
  time: "09:00 AM - 08:00 PM",
  location: "Diggi Palace, Jaipur",
  category: "Arts",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753121174/jaipur-fest_pwrw71.jpg",
},
{
  id: 21,
  title: "India Art Fair, Delhi",
  date: "Feb 10, 2026",
  time: "11:00 AM - 07:00 PM",
  location: "NSIC Exhibition Grounds, Delhi",
  category: "Arts",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753121176/3210b672258a3743c5809a9d8381de000e120325-2183x1455_nxilbr.jpg",
},
{
  id: 22,
  title: "Chennai Music Season",
  date: "Dec 15, 2025",
  time: "05:00 PM - 10:00 PM",
  location: "Various Sabhas, Chennai",
  category: "Arts",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753121219/RaGa-sisters-Ranjani-and-Gayathri-Credit-for-all-photos-Sudha_bfhdco.jpg",
},
{
  id: 23,
  title: "Kolkata International Film Festival",
  date: "Nov 8, 2025",
  time: "10:00 AM - 10:00 PM",
  location: "Nandan Cinema Complex, Kolkata",
  category: "Arts",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753121250/1671119233_lead-18_cvan7n.jpg",
},
{
  id: 24,
  title: "Hyderabad Theatre Festival",
  date: "Mar 1, 2026",
  time: "06:00 PM - 10:00 PM",
  location: "Shilpakala Vedika, Hyderabad",
  category: "Arts",
  image: "https://res.cloudinary.com/dkybreoaz/image/upload/v1753121272/Ram-KatKatha-a-play-at-Manam-Theatre-Festival-1-770x433_xavg6t.jpg",
},

]