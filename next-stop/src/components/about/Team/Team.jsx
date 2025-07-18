import {Swiper,SwiperSlide} from "swiper/react"
import { Navigation } from 'swiper/modules';
import { teamData } from "../../../data/TeamData/TeamData";
import { FaTwitter ,FaLinkedin} from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';

export default function Team() {
  return (
    <div className="py-12 px-4 md:px-20 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#800000] mb-10">
        Meet Our Team
      </h2>

      <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation]}
        className="teamSwiper "
      >
        {teamData.map((member, index) => (
<SwiperSlide key={index} className="bg-[#800000]">
  <div className="relative bg-white border border-[#f5eaea] shadow-xl rounded-2xl px-6 py-8 hover:scale-105 hover:shadow-[#a0522d] transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-center text-black min-h-[420px] flex flex-col items-center justify-between">
    
    {/* Profile Image */}
    <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-md mb-4 ">
      <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
    </div>

    {/* Name & Role */}
    <div className="space-y-1">
      <h3 className="text-xl font-bold text-[#800000]">{member.name}</h3>
      <p className="text-sm font-medium text-gray-600">{member.role}</p>
    </div>

    {/* Work Description */}
    <div className="mt-4 text-sm text-gray-700 px-2">{member.work}</div>
    <div className="text-xs text-gray-500 mt-2">{member.experience} of experience</div>

    {/* Social Icons */}
    <div className="flex gap-4 mt-4 text-[#800000] text-lg">
      {member.twitter && (
        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-[#1da1f2] transition" />
        </a>
      )}
      {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-[#0077b5] transition" />
        </a>
      )}
    </div>

    {/* Role Badge */}
    <span className="absolute top-3 right-3 bg-[#800000] px-3 py-1 text-xs text-white font-semibold rounded-full shadow-md uppercase">
      {member.role}
    </span>
  </div>
</SwiperSlide>


        ))}
      </Swiper>
    </div>
  );
}