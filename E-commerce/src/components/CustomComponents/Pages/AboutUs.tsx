import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="text-gray-800 bg-white font-jost">
      {/* Header and Banner Section */}
      <div className="flex flex-col items-center justify-center py-20 bg-gray-50 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="text-sm text-gray-500">
          Home / About Us
        </p>
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            Congue quisque egestas diam in arcu cursuspotenti nullamac tortor
          </h2>
          <p className="max-w-4xl text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices pretium massa, sed varius
            lacus blandit auctor aenean ac volutpat blandit aliquam. Quis adipiscing vitae arctian alitur
            quisque nisl pulvinar nisi augue tempor sapien augue. Orci porta scelerisque quam. Duis volutpat
            turpis eu porta facilisis diam, eu dictum massa quisque pulvinar nisi.
          </p>
        </div>
      </div>
      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <p className="max-w-6xl mx-auto text-sm text-gray-600 leading-relaxed">
          Telius rutrum tellus et tellus neque et. tristique tortor aliquet sollicitu. Diam in arcu cursus
          toremend quis. Eget id eget tellus amet nec adipiscing enim amonium ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus ultrices pretium massa, sed varius lacus blandit auctor
          aenean ac volutpat blandit aliquam. Quis adipiscing vitae arctian alitur quisque nisl
          pulvinar nisi augue tempor sapien augue. Orci porta scelerisque quam. Duis volutpat turpis eu
          porta facilisis diam, eu dictum massa quisque pulvinar nisi. Aenean ac volutpat blandit
          aliquam. Quis adipiscing vitae arctian alitur quisque nisl pulvinar nisi augue tempor sapien
          augue. Orci porta scelerisque quam. Duis volutpat turpis eu porta facilisis diam, eu dictum
          massa quisque pulvinar nisi.
        </p>
      </div>

      <hr className="my-10 border-gray-200" />

      {/* Our Skills Section */}
      <div className="container mx-auto px-4 py-10">
        <p className="uppercase text-sm font-semibold text-gray-500 mb-2">
          Our Skills
        </p>
        <h3 className="text-3xl font-semibold mb-8">
          To Serve You, To Comfort You<br />We Are All For You
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <span className="p-3 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M18 14h.01" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-lg">Simple Design</h4>
              <p className="text-sm text-gray-600 mt-1">
                Aenean non neque quis neque sagittis. Segnis ut consectetur lorem et. Orci porta
                scelerisque quam. Duis volutpat turpis eu porta facilisis diam, eu dictum massa quisque pulvinar nisi.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="p-3 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-lg">High Quality</h4>
              <p className="text-sm text-gray-600 mt-1">
                Telius rutrum tellus et tellus neque et. tristique tortor aliquet sollicitu. Diam in arcu cursus
                toremend quis. Eget id eget tellus amet nec adipiscing.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="p-3 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h.01M5 12h.01" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-lg">All Day Service</h4>
              <p className="text-sm text-gray-600 mt-1">
                Aenean non neque quis neque sagittis. Sed ut consectetur lorem et. Orci porta scelerisque
                quam. Duis volutpat turpis eu porta facilisis diam, eu dictum massa quisque pulvinar nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <hr className="my-10 border-gray-200" />

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-10 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-bold">24+</h4>
            <p className="text-gray-600 text-sm mt-1">
              Years of Working
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-bold">5k+</h4>
            <p className="text-gray-600 text-sm mt-1">
              Support Available
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-bold">25+</h4>
            <p className="text-gray-600 text-sm mt-1">
              Awards Won
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-bold">7k+</h4>
            <p className="text-gray-600 text-sm mt-1">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
      
      <hr className="my-10 border-gray-200" />

      {/* Our Team Section */}
      <div className="container mx-auto px-4 py-10 text-center">
        <h3 className="text-2xl font-semibold mb-8">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img src="/placeholder-lily.jpg" alt="Lily Hussain" className="w-full h-auto object-cover rounded-lg mb-4" />
            <h4 className="font-semibold">Lily Hussain</h4>
            <p className="text-gray-600 text-sm">
              Senior Developer, The Company
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/placeholder-jane.jpg" alt="Jane Cooper" className="w-full h-auto object-cover rounded-lg mb-4" />
            <h4 className="font-semibold">Jane Cooper</h4>
            <p className="text-gray-600 text-sm">
              CEO, Co-founder
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/placeholder-chloe.jpg" alt="Chloe Allens" className="w-full h-auto object-cover rounded-lg mb-4" />
            <h4 className="font-semibold">Chloe Allens</h4>
            <p className="text-gray-600 text-sm">
              Happy Customer
            </p>
          </div>
        </div>
      </div>
      
      <hr className="my-10 border-gray-200" />

      {/* Footer Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002 15h.01a12.001 12.001 0 0017.962 1.488A12.001 12.001 0 0022 15c0-1.856-.375-3.626-1.038-5.264z" />
            </svg>
            <div>
              <p className="font-semibold">Free Shipping & Return</p>
              <p className="text-xs text-gray-600">Free shipping for all orders over $150</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-semibold">Customer Support 24/7</p>
              <p className="text-xs text-gray-600">Instant access to perfect support everyday</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002 15h.01a12.001 12.001 0 0017.962 1.488A12.001 12.001 0 0022 15c0-1.856-.375-3.626-1.038-5.264z" />
            </svg>
            <div>
              <p className="font-semibold">100% Secure Payment</p>
              <p className="text-xs text-gray-600">We ensure secure payment for customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;