import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';

const Contact = () => {
  const { user, token, isLoggedIn } = useAuth();
  const [subject, setSubject] = useState('');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const API = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert("Please login to send a message.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ subject, message: query }),
      });

      if (res.ok) {
        alert("Message sent successfully and saved to database!");
        setSubject('');
        setQuery('');
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to send message');
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-16 bg-gradient-to-b bg-[#fffaf0]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#800000] drop-shadow-md">
          Get in Touch
        </h2>

        <div className="md:flex items-start gap-10">
          <div
            className="w-full md:w-1/2 h-[300px] sm:h-[450px] rounded-xl overflow-hidden shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13994.756830232527!2d77.10513338715818!3d28.99924403437983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da9eec0f0c87b%3A0x6b9db4bb5602f5b9!2sRishihood%20University!5e0!3m2!1sen!2sin!4v1721280607655!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rishihood University Map"
            ></iframe>
          </div>

          <div
            className="w-full md:w-1/2 mt-10 md:mt-0 bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#800000] transform hover:-translate-y-1 transition-all duration-300"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Query</label>
                <textarea
                  rows={5}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Write your message..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 bg-[#800000] text-white rounded-lg hover:bg-[#9d2323] transition duration-200 font-semibold tracking-wide ${
                  loading && 'opacity-50 cursor-not-allowed'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
