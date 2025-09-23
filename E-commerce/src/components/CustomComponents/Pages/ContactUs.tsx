// ContactUs.tsx
import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="py-4 text-center">
        <nav className="text-sm text-gray-500">
          Home &gt; Contact Us
        </nav>
        <h1 className="text-4xl font-light mt-2">Contact Us</h1>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Map Section */}
        <div className="relative w-full h-96 bg-gray-200 border border-gray-300 shadow-sm">
          <img
            src="https://www.google.com/maps/d/u/0/viewer?mid=1h4u_eR0hN6l6R7t_jH9k8e7j_kL0x_2&hl=en_US&f=d&s=A&t=h&c=0&z=12"
            alt="Map of London Eye"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white p-4 border border-gray-300 shadow-lg max-w-sm">
            <h2 className="font-semibold text-lg">London Eye</h2>
            <p className="text-sm text-gray-600 mt-1">
              Riverside Building, County Hall, London, SE1 7PB, United Kingdom
            </p>
            <div className="mt-2 text-xs flex items-center text-yellow-500">
              <span className="text-gray-600 mr-2">4.5 ★</span>
              <span className="text-gray-600">
                (458,982 reviews)
              </span>
            </div>
            <a href="#" className="text-sm text-blue-500 mt-2 block">
              View larger map
            </a>
          </div>
        </div>

        {/* Form and Contact Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <h2 className="text-2xl font-light mb-6">Send a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name *"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="E-mail *"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject *"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-gray-800 text-white py-3 px-8 font-light text-sm tracking-wide"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div>
            <h2 className="text-2xl font-light mb-6">Contact Information</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Address:</h3>
                <p>123 Street Name, City Name</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Email:</h3>
                <p>mail@email.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Working Days/Hours:</h3>
                <p>Mon - Sat / 8:00-18:00</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Phone Number:</h3>
                <p>(0)123-456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;