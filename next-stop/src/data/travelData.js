
import varanasi from "../assets/images/varanasi.jpg"
import Jaipur from "../assets/images/Jaipur.jpg"
import Amritsar from "../assets/images/Amritsar.jpg"
import Khajuraho from "../assets/images/Khajuraho.jpg"
import Lucknow from "../assets/images/Lucknow.jpg"
import Hampi from "../assets/images/Hampi.jpg"
import Patna from "../assets/images/Patna.jpg"
import Manali from "../assets/images/Manali.jpg"
import Nainital from "../assets/images/Nainital.jpg"

import Gangtok from "../assets/images/Gangtok.jpg"
import Munnar from "../assets/images/Munnar.jpg"
import Gulmarg from "../assets/images/Gulmarg.jpg"
import Kodaikanal from "../assets/images/Kodaikanal.jpg"
import Cherrapunji from "../assets/images/Cherrapunji.jpg"
import jaipur_G_1 from "../assets/images/jaipur_G_1.jpg"
import jaipur_G_2 from "../assets/images/jaipur_G_2.jpg"
import jaipur_G_3 from "../assets/images/jaipur_G_3.jpg"
import jaipur_G_4 from "../assets/images/jaipur_G_4.jpg"
import jaipur_G_5 from "../assets/images/jaipur_G_5.jpg"
import jaipur_G_6 from "../assets/images/jaipur_G_6.jpg"
import jaipur_G_7 from "../assets/images/jaipur_G_7.jpg"
import jaipur_G_8 from "../assets/images/jaipur_G_8.jpg"
import Kolkata from "../assets/images/Kolkata.jpg"
import Thrissur from "../assets/images/Thrissur.jpg"
import Chidambaram from "../assets/images/Chidambaram.jpg"
import Pune from "../assets/images/Pune.jpg"
import Bhubaneshwar from "../assets/images/Bhubaneshwar.jpg"
import Majuli from "../assets/images/Majuli.jpg"
import Rishikesh from "../assets/images/Rishikesh.jpg"
import South_Goa from "../assets/images/South_Goa.jpg"
import Kolad from "../assets/images/Kolad.jpg"
import Ziro from "../assets/images/Ziro.jpg"
import H1 from "../assets/images/H-1.jpg"
import H2 from "../assets/images/H-2.jpg"
import H3 from "../assets/images/H-3.jpg"
import H4 from "../assets/images/H-4.jpg"
import H5 from "../assets/images/H-5.jpg"
import H6 from "../assets/images/H-6.jpg"
import HawaMahal from "../assets/images/Hawa-Mahal.jpg"
import CityPalace from "../assets/images/City-Palace.jpg"
import JantarMantar from "../assets/images/Jantar-Mantar.jpg"





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
          jaipur_G_8,
          HawaMahal,
         CityPalace,
         JantarMantar
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
        placesToVisit: [
        {
          name: "Hawa Mahal",
          description:
            "An iconic five-story palace with intricately carved windows, once used by royal women to observe street festivals unseen."
        },
        {
          name: "City Palace",
          description:
            "A blend of Rajasthani and Mughal architecture, this historic complex houses museums, courtyards, and a royal residence."
        },
        {
          name: "Jantar Mantar",
          description:
            "A UNESCO World Heritage site featuring the world’s largest stone sundial and architectural astronomical instruments."
        }],
              planYourTrip: {
        planningTips:
          "Visit between October and March for pleasant weather. Wear comfy walking shoes and stay hydrated. Many attractions open early, so plan ahead for less crowded visits.",
        travelAgents: [
          "Royal India Tours",
          "Jaipur Footsteps",
          "Incredible Rajasthan Travels"
        ],
        accommodations: [
          {
            name: "Taj Rambagh Palace",
            image: H1,
            deal: "2N heritage package ₹5999"
          },
          {
            name: "Hotel Pearl Palace",
            image: H2,
            deal: "Free walking tour with booking"
          },
          {
            name: "Royal Haveli Inn",
            image: H3,
            deal: "Stay 3 nights, get free charcuterie board & wine"
          },
          {
            name: "Jaipur Heritage Suites",
            image: H4,
            deal: "Winter Super Sale"
          },
          {
            name: "Rajmahal Palace Hotel",
            image:H5,
            deal: "Luxury Suite at ₹7999"
          },
          {
            name: "Umaid Bhawan Stay",
            image:H6,
            deal: "50% off for 3+ nights"
          }
        ]
      }
    }
  
,
{
  id: 2,
  state: "Uttar Pradesh",
  city: "Varanasi",
  tagline: "The Spiritual Soul of India",
  description: "One of the oldest living cities, known for ghats and spiritual aura.",
  fullDescription:
    "Varanasi, also known as Kashi or Banaras, is one of the oldest continuously inhabited cities in the world. It is a sacred hub for Hindus, sitting on the banks of the holy Ganges River. The city is renowned for its vibrant ghats, spiritual rituals, and a unique blend of ancient tradition and modern hustle. Home to saints, temples, and profound philosophies, Varanasi leaves an eternal impression on every visitor.",
  image: varanasi, // your imported image
  galleryImages: [
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753117259/manikarnika-ghat-city-hero_ekfxxs.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753117369/images_tu6pj2.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753117426/ramnagar-fort-varanasi-2-attr-hero_um2fax.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753117239/Image-1_Malaiyo-1024x538_kurwsi.png",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753117874/shri-kashi-vishwanath_im5fo8.jpg",
    " https://res.cloudinary.com/dkybreoaz/image/upload/v1753118400/ksp_5075_coroyv.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753118138/Boat_ride_at_Sunrise_2C_on_the_Ganges_2C_Varanasi_pqmuic.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753118316/FM7r3baacAUcRHC_o0qiwk.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753117874/shri-kashi-vishwanath_im5fo8.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753118521/caption_yqp5gn.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753118612/Cremation-Ghats-in-Varanasi_hxvfng.jpg"
  ],
  thingsToDo: [
    {
      name: "Ganga Aarti at Dashashwamedh Ghat",
      description: "A mesmerizing spiritual ceremony performed on the banks of the Ganges with fire, chants, and music."
    },
    {
      name: "Sunrise Boat Ride",
      description: "Glide along the Ganges during sunrise and witness ancient rituals unfold at the ghats."
    },
    {
      name: "Stroll through Vishwanath Gali",
      description: "Explore narrow alleys packed with shops selling religious items, sweets, and traditional Banarasi silk."
    }
  ],
  placesToVisit: [
    {
      name: "Kashi Vishwanath Temple",
      description: "One of the holiest Shiva temples, reconstructed several times and a major pilgrimage site for Hindus."
    },
    {
      name: "Sarnath",
      description: "A revered Buddhist site where Lord Buddha gave his first sermon after attaining enlightenment."
    },
    {
      name: "Manikarnika Ghat",
      description: "A major cremation ghat symbolizing the cycle of life and death, deeply rooted in Hindu beliefs."
    }
  ],
  planYourTrip: {
    planningTips:
      "Visit between October and March for cooler weather. Morning aartis and evening ceremonies are a must. Respect the spiritual atmosphere.",
    travelAgents: [
      "Spiritual Varanasi Tours",
      "Holy City Travel",
      "Sacred Ganga Journeys"
    ],
    accommodations: [
      {
        name: "BrijRama Palace",
        image:H1,
        deal: "2N spiritual stay ₹4999"
      },
      {
        name: "Ganpati Guest House",
        image:H2,
        deal: "Free Ganga boat ride included"
      },
      {
        name: "Varanasi Heritage Inn",
        image: H3,
        deal: "Stay 2 nights, get 1 night free"
      },
      {
        name: "Kashi View Hotel",
        image: H4,
        deal: "Balcony view + puja kit ₹2999"
      },
      {
        name: "Divine Ganges Hotel",
        image: H5,
        deal: "Complimentary yoga and meditation sessions"
      },
      {
        name: "Banaras Boutique Stay",
        image:H6,
        deal: "Traditional breakfast and silk scarf gift"
      }
    ]
  }
}
,
      {
  id: 3,
  state: "Punjab",
  city: "Amritsar",
  tagline: "Gateway to Sikh Devotion",
  description: "Spiritual center and home of the Golden Temple.",
  fullDescription: "Amritsar is a sacred city in Punjab and the spiritual center of Sikhism. The city’s crown jewel, the Golden Temple, draws millions of pilgrims every year. Beyond spiritual significance, Amritsar is known for its poignant history, particularly the Jallianwala Bagh massacre, and the patriotic Wagah Border ceremony. The city's street food and vibrant Punjabi culture add to its magnetic charm.",
  image: Amritsar,
  galleryImages: [
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753118819/india-amritsar-top-attractions-golden-temple_bt3qbw.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753119003/120337061_gettyimages-1234943959-594x594-1_dbtwva.webp",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753119015/1-partition-museum-amritsar-punjab-attr-hero_fs4zhq.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753118693/abc49719bd9c53c7006e4c5794626530_rim1y6.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753118743/5ea5tweohm851_sncah4.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753118819/india-amritsar-top-attractions-golden-temple_bt3qbw.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753118875/isitors-watch-security-personnel-perform-during-the-beating-retreat-ceremony-at-the-attari-wagah-border-near-amritsar-1726053317_xxw6la.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753118899/sdlce2s8a3fnlgnqu2v85fclr4mn_original_shutterstock_1294137358_bhkeiv.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753119003/120337061_gettyimages-1234943959-594x594-1_dbtwva.webp",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753119015/1-partition-museum-amritsar-punjab-attr-hero_fs4zhq.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753119121/1-gobindgarh-fort-amritsar-punjab-attr-hero_xa7una.jpg"
  ],
  thingsToDo: [
    {
      name: "Golden Temple Visit",
      description: "Experience the divine serenity and volunteer at the world’s largest free kitchen (Langar)."
    },
    {
      name: "Wagah Border Ceremony",
      description: "Witness the patriotic retreat ceremony at India-Pakistan border."
    },
    {
      name: "Old City Street Food Tour",
      description: "Relish Amritsari kulcha, lassi, and jalebi while exploring bustling bazaars."
    }
  ],
  placesToVisit: [
    {
      name: "Jallianwala Bagh",
      description: "A public garden memorializing the 1919 massacre—a moving historical site."
    },
    {
      name: "Partition Museum",
      description: "India’s only museum dedicated to stories of partition survivors."
    },
    {
      name: "Gobindgarh Fort",
      description: "A historic fort with museums, cultural shows, and food courts."
    }
  ],
  planYourTrip: {
    planningTips:
      "Best time to visit is November to March. Early mornings are peaceful at the temple. Respect religious customs (cover head, no shoes).",
    travelAgents: [
      "Punjab Yatra",
      "Golden Pathways",
      "Spiritual Punjab Tours"
    ],
    accommodations: [
      {
        name: "Ramada Amritsar",
        image: "/gallery/ramada.jpg",
        deal: "2N spiritual stay ₹4999"
      },
      {
        name: "Hyatt Regency Amritsar",
        image: "/gallery/hyatt.jpg",
        deal: "Breakfast + border tour included"
      },
      {
        name: "Golden Sarovar Portico",
        image: "/gallery/sarovar.jpg",
        deal: "Heritage walk and dinner deal"
      },
      {
        name: "Hotel City Park",
        image: "/gallery/citypark.jpg",
        deal: "Budget stay + VIP temple pass"
      },
      {
        name: "Welcomhotel by ITC",
        image: "/gallery/welcomhotel.jpg",
        deal: "Luxury spa and city tour combo"
      },
      {
        name: "MK Hotel",
        image: "/gallery/mkhotel.jpg",
        deal: "Free airport pickup and Punjabi thali"
      }
    ]
  }
}
,
   {
  id: 4,
  state: "Madhya Pradesh",
  city: "Khajuraho",
  tagline: "Stone Carvings of Passion",
  description: "Famed for its intricate temples with sensual sculptures.",
  fullDescription: "Khajuraho, nestled in the heart of Madhya Pradesh, is a UNESCO World Heritage site renowned for its stunning group of Hindu and Jain temples. Built between 950 and 1050 AD, these temples are famous for their exquisite carvings, including sensuous and spiritual depictions of human life. Beyond the stone, Khajuraho offers cultural festivals, peaceful surroundings, and access to nearby natural reserves like Panna National Park.",
  image: Khajuraho, // Replace with actual imported image variable
  galleryImages: [
    "/gallery/khajuraho1.jpg",
    "/gallery/khajuraho2.jpg",
    "/gallery/khajuraho3.jpg",
    "/gallery/khajuraho4.jpg",
    "/gallery/khajuraho5.jpg",
    "/gallery/khajuraho6.jpg",
    "/gallery/khajuraho7.jpg",
    "/gallery/khajuraho8.jpg",
    "/gallery/khajuraho9.jpg",
    "/gallery/khajuraho10.jpg",
    "/gallery/khajuraho11.jpg"
  ],
  thingsToDo: [
    {
      name: "Temple Complex Exploration",
      description: "Marvel at the architecture, sculptures, and symbolism in both Eastern and Western temple groups."
    },
    {
      name: "Khajuraho Dance Festival",
      description: "Attend the renowned classical dance festival held annually in front of the illuminated temples."
    },
    {
      name: "Light and Sound Show",
      description: "Enjoy an evocative narration of Khajuraho’s history under the night sky."
    }
  ],
  placesToVisit: [
    {
      name: "Western Group of Temples",
      description: "The most famous and well-preserved temples, including Kandariya Mahadev and Lakshmana Temple."
    },
    {
      name: "Jain Temples",
      description: "Located in the Eastern group, these are simpler but deeply spiritual and historically rich."
    },
    {
      name: "Raneh Falls",
      description: "A stunning natural canyon waterfall located around 20 km from Khajuraho."
    }
  ],
  planYourTrip: {
    planningTips:
      "Best time to visit is October to March. Wear comfortable shoes, and hire local guides for deeper insight into temple art.",
    travelAgents: [
      "MP Tourism",
      "Temple Trail India",
      "Heritage Voyages"
    ],
    accommodations: [
      {
        name: "The Lalit Temple View",
        image: "/gallery/lalit.jpg",
        deal: "Luxury stay with guided temple walk ₹6999"
      },
      {
        name: "Ramada Khajuraho",
        image: "/gallery/ramada_khajuraho.jpg",
        deal: "Pool access + breakfast deal"
      },
      {
        name: "Hotel Isabel Palace",
        image: "/gallery/isabel.jpg",
        deal: "Free pick-up from station + 10% off meals"
      },
      {
        name: "Zen Hotel",
        image: "/gallery/zen.jpg",
        deal: "Budget comfort with rooftop views"
      },
      {
        name: "Radisson Jass Khajuraho",
        image: "/gallery/radisson.jpg",
        deal: "Spa + Cultural night combo"
      },
      {
        name: "Hotel Harmony",
        image: "/gallery/harmony.jpg",
        deal: "Yoga and meditation retreat deal"
      }
    ]
  }
}
,
{
  id: 5,
  state: "Uttar Pradesh",
  city: "Lucknow",
  tagline: "City of Nawabs and Nazakat",
  description: "A perfect blend of culture, cuisine, and historical grandeur.",
  fullDescription: "Lucknow, the capital of Uttar Pradesh, is a city where old-world charm meets modern elegance. Renowned for its refined manners, intricate Mughal-era architecture, and mouthwatering Awadhi cuisine, Lucknow radiates a royal aura. Whether you're exploring the grand Bara Imambara or savoring a galouti kebab in the bustling streets of Aminabad, the city promises a culturally rich and memorable experience.",
  image: Lucknow,
  galleryImages: [
    "/gallery/lucknow1.jpg",
    "/gallery/lucknow2.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753119366/khajuraho-india-temple-complex_mgfgg6.jpg",
    "/gallery/lucknow4.jpg",
    "/gallery/lucknow5.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753119366/khajuraho-india-temple-complex_mgfgg6.jpg",
    "https://res.cloudinary.com/dkybreoaz/image/upload/v1753119520/Western_Group_of_Temples_2C_Khajuraho_20_fdrriy.jpg",
    "/gallery/lucknow8.jpg",
    "/gallery/lucknow9.jpg",
    "/gallery/lucknow10.jpg",
    "/gallery/lucknow11.jpg"
  ],
  thingsToDo: [
    {
      name: "Tunday Kababi Food Trail",
      description: "Relish the melt-in-your-mouth kebabs and other Awadhi delights in the heart of old Lucknow."
    },
    {
      name: "Chikan Embroidery Walk",
      description: "Witness skilled artisans create the world-renowned Chikankari embroidery."
    },
    {
      name: "Evening at Gomti Riverfront",
      description: "Enjoy musical fountains, cycling tracks, and serene sunset views."
    }
  ],
  placesToVisit: [
    {
      name: "Bara Imambara",
      description: "A massive Mughal-era structure with a labyrinth (bhool bhulaiyaa) and grand central hall."
    },
    {
      name: "Rumi Darwaza",
      description: "An iconic 60-foot tall gateway built in the Awadhi architectural style."
    },
    {
      name: "British Residency",
      description: "Ruins of colonial-era buildings that witnessed the 1857 uprising."
    }
  ],
  planYourTrip: {
    planningTips: "October to March is ideal. Try early morning visits to avoid crowds. Respect local etiquette, especially in religious sites.",
    travelAgents: ["Royal Awadh Travels", "Lucknow Heritage Tours", "Nawabi Footsteps"],
    accommodations: [
      {
        name: "Lebua Lucknow",
        image: "/gallery/lebua.jpg",
        deal: "Nawabi dinner with heritage stay"
      },
      {
        name: "The Piccadily",
        image: "/gallery/piccadily.jpg",
        deal: "Free spa + airport shuttle"
      },
      {
        name: "Hyatt Regency Lucknow",
        image: "/gallery/hyatt_lucknow.jpg",
        deal: "Awadhi food tasting included"
      },
      {
        name: "Hotel Clarks Avadh",
        image: "/gallery/clarks.jpg",
        deal: "Stay 2N, get cultural evening pass"
      },
      {
        name: "La Place Sarovar Portico",
        image: "/gallery/laplace.jpg",
        deal: "City tour combo with stay"
      },
      {
        name: "Golden Tulip Lucknow",
        image: "/gallery/goldentulip.jpg",
        deal: "50% off on second night"
      }
    ]
  }
}
,
{
  id: 6,
  state: "Karnataka",
  city: "Hampi",
  tagline: "Ruins Whispering Tales of Glory",
  description: "A UNESCO World Heritage site full of myth, history, and awe-inspiring ruins.",
  fullDescription: "Hampi, once the capital of the mighty Vijayanagara Empire, is a surreal land of boulder-strewn landscapes and majestic ruins. The city stands as a testament to India's rich past, with temples, market streets, and royal enclosures set against a dramatic natural backdrop. Its unfiltered charm and spiritual vibes make it a magnet for historians, backpackers, and seekers of serenity alike.",
  image: Hampi,
  galleryImages: [
    "/gallery/hampi1.jpg",
    "/gallery/hampi2.jpg",
    "/gallery/hampi3.jpg",
    "/gallery/hampi4.jpg",
    "/gallery/hampi5.jpg",
    "/gallery/hampi6.jpg",
    "/gallery/hampi7.jpg",
    "/gallery/hampi8.jpg",
    "/gallery/hampi9.jpg",
    "/gallery/hampi10.jpg",
    "/gallery/hampi11.jpg"
  ],
  thingsToDo: [
    {
      name: "Coracle Ride on Tungabhadra",
      description: "Float across the river in traditional circular boats while enjoying stunning views of Hampi’s ruins."
    },
    {
      name: "Sunset from Matanga Hill",
      description: "Climb for a panoramic sunset over temples, banana plantations, and boulders."
    },
    {
      name: "Heritage Biking Tour",
      description: "Cycle through ruins, ancient bazaars, and rustic landscapes with a local guide."
    }
  ],
  placesToVisit: [
    {
      name: "Virupaksha Temple",
      description: "An active temple that has stood tall since the 7th century, dedicated to Lord Shiva."
    },
    {
      name: "Vittala Temple",
      description: "Home to the iconic stone chariot and musical pillars—a marvel of Dravidian architecture."
    },
    {
      name: "Lotus Mahal",
      description: "A delicate blend of Islamic and Hindu styles within the Zenana enclosure."
    }
  ],
  planYourTrip: {
    planningTips: "Visit between October and February. Carry sun protection and stay hydrated. Public transport is minimal—bikes are best.",
    travelAgents: ["Ancient Trails Hampi", "Mystic South Tours", "Stone & Soul Expeditions"],
    accommodations: [
      {
        name: "Evolve Back Kamalapura Palace",
        image: "/gallery/evolveback.jpg",
        deal: "Luxury ruins-view suite + dinner"
      },
      {
        name: "Heritage Resort Hampi",
        image: "/gallery/heritage.jpg",
        deal: "3D/2N culture package ₹5999"
      },
      {
        name: "Clarks Inn Hampi",
        image: "/gallery/clarksinn.jpg",
        deal: "Free guided temple tour"
      },
      {
        name: "Hampi Boulders Resort",
        image: "/gallery/boulders.jpg",
        deal: "Adventure + yoga retreat"
      },
      {
        name: "Hotel Malligi",
        image: "/gallery/malligi.jpg",
        deal: "2N budget deal + bike rental"
      },
      {
        name: "Whispering Rocks",
        image: "/gallery/whisperingrocks.jpg",
        deal: "Eco stay with local meals"
      }
    ]
  }
}
,
{
  id: 7,
  state: "Bihar",
  city: "Patna",
  tagline: "From Ancient Pataliputra to Modern Metropolis",
  description: "A historic city tracing back to the days of Emperor Ashoka.",
  fullDescription: "Patna, located on the banks of the Ganges, is one of the oldest inhabited cities in the world. Once the capital of the Maurya and Gupta empires, it is deeply rooted in history and spirituality. Today, it blends its glorious past with a growing urban culture. From Buddhist relics to Mughal tombs, and political movements to Ganga aarti, Patna offers a multidimensional journey through time.",
  image: Patna,
  galleryImages: [
    "/gallery/patna1.jpg",
    "/gallery/patna2.jpg",
    "/gallery/patna3.jpg",
    "/gallery/patna4.jpg",
    "/gallery/patna5.jpg",
    "/gallery/patna6.jpg",
    "/gallery/patna7.jpg",
    "/gallery/patna8.jpg",
    "/gallery/patna9.jpg",
    "/gallery/patna10.jpg",
    "/gallery/patna11.jpg"
  ],
  thingsToDo: [
    {
      name: "Ganga Aarti at Gandhi Ghat",
      description: "Experience a peaceful and spiritual evening on the riverfront."
    },
    {
      name: "Bihar Museum Tour",
      description: "Explore Bihar's ancient heritage through immersive exhibitions and relics."
    },
    {
      name: "Street Food Walk at Maurya Lok",
      description: "Taste famous litti-chokha, kachori, and more in the city’s popular market."
    }
  ],
  placesToVisit: [
    {
      name: "Golghar",
      description: "A colonial-era granary offering panoramic city views."
    },
    {
      name: "Patna Sahib Gurudwara",
      description: "A sacred Sikh site marking Guru Gobind Singh’s birthplace."
    },
    {
      name: "Kumhrar Park",
      description: "Archaeological remains of ancient Pataliputra including Mauryan halls and monasteries."
    }
  ],
  planYourTrip: {
    planningTips: "Visit in winter (November to February) for pleasant weather. Try local sweets and use app-based taxis to get around.",
    travelAgents: ["Historic Bihar Tours", "Gangetic Trails", "Pataliputra Heritage Trips"],
    accommodations: [
      {
        name: "Lemon Tree Premier Patna",
        image: "/gallery/lemontree.jpg",
        deal: "Breakfast + museum pass"
      },
      {
        name: "Hotel Patliputra Continental",
        image: "/gallery/patliputra.jpg",
        deal: "2N + local cuisine tasting"
      },
      {
        name: "Panache Hotel",
        image: "/gallery/panache.jpg",
        deal: "City tour package included"
      },
      {
        name: "Hotel Maurya Patna",
        image: "/gallery/maurya.jpg",
        deal: "3N heritage deal ₹4499"
      },
      {
        name: "The Red Velvet Hotel",
        image: "/gallery/redvelvet.jpg",
        deal: "Romantic Ganga view suite"
      },
      {
        name: "Hotel Gargee Grand",
        image: "/gallery/gargee.jpg",
        deal: "Free pickup + Patna Sahib darshan"
      }
    ]
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
  fullDescription:
    "Nestled in the Kullu Valley, Manali is a stunning hill station known for its breathtaking landscapes, adventure sports, and tranquil nature. From paragliding in Solang Valley to relaxing in hot springs at Vashisht, Manali offers a perfect blend of thrill and peace. The scenic views of the Himalayas make it a paradise for nature lovers and backpackers. Charming cafes, apple orchards, Tibetan monasteries, and lively bazaars make Manali equally exciting for solo travelers and families.",
  image: Manali,
  galleryImages: [
    "/gallery/manali1.jpg",
    "/gallery/manali2.jpg",
    "/gallery/manali3.jpg",
    "/gallery/manali4.jpg",
    "/gallery/manali5.jpg",
    "/gallery/manali6.jpg",
    "/gallery/manali7.jpg",
    "/gallery/manali8.jpg",
    "/gallery/manali9.jpg",
    "/gallery/manali10.jpg",
    "/gallery/manali11.jpg"
  ],
  thingsToDo: [
    {
      name: "Paragliding in Solang Valley",
      description: "Soar above the valley with stunning Himalayan views in one of India's top paragliding spots."
    },
    {
      name: "Hot Springs at Vashisht",
      description: "Relax and rejuvenate in naturally heated sulfur springs believed to have medicinal properties."
    },
    {
      name: "River Rafting in Beas River",
      description: "Experience the thrill of white-water rafting in the icy rapids of Beas."
    }
  ],
  placesToVisit: [
    {
      name: "Hidimba Devi Temple",
      description: "An ancient temple set amidst cedar forests, dedicated to Hidimba from the Mahabharata."
    },
    {
      name: "Rohtang Pass",
      description: "A snow-clad mountain pass offering majestic views and snow activities (open seasonally)."
    },
    {
      name: "Old Manali",
      description: "Charming village lanes lined with cafes, guesthouses, and riverside spots."
    }
  ],
  planYourTrip: {
    planningTips:
      "Best time: March–June (summer), December–Feb (snow). Carry woolens year-round. Avoid monsoon (July–August). Book Rohtang permits in advance.",
    travelAgents: [
      "Himachal Holidays",
      "Mountain Trekkers",
      "Snow View Adventures"
    ],
    accommodations: [
      {
        name: "Apple Country Resort",
        image: "/gallery/applecountry.jpg",
        deal: "3N/4D hill escape ₹7499 with spa access"
      },
      {
        name: "Zostel Manali",
        image: "/gallery/zostel.jpg",
        deal: "Budget-friendly stays for backpackers"
      },
      {
        name: "The Himalayan",
        image: "/gallery/himalayan.jpg",
        deal: "Castle-style stay with valley views"
      },
      {
        name: "Johnson Lodge & Spa",
        image: "/gallery/johnson.jpg",
        deal: "Luxury spa retreat + local cuisine offer"
      },
      {
        name: "Snow Valley Resorts",
        image: "/gallery/snowvalley.jpg",
        deal: "Family package with breakfast and bonfire"
      },
      {
        name: "Shingar Regency",
        image: "/gallery/shingar.jpg",
        deal: "Romantic stay with mountain view balcony"
      }
    ]
  }
}
,
{
  id: 9,
  state: "Uttarakhand",
  city: "Nainital",
  tagline: "The Lake District of India",
  description: "Charming lake town nestled in the Kumaon hills.",
  fullDescription:
    "Nainital is a beautiful hill station surrounding the famous Naini Lake. With colonial-era charm, scenic viewpoints like Snow View Point and bustling Mall Road, Nainital is a peaceful getaway. Visitors enjoy boating, trekking, and exploring nearby hill spots in the Kumaon region.",
  image: Nainital,
  galleryImages: [
    "/gallery/nainital1.jpg",
    "/gallery/nainital2.jpg",
    "/gallery/nainital3.jpg",
    "/gallery/nainital4.jpg",
    "/gallery/nainital5.jpg",
    "/gallery/nainital6.jpg",
    "/gallery/nainital7.jpg",
    "/gallery/nainital8.jpg",
    "/gallery/nainital9.jpg",
    "/gallery/nainital10.jpg",
    "/gallery/nainital11.jpg"
  ],
  thingsToDo: [
    {
      name: "Boating in Naini Lake",
      description: "Enjoy a peaceful boat ride in the heart-shaped lake surrounded by hills."
    },
    {
      name: "Trekking to Tiffin Top",
      description: "Hike to Dorothy’s Seat and get panoramic views of the town and Himalayas."
    },
    {
      name: "Shopping at Mall Road",
      description: "Shop handicrafts and woolens along the vibrant Mall Road by the lake."
    }
  ],
  placesToVisit: [
    {
      name: "Naina Devi Temple",
      description: "A sacred Hindu temple overlooking the lake, attracting pilgrims year-round."
    },
    {
      name: "Snow View Point",
      description: "Reach by cable car to witness snow-covered Himalayan peaks."
    },
    {
      name: "The Flatts",
      description: "A popular hangout space with a fountain, playground, and cultural events."
    }
  ],
  planYourTrip: {
    planningTips:
      "Best visited in spring and autumn for pleasant weather. Carry warm clothes and avoid peak monsoons.",
    travelAgents: ["Kumaon Travel Co.", "Naini Voyages", "Lakeview Tours"],
    accommodations: [
      {
        name: "The Naini Retreat",
        image: "/gallery/naini_retreat.jpg",
        deal: "Lakeview room + guided heritage walk"
      },
      {
        name: "Shervani Hilltop",
        image: "/gallery/shervani.jpg",
        deal: "Complimentary breakfast and pickup"
      },
      {
        name: "The Manu Maharani",
        image: "/gallery/manumaharani.jpg",
        deal: "2N stay + evening cultural shows"
      },
      {
        name: "Hotel Himalaya",
        image: "/gallery/himalaya.jpg",
        deal: "Deluxe stay with boat ride combo"
      },
      {
        name: "Vikram Vintage Inn",
        image: "/gallery/vikram.jpg",
        deal: "Couple's retreat + bonfire dinner"
      },
      {
        name: "Seasons Hotel and Resort",
        image: "/gallery/seasons.jpg",
        deal: "Hill view rooms with kids’ play zone"
      }
    ]
  }
}
,
  {
  id: 10,
  state: "Kerala",
  city: "Munnar",
  tagline: "Tea Gardens and Misty Hills",
  description: "Verdant tea gardens, misty hills, and cool climate.",
  fullDescription:
    "Munnar is a picturesque town in the Western Ghats, famous for sprawling tea plantations, lush valleys, and a calm climate. With viewpoints like Top Station and tourist attractions like Eravikulam National Park, Munnar is a must-visit for nature and peace seekers.",
  image: Munnar,
  galleryImages: [
    "/gallery/munnar1.jpg",
    "/gallery/munnar2.jpg",
    "/gallery/munnar3.jpg",
    "/gallery/munnar4.jpg",
    "/gallery/munnar5.jpg",
    "/gallery/munnar6.jpg",
    "/gallery/munnar7.jpg",
    "/gallery/munnar8.jpg",
    "/gallery/munnar9.jpg",
    "/gallery/munnar10.jpg",
    "/gallery/munnar11.jpg"
  ],
  thingsToDo: [
    {
      name: "Tea Factory Visit",
      description: "Explore tea processing and sample fresh brews at Kolukkumalai Tea Estate."
    },
    {
      name: "Eravikulam National Park",
      description: "Home to the endangered Nilgiri Tahr and vibrant flora."
    },
    {
      name: "Photopoint",
      description: "A picture-perfect spot surrounded by tea gardens and eucalyptus trees."
    }
  ],
  placesToVisit: [
    {
      name: "Mattupetty Dam",
      description: "Popular for boating and surrounded by lush hills and picnic spots."
    },
    {
      name: "Top Station",
      description: "Panoramic views of Western Ghats and sunrise vistas."
    },
    {
      name: "Kundala Lake",
      description: "A peaceful lake known for pedal boating and cherry blossoms."
    }
  ],
  planYourTrip: {
    planningTips:
      "Avoid monsoons for better mobility and clearer views. Best time is from September to March.",
    travelAgents: ["Munnar Magic Tours", "Green Escapes", "Kerala Backwaters Co."],
    accommodations: [
      {
        name: "Tea County",
        image: "/gallery/teacounty.jpg",
        deal: "Plantation view + spice trail walk"
      },
      {
        name: "Parakkat Nature Resort",
        image: "/gallery/parakkat.jpg",
        deal: "Valley view rooms + campfire"
      },
      {
        name: "Blanket Hotel & Spa",
        image: "/gallery/blanket.jpg",
        deal: "Luxury spa and candlelight dinner"
      },
      {
        name: "The Fog Munnar",
        image: "/gallery/fog.jpg",
        deal: "Free jeep safari with booking"
      },
      {
        name: "Fragrant Nature",
        image: "/gallery/fragrant.jpg",
        deal: "Boutique stay with organic meals"
      },
      {
        name: "Chandy’s Windy Woods",
        image: "/gallery/chandys.jpg",
        deal: "Infinity pool with forest view"
      }
    ]
  }
}
,
{
  id: 11,
  state: "Sikkim",
  city: "Gangtok",
  tagline: "Himalayan Serenity",
  description: "Stunning views of the Himalayas and vibrant local culture.",
  fullDescription:
    "Gangtok, the capital of Sikkim, is known for its beautiful landscapes, Buddhist monasteries, and pleasant climate. A great base for exploring Eastern Himalayas, Gangtok offers attractions like Tsomgo Lake and Nathula Pass along with bustling MG Road for local experiences.",
  image: Gangtok,
  galleryImages: [
    "/gallery/gangtok1.jpg",
    "/gallery/gangtok2.jpg",
    "/gallery/gangtok3.jpg",
    "/gallery/gangtok4.jpg",
    "/gallery/gangtok5.jpg",
    "/gallery/gangtok6.jpg",
    "/gallery/gangtok7.jpg",
    "/gallery/gangtok8.jpg",
    "/gallery/gangtok9.jpg",
    "/gallery/gangtok10.jpg",
    "/gallery/gangtok11.jpg"
  ],
  thingsToDo: [
    {
      name: "Cable Car Ride",
      description: "Soar above the city for panoramic views of the valleys and peaks."
    },
    {
      name: "Buddhist Monastery Visits",
      description: "Explore peaceful monasteries like Rumtek and Enchey."
    },
    {
      name: "MG Road Shopping",
      description: "Shop handicrafts, woolens, and enjoy local delicacies."
    }
  ],
  placesToVisit: [
    {
      name: "Rumtek Monastery",
      description: "A spiritual and architectural gem of Tibetan Buddhism."
    },
    {
      name: "Tsomgo Lake",
      description: "A glacial lake with yaks and prayer flags at high altitude."
    },
    {
      name: "Nathula Pass",
      description: "A historic Indo-China border point, open to tourists with permit."
    }
  ],
  planYourTrip: {
    planningTips:
      "Obtain permits for Nathula and Tsomgo in advance. Ideal time is April to June and October to December.",
    travelAgents: ["Eastern Escapes", "Sikkim Tourism", "Mountain Gliders"],
    accommodations: [
      {
        name: "Mayfair Spa Resort",
        image: "/gallery/mayfair.jpg",
        deal: "Luxury spa + local sightseeing"
      },
      {
        name: "Summit Norling Resort",
        image: "/gallery/summit.jpg",
        deal: "Tibetan cottage stay + breakfast"
      },
      {
        name: "Orange Village Resort",
        image: "/gallery/orange.jpg",
        deal: "Valley view stay with cultural show"
      },
      {
        name: "Denzong Regency",
        image: "/gallery/denzong.jpg",
        deal: "Royal suite + panoramic city views"
      },
      {
        name: "The Elgin Nor-Khill",
        image: "/gallery/elgin.jpg",
        deal: "Colonial heritage stay + bonfire night"
      },
      {
        name: "Hotel Sonam Delek",
        image: "/gallery/sonam.jpg",
        deal: "Budget stay with MG Road access"
      }
    ]
  }
}
,
{
  id: 12,
  state: "Jammu and Kashmir",
  city: "Gulmarg",
  tagline: "Snowy Wonderland",
  description: "Paradise for snow lovers and adventure seekers.",
  fullDescription:
    "Gulmarg is a premier ski destination located in the Pir Panjal range of the Western Himalayas. Famous for its powdery snow and the world’s second-highest cable car ride, Gulmarg is also an ideal spot for summer meadow treks and picturesque vistas.",
  image: Gulmarg,
  galleryImages: [
    "/gallery/gulmarg1.jpg",
    "/gallery/gulmarg2.jpg",
    "/gallery/gulmarg3.jpg",
    "/gallery/gulmarg4.jpg",
    "/gallery/gulmarg5.jpg",
    "/gallery/gulmarg6.jpg",
    "/gallery/gulmarg7.jpg",
    "/gallery/gulmarg8.jpg",
    "/gallery/gulmarg9.jpg",
    "/gallery/gulmarg10.jpg",
    "/gallery/gulmarg11.jpg"
  ],
  thingsToDo: [
    {
      name: "Skiing",
      description: "Glide down snow-covered slopes ideal for both beginners and pros."
    },
    {
      name: "Gondola Ride",
      description: "Take one of the highest cable cars in the world for stunning mountain views."
    },
    {
      name: "Snowboarding",
      description: "Thrilling runs for snowboard enthusiasts in fresh powder snow."
    }
  ],
  placesToVisit: [
    {
      name: "Alpather Lake",
      description: "A frozen lake surrounded by majestic peaks, perfect for photos and picnics."
    },
    {
      name: "St. Mary’s Church",
      description: "A 19th-century church with beautiful stained glass and wood interiors."
    },
    {
      name: "Khilanmarg",
      description: "A flower-filled meadow offering panoramic views of the Himalayas."
    }
  ],
  planYourTrip: {
    planningTips: "Winter for snow sports, spring for meadows in bloom. Carry layered clothing.",
    travelAgents: ["Kashmir Holidays", "Gulmarg Guides", "Snowland Adventures"],
    accommodations: [
      {
        name: "The Khyber Himalayan Resort",
        image: "/gallery/khyber.jpg",
        deal: "Luxury spa + snow sports package"
      },
      {
        name: "Hotel Hilltop Gulmarg",
        image: "/gallery/hilltop.jpg",
        deal: "Warm stay with valley views"
      },
      {
        name: "Pine View Resort",
        image: "/gallery/pineview.jpg",
        deal: "Wooden cottages + snow activities"
      },
      {
        name: "Heaven Retreat",
        image: "/gallery/heaven.jpg",
        deal: "Affordable comfort + local cuisine"
      },
      {
        name: "Highlands Park",
        image: "/gallery/highlands.jpg",
        deal: "British-era charm + skiing access"
      },
      {
        name: "Royal Park Hotel",
        image: "/gallery/royal.jpg",
        deal: "Deluxe rooms + mountain views"
      }
    ]
  }
}

    
  ,
{
  id: 13,
  state: "Tamil Nadu",
  city: "Kodaikanal",
  tagline: "Princess of Hill Stations",
  description: "Lush valleys, waterfalls, and cool weather in the Princess of Hill Stations.",
  fullDescription:
    "Kodaikanal is a charming hill station nestled in the Western Ghats of Tamil Nadu. Known for its misty hills, dense forests, and scenic beauty, it's a favored getaway for couples and families alike. The cool climate, along with beautiful spots like Kodai Lake and Coaker’s Walk, offers a relaxing retreat year-round.",
  image: Kodaikanal,
  galleryImages: [
    "/gallery/kodaikanal1.jpg",
    "/gallery/kodaikanal2.jpg",
    "/gallery/kodaikanal3.jpg",
    "/gallery/kodaikanal4.jpg",
    "/gallery/kodaikanal5.jpg",
    "/gallery/kodaikanal6.jpg",
    "/gallery/kodaikanal7.jpg",
    "/gallery/kodaikanal8.jpg",
    "/gallery/kodaikanal9.jpg",
    "/gallery/kodaikanal10.jpg",
    "/gallery/kodaikanal11.jpg"
  ],
  thingsToDo: [
    {
      name: "Boating on Kodai Lake",
      description: "Paddle or row across the serene man-made lake at the heart of town."
    },
    {
      name: "Nature Walks",
      description: "Explore the pine forests and scenic trails around the hills."
    },
    {
      name: "View from Pillar Rocks",
      description: "Marvel at the natural pillars and panoramic views they offer."
    }
  ],
  placesToVisit: [
    {
      name: "Kodai Lake",
      description: "The centerpiece of Kodaikanal, ideal for boating and cycling."
    },
    {
      name: "Coaker’s Walk",
      description: "A cliffside pathway with telescopic viewpoints and misty landscapes."
    },
    {
      name: "Bryant Park",
      description: "A botanical garden with vibrant flowers and peaceful green space."
    }
  ],
  planYourTrip: {
    planningTips: "Pleasant all year round, especially after monsoons. Bring warm clothes for evenings.",
    travelAgents: ["South Escape Tours", "Kodai Trips", "Hilltop Ventures"],
    accommodations: [
      {
        name: "Kodai Resort Hotel",
        image: "/gallery/kodairesort.jpg",
        deal: "Valley view cottages + local tours"
      },
      {
        name: "Villa Retreat",
        image: "/gallery/villaretreat.jpg",
        deal: "Peaceful getaway + gourmet meals"
      },
      {
        name: "Sterling Kodai Lake",
        image: "/gallery/sterling.jpg",
        deal: "Family-friendly resort + activities"
      },
      {
        name: "The Carlton",
        image: "/gallery/carlton.jpg",
        deal: "Luxury lakefront stay + spa"
      },
      {
        name: "Le Poshe Resort",
        image: "/gallery/leposhe.jpg",
        deal: "Eco-luxury retreat + bonfire"
      },
      {
        name: "Hotel JC Grand",
        image: "/gallery/jcgrand.jpg",
        deal: "Budget rooms + central access"
      }
    ]
  }
}
,
{
  id: 14,
  state: "Meghalaya",
  city: "Cherrapunji",
  tagline: "Rainforest Adventures",
  description: "Home to living root bridges, waterfalls, and lush rainforests.",
  fullDescription:
    "Cherrapunji is one of the wettest places on earth and is famous for its living root bridges and spectacular waterfalls. Trekking through dense forests, exploring caves, and experiencing the vibrant Khasi culture make it a unique destination in Northeast India.",
  image: Cherrapunji,
  galleryImages: [
    "/gallery/cherrapunji1.jpg",
    "/gallery/cherrapunji2.jpg",
    "/gallery/cherrapunji3.jpg",
    "/gallery/cherrapunji4.jpg",
    "/gallery/cherrapunji5.jpg",
    "/gallery/cherrapunji6.jpg",
    "/gallery/cherrapunji7.jpg",
    "/gallery/cherrapunji8.jpg",
    "/gallery/cherrapunji9.jpg",
    "/gallery/cherrapunji10.jpg",
    "/gallery/cherrapunji11.jpg"
  ],
  thingsToDo: [
    {
      name: "Cave Exploration",
      description: "Explore limestone caves like Mawsmai and Arwah for an underground adventure."
    },
    {
      name: "Root Bridge Trekking",
      description: "Trek through jungles to see the living root bridges built by Khasi tribes."
    },
    {
      name: "Waterfall Hopping",
      description: "Witness towering waterfalls like Nohkalikai during monsoon season."
    }
  ],
  placesToVisit: [
    {
      name: "Nohkalikai Falls",
      description: "One of the tallest plunge waterfalls in India, best seen during monsoons."
    },
    {
      name: "Mawsmai Caves",
      description: "A short but spectacular limestone cave open to tourists."
    },
    {
      name: "Double Decker Root Bridge",
      description: "A marvel of bioengineering and a must-visit trek destination."
    }
  ],
  planYourTrip: {
    planningTips: "Rain gear essential; best visited in monsoon or post-monsoon season.",
    travelAgents: ["Eastern Nature Trails", "MeghaTours", "Khasi Explorers"],
    accommodations: [
      {
        name: "Cherrapunjee Holiday Resort",
        image: "/gallery/holidayresort.jpg",
        deal: "Hilltop views + family-friendly"
      },
      {
        name: "Saimika Resort",
        image: "/gallery/saimika.jpg",
        deal: "Cottage stay + bonfire nights"
      },
      {
        name: "Jiva Resort",
        image: "/gallery/jiva.jpg",
        deal: "Eco cottages + rain forest views"
      },
      {
        name: "Polo Orchid Resort",
        image: "/gallery/polo.jpg",
        deal: "Luxury stay with falls view"
      },
      {
        name: "Halari Restaurant and Lodge",
        image: "/gallery/halari.jpg",
        deal: "Local cuisine + budget rooms"
      },
      {
        name: "By The Way Guesthouse",
        image: "/gallery/bytheway.jpg",
        deal: "Backpacker friendly + local tours"
      }
    ]
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
  tagline: "City of Joy and Culture",
  description: "The cultural capital of India with colonial architecture and festivals.",
  fullDescription:
    "Kolkata, formerly Calcutta, is a vibrant city that blends colonial charm with modern culture. Known for its grand Durga Puja celebrations, literary heritage, and mouthwatering street food, the city is an artistic and intellectual hub. From tram rides to majestic landmarks, every corner tells a story of history, resilience, and joy.",
  image: Kolkata,
  galleryImages: [
    "/gallery/kolkata1.jpg",
    "/gallery/kolkata2.jpg",
    "/gallery/kolkata3.jpg",
    "/gallery/kolkata4.jpg",
    "/gallery/kolkata5.jpg",
    "/gallery/kolkata6.jpg",
    "/gallery/kolkata7.jpg",
    "/gallery/kolkata8.jpg",
    "/gallery/kolkata9.jpg",
    "/gallery/kolkata10.jpg",
    "/gallery/kolkata11.jpg"
  ],
  thingsToDo: [
    {
      name: "Durga Puja Celebrations",
      description: "Experience the grandeur of Kolkata's biggest festival with artistic pandals and cultural performances."
    },
    {
      name: "Tram Ride",
      description: "Ride Asia’s oldest operating tram network for a nostalgic city tour through heritage zones."
    },
    {
      name: "Street Food Tour",
      description: "Taste iconic dishes like Kathi rolls, puchkas, and mishti doi from local vendors."
    }
  ],
  placesToVisit: [
    {
      name: "Victoria Memorial",
      description: "A majestic white marble monument showcasing colonial architecture and art."
    },
    {
      name: "Howrah Bridge",
      description: "An iconic cantilever bridge bustling with life and connecting the twin cities of Kolkata and Howrah."
    },
    {
      name: "Indian Museum",
      description: "India’s oldest museum featuring rare artifacts, fossils, and cultural history exhibits."
    }
  ],
  planYourTrip: {
    planningTips: "Visit in October during Durga Puja for the full experience. Winter months (Nov–Feb) are ideal for exploring comfortably.",
    travelAgents: ["Bong Voyages", "Culture Trail Tours", "Eastern India Escapes"],
    accommodations: [
      {
        name: "The Oberoi Grand",
        image: "/gallery/oberoi.jpg",
        deal: "Luxury colonial stay in central Kolkata"
      },
      {
        name: "Floatel",
        image: "/gallery/floatel.jpg",
        deal: "Riverside stay with Howrah Bridge view"
      },
      {
        name: "The Park Kolkata",
        image: "/gallery/park.jpg",
        deal: "Chic hotel with nightlife and spa"
      },
      {
        name: "Ethnotel",
        image: "/gallery/ethnotel.jpg",
        deal: "Budget-friendly airport hotel"
      },
      {
        name: "Kenilworth Hotel",
        image: "/gallery/kenilworth.jpg",
        deal: "Classic stay with modern amenities"
      },
      {
        name: "Sapphire Suites",
        image: "/gallery/sapphire.jpg",
        deal: "Comfortable city-center stay with great food"
      }
    ]
  }
}
,
      {
  id: 16,
  state: "Kerala",
  city: "Thrissur",
  tagline: "Cultural Capital of Kerala",
  description: "Famous for Thrissur Pooram and classical arts like Kathakali and percussion.",
  fullDescription:
    "Thrissur is a vibrant city that celebrates the cultural heartbeat of Kerala. It’s home to spectacular festivals like Thrissur Pooram, mesmerizing classical performances, and renowned art institutions. From ancient temples to traditional drumming ensembles, Thrissur offers a sensory journey into Kerala’s heritage.",
  image: Thrissur,
  galleryImages: [
    "/gallery/thrissur1.jpg",
    "/gallery/thrissur2.jpg",
    "/gallery/thrissur3.jpg",
    "/gallery/thrissur4.jpg",
    "/gallery/thrissur5.jpg",
    "/gallery/thrissur6.jpg",
    "/gallery/thrissur7.jpg",
    "/gallery/thrissur8.jpg",
    "/gallery/thrissur9.jpg",
    "/gallery/thrissur10.jpg",
    "/gallery/thrissur11.jpg"
  ],
  thingsToDo: [
    {
      name: "Kathakali Performance",
      description: "Watch elaborate storytelling through dance, makeup, and expressions at local theatres."
    },
    {
      name: "Visit Art Museums",
      description: "Explore Kerala Lalithakala Akademi and other local galleries showcasing traditional art."
    },
    {
      name: "Attend Thrissur Pooram",
      description: "Witness Kerala’s grandest temple festival with elephants, fireworks, and percussion."
    }
  ],
  placesToVisit: [
    {
      name: "Vadakkunnathan Temple",
      description: "A UNESCO site and architectural marvel located in the city center."
    },
    {
      name: "Kerala Kalamandalam",
      description: "A premier institution for learning Kerala’s classical arts like Kathakali and Mohiniyattam."
    },
    {
      name: "Shakthan Thampuran Palace",
      description: "Historic palace museum showcasing royal collections and murals."
    }
  ],
  planYourTrip: {
    planningTips: "Best to visit during April–May for the Thrissur Pooram festival. Avoid monsoon season.",
    travelAgents: ["Kerala Cultural Tours", "Thrissur Heritage Trips", "Temple Trail Kerala"],
    accommodations: [
      {
        name: "Lulu International",
        image: "/gallery/lulu.jpg",
        deal: "Modern comfort in the heart of Thrissur"
      },
      {
        name: "Joys Palace",
        image: "/gallery/joys.jpg",
        deal: "Luxury stay with Ayurvedic spa"
      },
      {
        name: "Dass Continental",
        image: "/gallery/dass.jpg",
        deal: "Business-class hotel near key attractions"
      },
      {
        name: "The Garuda Hotel",
        image: "/gallery/garuda.jpg",
        deal: "Affordable comfort with fine dining"
      },
      {
        name: "Niya Regency",
        image: "/gallery/niya.jpg",
        deal: "Charming boutique hotel with city views"
      },
      {
        name: "Pooram International",
        image: "/gallery/pooram.jpg",
        deal: "City-center hotel with cultural decor"
      }
    ]
  }
}
,
{
  id: 17,
  state: "Tamil Nadu",
  city: "Chidambaram",
  tagline: "Spiritual Heart of South India",
  description: "A temple town known for the magnificent Nataraja Temple and Chidambaram Dikshitar rituals.",
  fullDescription:
    "Chidambaram is a sacred city where spirituality, architecture, and classical dance converge. The town’s centerpiece, the Nataraja Temple, is an embodiment of Dravidian architecture and Shaivite philosophy. It’s also a center for Bharatanatyam and religious scholarship.",
  image: Chidambaram,
  galleryImages: [
    "/gallery/chidambaram1.jpg",
    "/gallery/chidambaram2.jpg",
    "/gallery/chidambaram3.jpg",
    "/gallery/chidambaram4.jpg",
    "/gallery/chidambaram5.jpg",
    "/gallery/chidambaram6.jpg",
    "/gallery/chidambaram7.jpg",
    "/gallery/chidambaram8.jpg",
    "/gallery/chidambaram9.jpg",
    "/gallery/chidambaram10.jpg",
    "/gallery/chidambaram11.jpg"
  ],
  thingsToDo: [
    {
      name: "Attend Temple Rituals",
      description: "Experience centuries-old rituals performed by the Chidambaram Dikshitars at the Nataraja Temple."
    },
    {
      name: "Learn Bharatanatyam",
      description: "Join workshops or watch performances of the classical dance form deeply rooted in this town."
    },
    {
      name: "Explore Temple Architecture",
      description: "Admire Chola-era bronze sculptures and gopurams rich with stories from Hindu mythology."
    }
  ],
  placesToVisit: [
    {
      name: "Thillai Nataraja Temple",
      description: "The main shrine dedicated to Lord Shiva in his cosmic dance form."
    },
    {
      name: "Pichavaram Mangrove Forest",
      description: "Second-largest mangrove forest in the world, perfect for boat rides and birdwatching."
    },
    {
      name: "Annamalai University Campus",
      description: "One of the oldest universities in India with a beautiful campus and cultural archives."
    }
  ],
  planYourTrip: {
    planningTips: "Ideal time is December–February. Combine your visit with temple festivals for the best experience.",
    travelAgents: ["Tamil Nadu Temple Tours", "Shaivam Yatras", "South Heritage Walks"],
    accommodations: [
      {
        name: "Saradharam Hotel",
        image: "/gallery/saradharam.jpg",
        deal: "Budget hotel near temple"
      },
      {
        name: "Hotel Akshaya",
        image: "/gallery/akshaya.jpg",
        deal: "Clean and comfortable stay close to bus stand"
      },
      {
        name: "Krishna Residency",
        image: "/gallery/krishnaresidency.jpg",
        deal: "Newly built hotel with modern amenities"
      },
      {
        name: "Hotel Grand Park",
        image: "/gallery/grandpark.jpg",
        deal: "A family-friendly stay near pilgrimage sites"
      },
      {
        name: "Hotel RK Residency",
        image: "/gallery/rkresidency.jpg",
        deal: "Affordable rooms with AC and Wi-Fi"
      },
      {
        name: "SABARI Lodge",
        image: "/gallery/sabari.jpg",
        deal: "Basic lodge for spiritual travelers"
      }
    ]
  }
}
,
      

{
  id: 18,
  state: "Maharashtra",
  city: "Pune",
  tagline: "Oxford of the East",
  description: "A vibrant city known for its educational institutions, cultural festivals, and Maratha history.",
  fullDescription:
    "Pune is a thriving metropolis blending modern living with deep-rooted history and academia. It’s home to forts, classical music festivals, student hubs, and spiritual centers like Osho Ashram. From treks in the Sahyadris to street food in FC Road, Pune has it all.",
  image: Pune,
  galleryImages: [
    "/gallery/pune1.jpg",
    "/gallery/pune2.jpg",
    "/gallery/pune3.jpg",
    "/gallery/pune4.jpg",
    "/gallery/pune5.jpg",
    "/gallery/pune6.jpg",
    "/gallery/pune7.jpg",
    "/gallery/pune8.jpg",
    "/gallery/pune9.jpg",
    "/gallery/pune10.jpg",
    "/gallery/pune11.jpg"
  ],
  thingsToDo: [
    {
      name: "Heritage Walks",
      description: "Explore Shaniwar Wada, Lal Mahal, and the legacy of the Peshwas."
    },
    {
      name: "Spiritual Retreat",
      description: "Relax at the serene Osho Ashram in Koregaon Park."
    },
    {
      name: "Hill Treks",
      description: "Trek to Sinhagad Fort or nearby Sahyadri trails for adventure and views."
    }
  ],
  placesToVisit: [
    {
      name: "Aga Khan Palace",
      description: "Historical landmark where Mahatma Gandhi was imprisoned during the Quit India Movement."
    },
    {
      name: "Shaniwar Wada",
      description: "A grand fortification reflecting the glory of the Maratha Empire."
    },
    {
      name: "Pataleshwar Caves",
      description: "8th-century rock-cut cave temple in the middle of the city."
    }
  ],
  planYourTrip: {
    planningTips: "Visit during winter (Nov–Feb) to enjoy events like Sawai Gandharva Bhimsen Mahotsav.",
    travelAgents: ["Maharashtra Trek Tours", "Explore Pune Now", "FortWalkers"],
    accommodations: [
      {
        name: "JW Marriott",
        image: "/gallery/marriott.jpg",
        deal: "Luxury stay with rooftop views"
      },
      {
        name: "The O Hotel",
        image: "/gallery/ohotel.jpg",
        deal: "Modern rooms near Koregaon Park"
      },
      {
        name: "Hotel Shreyas",
        image: "/gallery/shreyas.jpg",
        deal: "Authentic Maharashtrian food & cozy rooms"
      },
      {
        name: "Treebo Hill View",
        image: "/gallery/treebo.jpg",
        deal: "Mid-range comfort in Deccan"
      },
      {
        name: "Hotel Woodland",
        image: "/gallery/woodland.jpg",
        deal: "Budget-friendly stay in the city center"
      },
      {
        name: "Ginger Pune",
        image: "/gallery/ginger.jpg",
        deal: "Tech-enabled smart hotel for short stays"
      }
    ]
  }
}
,
{
  id: 19,
  state: "Odisha",
  city: "Bhubaneswar",
  tagline: "City of Temples",
  description: "Ancient temples, vibrant art, and a growing urban pulse in Eastern India.",
  fullDescription:
    "Bhubaneswar, the capital of Odisha, seamlessly blends ancient architecture with modern infrastructure. Known as the 'City of Temples', it houses over 700 ancient shrines, including the iconic Lingaraja Temple. It's also a center of Odissi dance, tribal art, and handloom textiles. With proximity to Konark and Puri, it forms the cultural golden triangle of Odisha.",
  image: Bhubaneshwar,
  galleryImages: [
    "/gallery/bhubaneswar1.jpg",
    "/gallery/bhubaneswar2.jpg",
    "/gallery/bhubaneswar3.jpg",
    "/gallery/bhubaneswar4.jpg",
    "/gallery/bhubaneswar5.jpg",
    "/gallery/bhubaneswar6.jpg",
    "/gallery/bhubaneswar7.jpg",
    "/gallery/bhubaneswar8.jpg",
    "/gallery/bhubaneswar9.jpg",
    "/gallery/bhubaneswar10.jpg",
    "/gallery/bhubaneswar11.jpg"
  ],
  thingsToDo: [
    {
      name: "Explore Temple Architecture",
      description: "Marvel at the intricate Kalinga architecture of Lingaraja and Mukteshwar Temples."
    },
    {
      name: "Attend Tribal Museum Tour",
      description: "Discover Odisha’s diverse tribal heritage and crafts."
    },
    {
      name: "Try Local Cuisine",
      description: "Relish Odia dishes like Dalma, Chhena Poda, and temple-style Mahaprasad."
    }
  ],
  placesToVisit: [
    {
      name: "Lingaraja Temple",
      description: "A masterpiece of 11th-century Hindu temple architecture dedicated to Lord Shiva."
    },
    {
      name: "Udayagiri & Khandagiri Caves",
      description: "Ancient Jain rock-cut caves with inscriptions and scenic hilltop views."
    },
    {
      name: "Ekamra Kanan Botanical Gardens",
      description: "A peaceful garden and orchid house for nature lovers."
    }
  ],
  planYourTrip: {
    planningTips: "Best visited in winter (Oct–Feb); combine with Puri-Konark for a spiritual circuit.",
    travelAgents: ["Odisha Trails", "Temple Tours India", "Eastern Travel Circuit"],
    accommodations: [
      {
        name: "Mayfair Lagoon",
        image: "/gallery/mayfair.jpg",
        deal: "Luxury resort with lake views and spa"
      },
      {
        name: "Swosti Premium",
        image: "/gallery/swosti.jpg",
        deal: "Elegant business hotel with rooftop dining"
      },
      {
        name: "Hotel Suncity",
        image: "/gallery/suncity.jpg",
        deal: "Mid-range comfort with travel desk"
      },
      {
        name: "The Crown Bhubaneswar",
        image: "/gallery/crown.jpg",
        deal: "Family-friendly hotel near major sites"
      },
      {
        name: "Ginger Bhubaneswar",
        image: "/gallery/gingerbh.jpg",
        deal: "Budget hotel with smart features"
      },
      {
        name: "Hotel Excellency",
        image: "/gallery/excellency.jpg",
        deal: "Great connectivity and modern amenities"
      }
    ]
  }
}
,
{
  id: 20,
  state: "Assam",
  city: "Majuli",
  tagline: "India’s Largest River Island",
  description: "A cultural and ecological paradise in the Brahmaputra River known for Satras and traditions.",
  fullDescription:
    "Majuli, the world's largest river island, is a treasure trove of Assamese culture, spirituality, and biodiversity. It is home to Neo-Vaishnavite monasteries (Satras), mask-making artisans, and vibrant tribal communities. Surrounded by the Brahmaputra, this island offers an immersive experience in tradition and tranquility.",
  image:Majuli,
  galleryImages: [
    "/gallery/majuli1.jpg",
    "/gallery/majuli2.jpg",
    "/gallery/majuli3.jpg",
    "/gallery/majuli4.jpg",
    "/gallery/majuli5.jpg",
    "/gallery/majuli6.jpg",
    "/gallery/majuli7.jpg",
    "/gallery/majuli8.jpg",
    "/gallery/majuli9.jpg",
    "/gallery/majuli10.jpg",
    "/gallery/majuli11.jpg"
  ],
  thingsToDo: [
    {
      name: "Visit Satras",
      description: "Explore the Vaishnavite monasteries that preserve ancient dance, music, and drama traditions."
    },
    {
      name: "Mask-Making Workshop",
      description: "Meet local artisans and learn the art of traditional mask-making at Samaguri Satra."
    },
    {
      name: "Cycle Around the Island",
      description: "Rent a bike and explore the serene landscape, rice fields, and fishing villages."
    }
  ],
  placesToVisit: [
    {
      name: "Auniati Satra",
      description: "One of the oldest and most important Satras known for its museum and spiritual teachings."
    },
    {
      name: "Samaguri Satra",
      description: "Famous for preserving the mask-making craft passed down for generations."
    },
    {
      name: "Kamalabari Satra",
      description: "Cultural hub where traditional dance and music are still practiced and performed."
    }
  ],
  planYourTrip: {
    planningTips: "Visit between Oct–Mar. Nearest access is via ferry from Neemati Ghat, Jorhat.",
    travelAgents: ["Majuli Eco Tours", "Assam Cultural Trails", "Brahmaputra Explorers"],
    accommodations: [
      {
        name: "Dekasang Resort",
        image: "/gallery/dekasang.jpg",
        deal: "Eco-resort built with bamboo architecture"
      },
      {
        name: "La Maison de Ananda",
        image: "/gallery/ananda.jpg",
        deal: "Authentic Assamese stay with river views"
      },
      {
        name: "Ygdrasill Bamboo Cottage",
        image: "/gallery/ygdrasill.jpg",
        deal: "Off-grid eco-cabin experience"
      },
      {
        name: "Majuli Bamboo Hut",
        image: "/gallery/majulihut.jpg",
        deal: "Budget homestay close to Satras"
      },
      {
        name: "Sanjiwani Homestay",
        image: "/gallery/sanjiwani.jpg",
        deal: "Tribal village experience with local meals"
      },
      {
        name: "Okegiga Homes",
        image: "/gallery/okegiga.jpg",
        deal: "Rustic cottages with organic food and cycling tours"
      }
    ]
  }
}

    ]
  },
  {
    category: "Adventure Trips",
    places: [

     {
  id: 21,
  state: "Uttarakhand",
  city: "Rishikesh",
  tagline: "Yoga Capital of the World",
  description: "Yoga capital of the world also known for river rafting and cliff jumping.",
  fullDescription:
    "Rishikesh, nestled in the Himalayan foothills beside the Ganges River, is famed for its spiritual energy, yoga retreats, and thrilling adventure sports. It's a hub for seekers and adrenaline junkies alike, offering a unique blend of calm and chaos.",
  image: Rishikesh,
  galleryImages: [
    "/gallery/rishikesh1.jpg", "/gallery/rishikesh2.jpg", "/gallery/rishikesh3.jpg",
    "/gallery/rishikesh4.jpg", "/gallery/rishikesh5.jpg", "/gallery/rishikesh6.jpg",
    "/gallery/rishikesh7.jpg", "/gallery/rishikesh8.jpg", "/gallery/rishikesh9.jpg",
    "/gallery/rishikesh10.jpg", "/gallery/rishikesh11.jpg"
  ],
  thingsToDo: [
    {
      name: "River Rafting",
      description: "Experience the thrill of white water rafting in the Ganges."
    },
    {
      name: "Camping by Ganges",
      description: "Enjoy scenic riverside campsites with bonfires and music."
    },
    {
      name: "Bungee Jumping",
      description: "Leap into the void at India’s highest bungee jumping spot."
    }
  ],
  placesToVisit: [
    {
      name: "Ram Jhula",
      description: "Suspension bridge known for ashrams and spiritual vibes."
    },
    {
      name: "Laxman Jhula",
      description: "Iconic landmark tied to mythology and riverfront views."
    },
    {
      name: "Neelkanth Mahadev Temple",
      description: "Sacred temple dedicated to Lord Shiva, nestled in the hills."
    }
  ],
  planYourTrip: {
    planningTips: "Ideal from Oct to April. Avoid the monsoon season due to high river flow.",
    travelAgents: ["Thrill Rishikesh", "Yoga & Raft Tours", "Ganga Adventure Club"],
    accommodations: [
      {
        name: "Live Free Hostel",
        image: "/gallery/livefree.jpg",
        deal: "Affordable dorms with yoga classes and social vibes"
      },
      {
        name: "Aloha on the Ganges",
        image: "/gallery/aloha.jpg",
        deal: "Luxury riverside resort with yoga and spa"
      },
      {
        name: "Shiv Shakti Hostel",
        image: "/gallery/shivshakti.jpg",
        deal: "Backpacker-friendly with Ganges view terrace"
      },
      {
        name: "Skyard Hostel",
        image: "/gallery/skyard.jpg",
        deal: "Great rooftop hangout with city views"
      },
      {
        name: "Ganga Kinare",
        image: "/gallery/gangakinare.jpg",
        deal: "Premium hotel with riverside dining"
      },
      {
        name: "Sonu Guesthouse",
        image: "/gallery/sonuguest.jpg",
        deal: "Homely stay near Ram Jhula"
      }
    ]
  }
}
,
    {
  id: 22,
  state: "Goa",
  city: "South Goa",
  tagline: "Tranquility Meets Adventure",
  description: "Scenic beaches and thrilling water sports for adrenaline lovers.",
  fullDescription:
    "South Goa is the quieter, more serene cousin of North Goa, known for pristine beaches, peaceful retreats, and adrenaline-filled water sports. It’s the perfect destination for both peace-seekers and adventure lovers.",
  image:South_Goa,
  galleryImages: [
    "/gallery/southgoa1.jpg", "/gallery/southgoa2.jpg", "/gallery/southgoa3.jpg",
    "/gallery/southgoa4.jpg", "/gallery/southgoa5.jpg", "/gallery/southgoa6.jpg",
    "/gallery/southgoa7.jpg", "/gallery/southgoa8.jpg", "/gallery/southgoa9.jpg",
    "/gallery/southgoa10.jpg", "/gallery/southgoa11.jpg"
  ],
  thingsToDo: [
    {
      name: "Scuba Diving",
      description: "Explore underwater wonders and coral reefs."
    },
    {
      name: "Banana Boat Ride",
      description: "Fun group ride perfect for families and friends."
    },
    {
      name: "Beach Hopping",
      description: "Visit tranquil beaches like Palolem and Butterfly."
    }
  ],
  placesToVisit: [
    {
      name: "Palolem Beach",
      description: "Palm-fringed beach ideal for swimming and sunsets."
    },
    {
      name: "Butterfly Beach",
      description: "Hidden cove reachable by boat, great for photos."
    },
    {
      name: "Agonda Beach",
      description: "Less-crowded paradise for solitude and yoga."
    }
  ],
  planYourTrip: {
    planningTips: "Visit during Nov to March. Off-season (May–Sep) offers cheaper prices.",
    travelAgents: ["Goa Surf & Ride", "Aqua Adventures", "Beach Craze Tours"],
    accommodations: [
      {
        name: "Cuba Patnem",
        image: "/gallery/cubapatnem.jpg",
        deal: "Seaside cottages with great seafood restaurant"
      },
      {
        name: "The LaLiT Golf & Spa Resort",
        image: "/gallery/lalit.jpg",
        deal: "5-star luxury with private beach and golf course"
      },
      {
        name: "Art Resort Goa",
        image: "/gallery/artresort.jpg",
        deal: "Boutique beach resort with vibrant decor"
      },
      {
        name: "Dreamcatcher Resort",
        image: "/gallery/dreamcatcher.jpg",
        deal: "Riverside retreat popular with yoga enthusiasts"
      },
      {
        name: "Beach Hut Goa",
        image: "/gallery/beachhut.jpg",
        deal: "Budget-friendly beach huts steps from the shore"
      },
      {
        name: "Cola Beach Resort",
        image: "/gallery/cola.jpg",
        deal: "Lagoon-front resort with luxury tents"
      }
    ]
  }
}
,

      
{
  id: 23,
  state: "Maharashtra",
  city: "Kolad",
  tagline: "Rafting Capital of Maharashtra",
  description: "Perfect for river rafting, rappelling, and jungle camping.",
  fullDescription:
    "Nestled along the Kundalika River, Kolad is an adventure enthusiast’s dream offering white-water rafting, lush trails, and rustic camping. It's a weekend getaway for Mumbaikars and Puneites who seek action and green escapes.",
  image: Kolad,
  galleryImages: [
    "/gallery/kolad1.jpg", "/gallery/kolad2.jpg", "/gallery/kolad3.jpg",
    "/gallery/kolad4.jpg", "/gallery/kolad5.jpg", "/gallery/kolad6.jpg",
    "/gallery/kolad7.jpg", "/gallery/kolad8.jpg", "/gallery/kolad9.jpg",
    "/gallery/kolad10.jpg", "/gallery/kolad11.jpg"
  ],
  thingsToDo: [
    {
      name: "White Water Rafting",
      description: "Experience grade-III rapids on the Kundalika River."
    },
    {
      name: "Zip Lining",
      description: "Glide over lush valleys for a panoramic thrill."
    },
    {
      name: "Jungle Trek",
      description: "Hike through forests and waterfalls with guided treks."
    }
  ],
  placesToVisit: [
    {
      name: "Kundalika River",
      description: "The lifeline of Kolad's adventure activities."
    },
    {
      name: "Sutarwadi Lake",
      description: "Calm lake ideal for sunrise and birdwatching."
    },
    {
      name: "Tamhini Ghat",
      description: "Scenic mountain pass with waterfalls and foggy roads."
    }
  ],
  planYourTrip: {
    planningTips: "Pre-book rafting slots in peak weekends. Best time: Oct–Feb.",
    travelAgents: ["Rafting Zone India", "Kolad Adventures", "Nature Trails India"],
    accommodations: [
      {
        name: "Rivertrail Eco Camp",
        image: "/gallery/rivertrail.jpg",
        deal: "Raft and camp package in bamboo huts"
      },
      {
        name: "Wildernest Kolad",
        image: "/gallery/wildernest.jpg",
        deal: "Rustic stay with river views"
      },
      {
        name: "Camp River Wild",
        image: "/gallery/campriver.jpg",
        deal: "Tent stays with bonfire and BBQ"
      },
      {
        name: "Sai Farm Retreat",
        image: "/gallery/saifarm.jpg",
        deal: "Farmhouse retreat with homecooked meals"
      },
      {
        name: "Z BAC Adventure Camp",
        image: "/gallery/zbac.jpg",
        deal: "Multi-adventure camp with obstacle course"
      },
      {
        name: "Dewdrops Boutique Retreat",
        image: "/gallery/dewdrops.jpg",
        deal: "Luxury glamping with pool and rafting"
      }
    ]
  }
}
,
{
  id: 24,
  state: "Arunachal Pradesh",
  city: "Ziro Valley",
  tagline: "Land of Pine Hills and Tribes",
  description: "Offbeat gem for hiking, fishing, and tribal culture encounters.",
  fullDescription:
    "Ziro Valley, home to the Apatani tribe, is known for its paddy-cum-fish cultivation, bamboo homes, and scenic vistas. A UNESCO World Heritage candidate, it offers nature walks, cultural immersion, and pristine beauty in the Eastern Himalayas.",
  image: Ziro ,
  galleryImages: [
    "/gallery/ziro1.jpg", "/gallery/ziro2.jpg", "/gallery/ziro3.jpg",
    "/gallery/ziro4.jpg", "/gallery/ziro5.jpg", "/gallery/ziro6.jpg",
    "/gallery/ziro7.jpg", "/gallery/ziro8.jpg", "/gallery/ziro9.jpg",
    "/gallery/ziro10.jpg", "/gallery/ziro11.jpg"
  ],
  thingsToDo: [
    {
      name: "Nature Trails",
      description: "Explore pine-covered hills, paddy fields, and bamboo groves."
    },
    {
      name: "Bamboo Fishing",
      description: "Try the traditional Apatani fishing technique with locals."
    },
    {
      name: "Tribal Homestays",
      description: "Live with locals and learn about their daily customs and food."
    }
  ],
  placesToVisit: [
    {
      name: "Ziro Puto",
      description: "A panoramic hill offering sweeping valley views."
    },
    {
      name: "Tarin Fish Farm",
      description: "Paddy-fish cultivation site, unique to the Apatani tribe."
    },
    {
      name: "Dolo Mando",
      description: "Hiking trail to a hillock with mesmerizing sunrise views."
    }
  ],
  planYourTrip: {
    planningTips: "Visit in Sept for Ziro Music Festival or spring for best views. Carry ILP.",
    travelAgents: ["Ziro Valley Escapes", "NorthEast Alive", "Tribe Routes"],
    accommodations: [
      {
        name: "Ziro Palace Inn",
        image: "/gallery/palaceinn.jpg",
        deal: "Budget-friendly stay near the main town"
      },
      {
        name: "Siiro Resort",
        image: "/gallery/siiro.jpg",
        deal: "Modern cottage stay amidst pine trees"
      },
      {
        name: "Ziro Valley Resort",
        image: "/gallery/zirovalley.jpg",
        deal: "Luxury resort with panoramic views"
      },
      {
        name: "Abasa Homestay",
        image: "/gallery/abasa.jpg",
        deal: "Apatani-style hospitality and food"
      },
      {
        name: "Blue Pine Retreat",
        image: "/gallery/bluepine.jpg",
        deal: "Cozy pinewood cottages with firepit"
      },
      {
        name: "Tribe Eco Stay",
        image: "/gallery/tribeeco.jpg",
        deal: "Sustainable huts with cultural experiences"
      }
    ]
  }
}

    ]
  }

];
