
import varanasi from "../../../assets/images/varanasi.jpg"
import Jaipur from "../../../assets/images/Jaipur.jpg"
import Amritsar from "../../../assets/images/Amritsar.jpg"
import Khajuraho from "../../../assets/images/Khajuraho.jpg"
import Lucknow from "../../../assets/images/Lucknow.jpg"
import Hampi from "../../../assets/images/Hampi.jpg"
import Patna from "../../../assets/images/Patna.jpg"
import Manali from "../../../assets/images/Manali.jpg"
import Nainital from "../../../assets/images/Nainital.jpg"

import Gangtok from "../../../assets/images/Gangtok.jpg"
import Munnar from "../../../assets/images/Munnar.jpg"
import Gulmarg from "../../../assets/images/Gulmarg.jpg"
import Kodaikanal from "../../../assets/images/Kodaikanal.jpg"
import Cherrapunji from "../../../assets/images/Cherrapunji.jpg"
import jaipur_G_1 from "../../../assets/images/jaipur_G_1.jpg"
import jaipur_G_2 from "../../../assets/images/jaipur_G_2.jpg"
import jaipur_G_3 from "../../../assets/images/jaipur_G_3.jpg"
import jaipur_G_4 from "../../../assets/images/jaipur_G_4.jpg"
import jaipur_G_5 from "../../../assets/images/jaipur_G_5.jpg"
import jaipur_G_6 from "../../../assets/images/jaipur_G_6.jpg"
import jaipur_G_7 from "../../../assets/images/jaipur_G_7.jpg"
import jaipur_G_8 from "../../../assets/images/jaipur_G_8.jpg"






export const travelData = [
  {
    category: "Historic Places",
    places: [
      {
        id: 1,
        state: "Rajasthan",
        city: "Jaipur",
        tagline: "The Pink City of Royal Heritage",
        description: "Explore royal palaces and vibrant markets in the Pink City.",
        fullDescription: "Jaipur, the capital of Rajasthan, is a city that resonates with the echoes of regal history. Established in 1727 by Maharaja Sawai Jai Singh II, Jaipur is renowned for its majestic palaces, historic forts, and colorful bazaars. Known as the 'Pink City' due to the pink hue of its buildings, it stands as a testament to India’s royal past and architectural brilliance. The city's rich cultural heritage includes traditional arts, crafts, and folk music that captivate every visitor. Jaipur also plays host to vibrant festivals like the Jaipur Literature Festival and Teej, reflecting the city’s love for tradition and celebration.",
        image: Jaipur,
         galleryImages: [
          jaipur_G_1,
          jaipur_G_2,
          jaipur_G_3,
          jaipur_G_4,
          jaipur_G_5,
          jaipur_G_6,
          jaipur_G_7,
          jaipur_G_8
        ],
        thingsToDo: [
          {
            name: "Amber Fort light show",
            description: "Experience Jaipur’s history illuminated in a mesmerizing sound and light show at the grand Amber Fort."
          },
          {
            name: "Bapu Bazaar shopping",
            description: "Wander through colorful lanes filled with traditional Rajasthani textiles, jootis, and handcrafted souvenirs."
          },
          {
            name: "Traditional puppet show",
            description: "Enjoy age-old folk performances with vibrant puppets and tales that reflect Rajasthan’s heritage."
          }],
        placesToVisit: ["Hawa Mahal", "City Palace", "Jantar Mantar"],
        planYourTrip: {
          planningTips: "Visit between Oct–Mar, wear comfy shoes for walking tours.",
          travelAgents: ["Royal India Tours", "Jaipur Footsteps"],
          accommodations: ["Taj Rambagh Palace", "Hotel Pearl Palace"],
          deals: ["2N heritage package ₹5999", "Free walking tour with booking"]
        }
      },
            {
        id: 2,
        state: "Uttar Pradesh",
        city: "Varanasi",
        tagline: "The Spiritual Soul of India",
        description: "One of the oldest living cities, known for ghats and spiritual aura.",
        fullDescription: "Varanasi, also known as Kashi or Banaras, is one of the oldest continuously inhabited cities in the world. It is a sacred hub for Hindus, sitting on the banks of the holy Ganges River. The city is renowned for its vibrant ghats, spiritual rituals, and a unique blend of ancient tradition and modern hustle. Home to saints, temples, and profound philosophies, Varanasi leaves an eternal impression on every visitor.",
        image: varanasi ,
        galleryImages: [
          "https://example.com/images/varanasi1.jpg",
          "https://example.com/images/varanasi2.jpg",
          "https://example.com/images/varanasi3.jpg",
          "https://example.com/images/varanasi4.jpg",
          "https://example.com/images/varanasi5.jpg"
        ],
        thingsToDo: ["Ganga Aarti", "Boat ride at sunrise", "Visit Banaras Hindu University"],
        placesToVisit: ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Sarnath"],
        planYourTrip: {
          planningTips: "Morning and evening rituals are must-see.",
          travelAgents: ["Spiritual Varanasi Tours", "Holy City Travel"],
          accommodations: ["BrijRama Palace", "Ganpati Guest House"],
          deals: ["3D spiritual package ₹4500"]
        }
      },
      {
        id: 3,
        state: "Punjab",
        city: "Amritsar",
        tagline: "Gateway to Sikh Devotion",
        description: "Spiritual center and home of the Golden Temple.",
        fullDescription: "Amritsar is a sacred city in Punjab and the spiritual center of Sikhism. The city’s crown jewel, the Golden Temple, draws millions of pilgrims every year. Beyond spiritual significance, Amritsar is known for its poignant history, particularly the Jallianwala Bagh massacre, and the patriotic Wagah Border ceremony. The city's street food and vibrant Punjabi culture add to its magnetic charm.",
        image:Amritsar,
        galleryImages: [
          "https://example.com/images/amritsar1.jpg",
          "https://example.com/images/amritsar2.jpg",
          "https://example.com/images/amritsar3.jpg",
          "https://example.com/images/amritsar4.jpg",
          "https://example.com/images/amritsar5.jpg"
        ],
        thingsToDo: ["Golden Temple visit", "Wagah border ceremony", "Punjabi food tour"],
        placesToVisit: ["Jallianwala Bagh", "Partition Museum"],
        planYourTrip: {
          planningTips: "Early mornings best for temple visit.",
          travelAgents: ["Punjab Yatra", "Golden Pathways"],
          accommodations: ["Ramada Amritsar", "Hyatt Regency"],
          deals: ["Temple + food trail ₹2999"]
        }
      },
      {
        id: 4,
        state: "Madhya Pradesh",
        city: "Khajuraho",
        tagline: "Stone Carvings of Passion",
        description: "Renowned for intricate erotic sculptures and temples.",
        fullDescription: "Khajuraho is famed for its stunning group of medieval Hindu and Jain temples known for their intricate erotic sculptures. These temples, declared a UNESCO World Heritage site, are a brilliant example of Indian architecture and symbolism. Cultural festivals and a peaceful setting make it a captivating destination for art and history lovers.",
        image: Khajuraho,
        galleryImages: [
          "https://example.com/images/khajuraho1.jpg",
          "https://example.com/images/khajuraho2.jpg",
          "https://example.com/images/khajuraho3.jpg",
          "https://example.com/images/khajuraho4.jpg",
          "https://example.com/images/khajuraho5.jpg"
        ],
        thingsToDo: ["Temple photography", "Dance Festival", "Cultural show"],
        placesToVisit: ["Western Group of Temples", "Archaeological Museum"],
        planYourTrip: {
          planningTips: "Visit during Feb for Dance Festival.",
          travelAgents: ["MP Tourism", "Temple Trail India"],
          accommodations: ["The Lalit Temple View", "Ramada Khajuraho"],
          deals: ["Temple + show combo ₹1999"]
        }
      },
      {
        id: 5,
        state: "Uttar Pradesh",
        city: "Lucknow",
        tagline: "Nawabi Grace and Culture",
        description: "The city of Nawabs, known for its architecture, etiquette and cuisine.",
        fullDescription: "Lucknow is a charming blend of old-world elegance and contemporary vibrance. Known for its Nawabi hospitality, majestic Mughal architecture, and famous Awadhi cuisine, the city offers a royal experience. From Chikankari embroidery to kebabs and historical landmarks, Lucknow remains a unique cultural capital of India.",
        image:Lucknow,
        galleryImages: [
          "https://example.com/images/lucknow1.jpg",
          "https://example.com/images/lucknow2.jpg",
          "https://example.com/images/lucknow3.jpg",
          "https://example.com/images/lucknow4.jpg",
          "https://example.com/images/lucknow5.jpg"
        ],
        thingsToDo: ["Heritage walk", "Chikankari shopping", "Street food tour"],
        placesToVisit: ["Bara Imambara", "Rumi Darwaza", "British Residency"],
        planYourTrip: {
          planningTips: "Explore both old and modern Lucknow for contrast.",
          travelAgents: ["Awadh Trails", "Royal Nawabi Tours"],
          accommodations: ["Lebua Lucknow", "Clarks Avadh"],
          deals: ["2N Nawabi experience ₹3999"]
        }
      },
      {
        id: 6,
        state: "Karnataka",
        city: "Hampi",
        tagline: "Ruins of a Glorious Empire",
        description: "Ruins of the Vijayanagara empire amidst surreal landscapes.",
        fullDescription: "Hampi, a UNESCO World Heritage Site, is the ruins of the Vijayanagara Empire. With surreal landscapes dotted with massive stones, stunning temples, and ancient marketplaces, Hampi is a paradise for backpackers and history buffs alike. The grandeur of the Virupaksha Temple and the musical pillars of Vittala Temple are must-sees.",
        image: Hampi,
        galleryImages: [
          "https://example.com/images/hampi1.jpg",
          "https://example.com/images/hampi2.jpg",
          "https://example.com/images/hampi3.jpg",
          "https://example.com/images/hampi4.jpg",
          "https://example.com/images/hampi5.jpg"
        ],
        thingsToDo: ["Sunset at Hemakuta Hill", "Coracle ride", "Ancient ruins tour"],
        placesToVisit: ["Virupaksha Temple", "Vittala Temple", "Hampi Bazaar"],
        planYourTrip: {
          planningTips: "October to February is ideal.",
          travelAgents: ["Hampi Trails", "Southern Wonder Tours"],
          accommodations: ["Heritage Resort", "Hampi’s Boulders"],
          deals: ["3D/2N temple trail ₹4999"]
        }
      },
      {
        id: 7,
        state: "Bihar",
        city: "Patna",
        tagline: "Seat of Ancient Power",
        description: "A historic city on the banks of the Ganges, once the seat of Mauryan Empire.",
        fullDescription: "Patna, the capital of Bihar, holds immense historical and cultural value. It was once known as Pataliputra, the capital of the Mauryan Empire. The city is home to important sites such as the Patna Museum, Golghar, and Takht Sri Patna Sahib, attracting historians, pilgrims, and cultural enthusiasts alike.",
        image:Patna,
        galleryImages: [
          "https://example.com/images/patna1.jpg",
          "https://example.com/images/patna2.jpg",
          "https://example.com/images/patna3.jpg",
          "https://example.com/images/patna4.jpg",
          "https://example.com/images/patna5.jpg"
        ],
        thingsToDo: ["Gandhi Maidan stroll", "Museum visits", "Try Litti Chokha"],
        placesToVisit: ["Golghar", "Patna Museum", "Takht Sri Patna Sahib"],
        planYourTrip: {
          planningTips: "Ideal between November to March, mild winter sightseeing.",
          travelAgents: ["Eastern Heritage Tours", "Bihar Darshan"],
          accommodations: ["Hotel Maurya", "Lemon Tree Premier"],
          deals: ["2N cultural package ₹3799"]
        }
      }
    ]
  },
  {
    
    category: "Nature's Escape",
    places: [
      {
        id: 8,
        state: "Himachal Pradesh",
        city: "Manali",
        tagline: "Adventure in the Snowy Valleys",
        description: "Snowy peaks, pine forests, and adventure activities in a serene hill station.",
        fullDescription: "Nestled in the Kullu Valley, Manali is a stunning hill station known for its breathtaking landscapes, adventure sports, and tranquil nature. From paragliding in Solang Valley to relaxing in hot springs at Vashisht, Manali offers a perfect blend of thrill and peace. The scenic views of the Himalayas make it a paradise for nature lovers and backpackers.",
        image: Manali,
        galleryImages: [
          "https://example.com/images/manali1.jpg",
          "https://example.com/images/manali2.jpg",
          "https://example.com/images/manali3.jpg",
          "https://example.com/images/manali4.jpg",
          "https://example.com/images/manali5.jpg"
        ],
        thingsToDo: ["Paragliding", "Visit Solang Valley", "Hot springs in Vashisht"],
        placesToVisit: ["Hidimba Devi Temple", "Rohtang Pass", "Old Manali"],
        planYourTrip: {
          planningTips: "Carry woolens year-round, avoid monsoon season.",
          travelAgents: ["Himachal Holidays", "Mountain Trekkers"],
          accommodations: ["Apple Country Resort", "Zostel Manali"],
          deals: ["3N/4D hill adventure ₹7499"]
        }
      },
      {
        id: 9,
        state: "Uttarakhand",
        city: "Nainital",
        tagline: "The Lake District of India",
        description: "Charming lake town nestled in the Kumaon hills.",
        fullDescription: "Nainital is a beautiful hill station surrounding the famous Naini Lake. With colonial-era charm, scenic viewpoints like Snow View Point and bustling Mall Road, Nainital is a peaceful getaway. Visitors enjoy boating, trekking, and exploring nearby hill spots in the Kumaon region.",
        image: Nainital,
        galleryImages: [
          "https://example.com/images/nainital1.jpg",
          "https://example.com/images/nainital2.jpg",
          "https://example.com/images/nainital3.jpg",
          "https://example.com/images/nainital4.jpg",
          "https://example.com/images/nainital5.jpg"
        ],
        thingsToDo: ["Boating in Naini Lake", "Trekking to Tiffin Top", "Shopping at Mall Road"],
        placesToVisit: ["Naina Devi Temple", "Snow View Point", "The Flatts"],
        planYourTrip: {
          planningTips: "Best visited in spring and autumn for pleasant weather.",
          travelAgents: ["Kumaon Travel Co.", "Naini Voyages"],
          accommodations: ["The Naini Retreat", "Shervani Hilltop"],
          deals: ["2N/3D lake escape ₹4999"]
        }
      },
      {
        id: 10,
        state: "Kerala",
        city: "Munnar",
        tagline: "Tea Gardens and Misty Hills",
        description: "Verdant tea gardens, misty hills, and cool climate.",
        fullDescription: "Munnar is a picturesque town in the Western Ghats, famous for sprawling tea plantations, lush valleys, and a calm climate. With viewpoints like Top Station and tourist attractions like Eravikulam National Park, Munnar is a must-visit for nature and peace seekers.",
        image: Munnar,
        galleryImages: [
          "https://example.com/images/munnar1.jpg",
          "https://example.com/images/munnar2.jpg",
          "https://example.com/images/munnar3.jpg",
          "https://example.com/images/munnar4.jpg",
          "https://example.com/images/munnar5.jpg"
        ],
        thingsToDo: ["Tea factory visit", "Eravikulam National Park", "Photopoint"],
        placesToVisit: ["Mattupetty Dam", "Top Station", "Kundala Lake"],
        planYourTrip: {
          planningTips: "Avoid monsoons for better mobility.",
          travelAgents: ["Munnar Magic Tours", "Green Escapes"],
          accommodations: ["Tea County", "Parakkat Nature Resort"],
          deals: ["Kerala hill circuit ₹5999"]
        }
      },
      {
        id: 11,
        state: "Sikkim",
        city: "Gangtok",
        tagline: "Himalayan Serenity",
        description: "Stunning views of the Himalayas and vibrant local culture.",
        fullDescription: "Gangtok, the capital of Sikkim, is known for its beautiful landscapes, Buddhist monasteries, and pleasant climate. A great base for exploring Eastern Himalayas, Gangtok offers attractions like Tsomgo Lake and Nathula Pass along with bustling MG Road for local experiences.",
        image: Gangtok,
        galleryImages: [
          "https://example.com/images/gangtok1.jpg",
          "https://example.com/images/gangtok2.jpg",
          "https://example.com/images/gangtok3.jpg",
          "https://example.com/images/gangtok4.jpg",
          "https://example.com/images/gangtok5.jpg"
        ],
        thingsToDo: ["Cable car ride", "Buddhist monastery visits", "MG Road shopping"],
        placesToVisit: ["Rumtek Monastery", "Tsomgo Lake", "Nathula Pass"],
        planYourTrip: {
          planningTips: "Obtain permits for Nathula, best visited in summer.",
          travelAgents: ["Eastern Escapes", "Sikkim Tourism"],
          accommodations: ["Mayfair Spa Resort", "Summit Norling Resort"],
          deals: ["Mountain tranquility package ₹6999"]
        }
      },
      {
        id: 12,
        state: "Jammu and Kashmir",
        city: "Gulmarg",
        tagline: "Snowy Wonderland",
        description: "Paradise for snow lovers and adventure seekers.",
        fullDescription: "Gulmarg is a premier ski destination located in the Pir Panjal range of the Western Himalayas. Famous for its powdery snow and the world’s second-highest cable car ride, Gulmarg is also an ideal spot for summer meadow treks and picturesque vistas.",
        image: Gulmarg,
        galleryImages: [
          "https://example.com/images/gulmarg1.jpg",
          "https://example.com/images/gulmarg2.jpg",
          "https://example.com/images/gulmarg3.jpg",
          "https://example.com/images/gulmarg4.jpg",
          "https://example.com/images/gulmarg5.jpg"
        ],
        thingsToDo: ["Skiing", "Gondola ride", "Snowboarding"],
        placesToVisit: ["Alpather Lake", "St. Mary’s Church", "Khilanmarg"],
        planYourTrip: {
          planningTips: "Winter for snow sports, spring for blooms.",
          travelAgents: ["Kashmir Holidays", "Gulmarg Guides"],
          accommodations: ["Khyber Himalayan Resort", "Hotel Hilltop"],
          deals: ["Ski escape 3N ₹9999"]
        }
      }
    
  ,
        {
        id: 13,
        state: "Tamil Nadu",
        city: "Kodaikanal",
        tagline: "Princess of Hill Stations",
        description: "Lush valleys, waterfalls, and cool weather in the Princess of Hill Stations.",
        fullDescription: "Kodaikanal is a charming hill station nestled in the Western Ghats of Tamil Nadu. Known for its misty hills, dense forests, and scenic beauty, it's a favored getaway for couples and families alike. The cool climate, along with beautiful spots like Kodai Lake and Coaker’s Walk, offers a relaxing retreat year-round.",
        image: Kodaikanal,
        galleryImages: [
          "https://example.com/images/kodaikanal1.jpg",
          "https://example.com/images/kodaikanal2.jpg",
          "https://example.com/images/kodaikanal3.jpg",
          "https://example.com/images/kodaikanal4.jpg",
          "https://example.com/images/kodaikanal5.jpg"
        ],
        thingsToDo: ["Boating", "Nature walks", "Pillar rock view"],
        placesToVisit: ["Kodai Lake", "Coaker’s Walk", "Bryant Park"],
        planYourTrip: {
          planningTips: "Ideal throughout the year but especially post-monsoon.",
          travelAgents: ["South Escape Tours", "Kodai Trips"],
          accommodations: ["Kodai Resort Hotel", "Villa Retreat"],
          deals: ["Hill serenity package ₹4799"]
        }
      },
      {
        id: 14,
        state: "Meghalaya",
        city: "Cherrapunji",
        tagline: "Rainforest Adventures",
        description: "Home to living root bridges, waterfalls, and lush rainforests.",
        fullDescription: "Cherrapunji is one of the wettest places on earth and is famous for its living root bridges and spectacular waterfalls. Trekking through dense forests, exploring caves, and experiencing the vibrant Khasi culture make it a unique destination in Northeast India.",
        image: Cherrapunji,
        galleryImages: [
          "https://example.com/images/cherrapunji1.jpg",
          "https://example.com/images/cherrapunji2.jpg",
          "https://example.com/images/cherrapunji3.jpg",
          "https://example.com/images/cherrapunji4.jpg",
          "https://example.com/images/cherrapunji5.jpg"
        ],
        thingsToDo: ["Cave exploration", "Root bridge trekking", "Waterfall hopping"],
        placesToVisit: ["Nohkalikai Falls", "Mawsmai Caves", "Double Decker Root Bridge"],
        planYourTrip: {
          planningTips: "Rain gear essential, monsoon travelers paradise.",
          travelAgents: ["Eastern Nature Trails", "MeghaTours"],
          accommodations: ["Cherrapunjee Holiday Resort", "Saimika Resort"],
          deals: ["Rainforest explorer ₹4999"]
        }
      
      }
    ]}
  ,

  {
    category: "Arts & Culture",
    places: [
      {
        id: 15,
        state: "West Bengal",
        city: "Kolkata",
        description: "The cultural capital of India with colonial architecture and festivals.",
        image: "https://example.com/images/kolkata.jpg",
        thingsToDo: ["Durga Puja celebrations", "Tram ride", "Street food tour"],
        placesToVisit: ["Victoria Memorial", "Howrah Bridge", "Indian Museum"],
        planYourTrip: {
          planningTips: "Visit in October during Durga Puja for the full experience.",
          travelAgents: ["Bong Voyages", "Culture Trail Tours"],
          accommodations: ["The Oberoi Grand", "Floatel"],
          deals: ["Cultural Kolkata package ₹5999"]
        }
      },
      {
        id: 16,
        state: "Kerala",
        city: "Thrissur",
        description: "Known as the cultural capital of Kerala, famous for Thrissur Pooram and classical arts.",
        image: "https://example.com/images/thrissur.jpg",
        thingsToDo: ["Watch Kathakali performance", "Visit art museums", "Attend festivals"],
        placesToVisit: ["Vadakkunnathan Temple", "Kerala Kalamandalam"],
        planYourTrip: {
          planningTips: "Best to visit during Thrissur Pooram in May.",
          travelAgents: ["Kerala Cultural Tours"],
          accommodations: ["Lulu International", "Joys Palace"],
          deals: ["Cultural combo ₹4999"]
        }
      },
      {
        id: 17,
        state: "Tamil Nadu",
        city: "Chidambaram",
        description: "A temple town steeped in Saiva tradition and classical dance forms.",
        image: "https://example.com/images/chidambaram.jpg",
        thingsToDo: ["Natyanjali dance festival", "Temple art tour"],
        placesToVisit: ["Nataraja Temple"],
        planYourTrip: {
          planningTips: "Visit during Natyanjali Festival (Feb-March)",
          travelAgents: ["Tamil Temple Trails"],
          accommodations: ["Hotel Saradharam"],
          deals: ["Festival Experience ₹3500"]
        }
      },
      {
        id: 18,
        state: "Rajasthan",
        city: "Udaipur",
        description: "The city of lakes known for royal heritage, folk arts, and music.",
        image: "https://example.com/images/udaipur.jpg",
        thingsToDo: ["Folk dance shows", "Puppet shows", "Art galleries"],
        placesToVisit: ["Bagore Ki Haveli", "Shilpgram"],
        planYourTrip: {
          planningTips: "Ideal from October to March for cultural shows.",
          travelAgents: ["Rajasthan Cultural Voyage"],
          accommodations: ["Taj Lake Palace"],
          deals: ["Art & Culture Tour ₹5999"]
        }
      },
      {
        id: 19,
        state: "Maharashtra",
        city: "Pune",
        description: "A vibrant cultural center with a mix of Marathi theatre, music, and heritage.",
        image: "https://example.com/images/pune.jpg",
        thingsToDo: ["Drama festivals", "Music concerts", "Museum hopping"],
        placesToVisit: ["Raja Dinkar Kelkar Museum", "Shaniwar Wada"],
        planYourTrip: {
          planningTips: "Ideal around Ganesh Chaturthi for cultural buzz.",
          travelAgents: ["Pune Culture Trails"],
          accommodations: ["JW Marriott Pune"],
          deals: ["City Culture Walk ₹3999"]
        }
      },
      {
        id: 20,
        state: "Odisha",
        city: "Bhubaneswar",
        description: "Known as the Temple City, also a hub for Odissi dance and arts.",
        image: "https://example.com/images/bhubaneswar.jpg",
        thingsToDo: ["Odissi performances", "Handicraft shopping", "Temple tours"],
        placesToVisit: ["Lingaraj Temple", "Ekamra Haat"],
        planYourTrip: {
          planningTips: "Visit during Konark Dance Festival (nearby).",
          travelAgents: ["Eastern Arts India"],
          accommodations: ["Mayfair Lagoon"],
          deals: ["Cultural Bhubaneswar ₹4499"]
        }
      },
      {
        id: 21,
        state: "Assam",
        city: "Majuli",
        description: "The largest river island and a major center for Sattriya dance and Assamese culture.",
        image: "https://example.com/images/majuli.jpg",
        thingsToDo: ["Sattra monastery visits", "Sattriya dance shows", "Pottery and mask making workshops"],
        placesToVisit: ["Auniati Sattra", "Samaguri Sattra"],
        planYourTrip: {
          planningTips: "October to March is best for festivals and dry weather.",
          travelAgents: ["Majuli Heritage Tours"],
          accommodations: ["La Maison de Ananda"],
          deals: ["Cultural Retreat ₹5499"]
        }
      }
    ]
  },
  {
    category: "Adventure Trips",
    places: [
      {
        id: 22,
        state: "Himachal Pradesh",
        city: "Manali",
        description: "Adventure hotspot offering trekking, paragliding and river rafting.",
        image: "https://example.com/images/manali.jpg",
        thingsToDo: ["Paragliding in Solang", "Snowboarding at Rohtang", "Trek to Jogini Falls"],
        placesToVisit: ["Hidimba Temple", "Old Manali", "Solang Valley"],
        planYourTrip: {
          planningTips: "Pack warm clothes and book adventure activities in advance.",
          travelAgents: ["Adventure Himachal", "Manali Xplore"],
          accommodations: ["Zostel Manali", "The Himalayan"],
          deals: ["3D Adventure combo ₹5499"]
        }
      },
      {
        id: 23,
        state: "Uttarakhand",
        city: "Rishikesh",
        description: "Yoga capital of the world also known for river rafting and cliff jumping.",
        image: "https://example.com/images/rishikesh.jpg",
        thingsToDo: ["River rafting", "Camping by Ganges", "Bungee jumping"],
        placesToVisit: ["Ram Jhula", "Laxman Jhula", "Neelkanth Mahadev Temple"],
        planYourTrip: {
          planningTips: "Ideal from Oct to April, avoid monsoon season.",
          travelAgents: ["Thrill Rishikesh", "Yoga & Raft Tours"],
          accommodations: ["Live Free Hostel", "Aloha on the Ganges"],
          deals: ["Adventure & Yoga package ₹4999"]
        }
      },
      {
        id: 24,
        state: "Goa",
        city: "South Goa",
        description: "Scenic beaches and thrilling water sports for adrenaline lovers.",
        image: "https://example.com/images/goa.jpg",
        thingsToDo: ["Scuba diving", "Banana boat ride", "Beach hopping"],
        placesToVisit: ["Palolem Beach", "Butterfly Beach", "Agonda Beach"],
        planYourTrip: {
          planningTips: "Off-season offers cheaper water sports.",
          travelAgents: ["Goa Surf & Ride", "Aqua Adventures"],
          accommodations: ["Cuba Patnem", "The LaLiT Golf & Spa Resort"],
          deals: ["Beach & sports ₹3999"]
        }
      },
      {
        id: 25,
        state: "Sikkim",
        city: "Gangtok",
        description: "A blend of nature and thrill with mountain biking and hiking trails.",
        image: "https://example.com/images/gangtok.jpg",
        thingsToDo: ["Mountain biking", "Cable car ride", "Trek to Tsomgo Lake"],
        placesToVisit: ["MG Road", "Hanuman Tok", "Rumtek Monastery"],
        planYourTrip: {
          planningTips: "Carry ID for permits and warm layers.",
          travelAgents: ["Eastern Trails", "Sikkim Adventure Co."],
          accommodations: ["The Elgin Nor-Khill", "Treebo Trend Orchid Hotel"],
          deals: ["Mountain & monastery ₹4999"]
        }
      },
      {
        id: 26,
        state: "Maharashtra",
        city: "Kolad",
        description: "Perfect for river rafting, rappelling, and jungle camping.",
        image: "https://example.com/images/kolad.jpg",
        thingsToDo: ["White water rafting", "Zip lining", "Jungle trek"],
        placesToVisit: ["Kundalika River", "Sutarwadi Lake"],
        planYourTrip: {
          planningTips: "Pre-book your rafting slots especially on weekends.",
          travelAgents: ["Rafting Zone India", "Kolad Adventures"],
          accommodations: ["Rivertrail Eco Camp", "Wildernest Kolad"],
          deals: ["Raft + Camp ₹2999"]
        }
      },
      {
        id: 27,
        state: "Arunachal Pradesh",
        city: "Ziro Valley",
        description: "Offbeat gem for hiking, fishing, and tribal culture encounters.",
        image: "https://example.com/images/ziro.jpg",
        thingsToDo: ["Nature trails", "Bamboo fishing", "Tribal homestays"],
        placesToVisit: ["Ziro Puto", "Tarin Fish Farm"],
        planYourTrip: {
          planningTips: "Carry ILP (Inner Line Permit) and basic medical kit.",
          travelAgents: ["Ziro Valley Escapes", "NorthEast Alive"],
          accommodations: ["Ziro Palace Inn", "Siiro Resort"],
          deals: ["Tribal & Trek pack ₹5799"]
        }
      },
      {
        id: 28,
        state: "Andaman & Nicobar",
        city: "Havelock Island",
        description: "Tropical paradise for scuba diving, snorkeling and kayaking.",
        image: "https://example.com/images/havelock.jpg",
        thingsToDo: ["Snorkeling", "Glass-bottom boat ride", "Sea walk"],
        placesToVisit: ["Radhanagar Beach", "Elephant Beach"],
        planYourTrip: {
          planningTips: "Ideal between Oct to May, avoid rainy months.",
          travelAgents: ["Island Eco Tours", "Deep Dive Holidays"],
          accommodations: ["Barefoot at Havelock", "Silver Sand Beach Resort"],
          deals: ["Island explorer pack ₹6499"]
        }
      }
    ]
  }
];
