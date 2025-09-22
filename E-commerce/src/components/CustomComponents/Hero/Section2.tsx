import React from 'react'
import { FaShippingFast, FaHeadphonesAlt, FaShieldAlt } from 'react-icons/fa';

const Section2 = () => {
  return (
    <section className='font-jost'>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-10">
      <div className="flex flex-col items-center text-center">
        <FaShippingFast size={48} className="text-gray-700 mb-2" />
        <h3 className="text-lg font-semibold text-gray-800">Free Shipping & Return</h3>
        <p className="text-sm text-gray-600">Free shipping for all orders over $130</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <FaHeadphonesAlt size={48} className="text-gray-700 mb-2" />
        <h3 className="text-lg font-semibold text-gray-800">Customer Support 24/7</h3>
        <p className="text-sm text-gray-600">Instant access to perfect support everyday</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <FaShieldAlt size={48} className="text-gray-700 mb-2" />
        <h3 className="text-lg font-semibold text-gray-800">100% Secure Payment</h3>
        <p className="text-sm text-gray-600">We ensure secure payment for customers</p>
      </div>
    </div>
    </section>
  )
}

export default Section2
