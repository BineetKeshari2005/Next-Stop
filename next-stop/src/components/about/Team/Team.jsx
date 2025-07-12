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
          <SwiperSlide key={index}>
  <div className="relative bg-white border border-white/30 shadow-2xl rounded-2xl p-6 transition transform hover:scale-105 duration-300 text-center text-black min-h-[360px] flex flex-col items-center justify-between">
    <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-2xl mb-4 ">
      <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
    </div>

    <div>
      <h3 className=" relative text-xl font-bold text-black mb-1">{member.name}</h3>
      <p className="text-gray-600 font-medium">{member.role}</p>
    </div>

    <p className="text-md text-[#162938] mt-4">{member.work}</p>
    <p className="text-sm text-[#162938] mt-2">{member.experience} of experience</p>

    {/* Role Badge */}
    <span className="absolute top-2 right-2 bg-[#800000] px-3 py-1 text-xs text-white font-semibold rounded-full shadow-md">
      {member.role}
    </span>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
}