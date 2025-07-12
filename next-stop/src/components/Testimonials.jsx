import { FaStar } from 'react-icons/fa';
import alok from '../assets/images/alok.jpg'
import shourya from '../assets/images/shourya.jpg'
import piyush from '../assets/images/piyush.jpg'
import anshuman from '../assets/images/anshuman.jpg'

const testimonials = [
  {
    name: 'Alok Kumar',
    image: alok, 
    rating: 4,
    comment: 'This was an amazing experience! Highly recommend!',
  },
  {
    name: 'Shourya Sisodiya',
    image:shourya,
    rating: 4,
    comment: 'The trip was fantastic, the guides were great!',
  },
  {
    name: 'Sharma Piyush',
    image:piyush,
    rating: 5,
    comment: 'Best vacation ever! Every detail was perfect.',
  },
  {
    name: 'Anshuman Mehta',
    image: anshuman ,
    rating: 4,
    comment: 'It is Life changing Trip for me.',
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 ">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#800000]">Customer Testimonials</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 hover:shadow-[#a0522d] transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            <img src={testimonial.image} alt={testimonial.name} className="w-20 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#800000]  ">{testimonial.name}</h3>
            <div className="flex justify-center my-2">
              {Array.from({ length: 5 }, (_, index) => {
                const isFilled = index < testimonial.rating;
                const starClass = isFilled ? 'text-yellow-500' : 'text-gray-500';

                return <FaStar key={index} className={starClass} />;
              })}
            </div>

            <p className="text-gray-600 mt-4">"{testimonial.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

  