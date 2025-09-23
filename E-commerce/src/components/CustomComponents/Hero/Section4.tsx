// This file assumes you have Tailwind CSS, shadcn-ui, and DaisyUI installed and configured.
// For DaisyUI, add `require('daisyui')` to your `tailwind.config.js` plugins array.
// For shadcn-ui, run `npx shadcn-ui@latest init` and `npx shadcn-ui@latest add card`.

import React from 'react';
import { Card } from '@/components/ui/card'; // Import shadcn-ui Card component

const products = [
  { name: 'Bluetooth Black Mouse', price: '$25.00', image: 'https://via.placeholder.com/200/F5F5F5/333333?text=Mouse' },
  { name: 'Samsung 4K Smart TV', price: '$299.00', image: 'https://via.placeholder.com/200/F5F5F5/333333?text=TV' },
  { name: 'Wireless Earphone', price: '$189.00', image: 'https://via.placeholder.com/200/F5F5F5/333333?text=Earphone' },
  { name: 'Wireless Speaker', price: '$85.00', image: 'https://via.placeholder.com/200/F5F5F5/333333?text=Speaker' },
  { name: 'Airpod Headphone', price: '$150.00', image: 'https://via.placeholder.com/200/F5F5F5/333333?text=Headphone' },
  { name: 'Smart Holo Pad Pro', price: '$599.00', image: 'https://via.placeholder.com/200/F5F5F5/333333?text=Tablet' },
  { name: 'Wireless Headphone', price: '$399.00', image: 'https://via.placeholder.com/200/F5F5F5/333333?text=Headphones' },
  { name: 'EOS 5D Camera', price: '$599.00', image: 'https://via.placeholder.com/200/F5F5F5/333333?text=Camera' },
];

const categories = [
  { name: 'Smartphone', image: 'https://via.placeholder.com/200/F5F5F5/333333?text=Smartphone' },
  { name: 'Headphone', image: 'https://via.placeholder.com/200/F5F5F5/333333?text=Headphone' },
  { name: 'Speakers', image: 'https://via.placeholder.com/200/F5F5F5/333333?text=Speakers' },
  { name: 'Computers', image: 'https://via.placeholder.com/200/F5F5F5/333333?text=Computers' },
  { name: 'Mouse', image: 'https://via.placeholder.com/200/F5F5F5/333333?text=Mouse' },
];

const Section4 = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      
      {/* Promotional Banners Section */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Top Left Banner: Smartwatch */}
        <Card className="relative bg-gray-100 min-h-[300px] flex items-center p-8 overflow-hidden col-span-1">
          <div className="relative z-10 text-center md:text-left flex flex-col justify-center items-center md:items-start w-1/2">
            <span className="text-sm text-gray-600 mb-2 font-medium">EXCLUSIVE COUPON</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Top Electronic Deals
            </h2>
            <p className="text-sm text-gray-700 mb-6">
              SAVE UP TO $199 OFF, GET CHANCE!
            </p>
            {/* DaisyUI Button */}
            <button className="btn btn-neutral btn-sm rounded-none">SHOP NOW</button>
          </div>
          <div className="absolute right-0 bottom-0 top-0 h-full flex items-center justify-end w-1/2">
            <img
              src="https://via.placeholder.com/250x350/B0E0E6/333333?text=SMARTWATCH%0AMOCKUP"
              alt="Smartwatch Mockup"
              className="h-full object-contain -mr-8"
            />
          </div>
        </Card>

        {/* Right Column */}
        <div className="grid grid-rows-2 gap-4 col-span-1">
          {/* Top Right Banner: Laptop */}
          <Card className="relative bg-gray-100 min-h-[150px] flex items-center p-6 overflow-hidden">
            <div className="relative z-10 w-1/2 pr-4">
              <span className="text-xs text-gray-600 font-medium">STARTING FROM $399.99</span>
              <h3 className="text-2xl font-bold mt-1 mb-3">Up To 30% Off</h3>
              {/* DaisyUI Button */}
              <button className="btn btn-neutral btn-xs rounded-none">SHOP NOW</button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 h-full flex items-center justify-end w-1/2">
              <img
                src="https://via.placeholder.com/250x150/D8BFD8/333333?text=Laptop"
                alt="Laptop"
                className="h-full object-contain -mr-8"
              />
            </div>
          </Card>

          {/* Bottom Right Banners: Accessories */}
          <div className="grid grid-cols-2 gap-4">
            {/* Airpods */}
            <Card className="relative bg-gray-200 min-h-[150px] flex flex-col justify-end p-4 text-center overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center -mt-8">
                <img
                  src="https://via.placeholder.com/120x100/ADD8E6/333333?text=Airpods"
                  alt="Airpods"
                  className="max-h-24 object-contain"
                />
              </div>
              <div className="relative z-10 mt-auto">
                <p className="text-sm text-gray-700 mb-2">For Accessories</p>
                {/* DaisyUI Button */}
                <button className="btn btn-neutral btn-xs rounded-none">SHOP NOW</button>
              </div>
            </Card>

            {/* Wireless Speaker */}
            <Card className="relative bg-gray-200 min-h-[150px] flex flex-col justify-end p-4 text-center overflow-hidden">
              <div className="absolute top-4 right-4 text-right z-10">
                <span className="text-xs text-red-500 font-semibold">EXTRA 50% OFF</span>
                <h4 className="text-lg font-bold">Wireless Speaker</h4>
              </div>
              <div className="absolute inset-0 flex items-center justify-center -mb-8">
                <img
                  src="https://via.placeholder.com/150x100/C0C0C0/333333?text=Speaker"
                  alt="Wireless Speaker"
                  className="max-h-24 object-contain"
                />
              </div>
              <div className="relative z-10 mt-auto">
                {/* DaisyUI Button */}
                <button className="btn btn-neutral btn-xs rounded-none">SHOP NOW</button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <div className="flex w-full overflow-x-auto p-4 gap-4 bg-gray-100 no-scrollbar rounded-lg">
          {categories.map((category, index) => (
            <Card key={index} className="w-48 h-64 bg-white flex-shrink-0 flex flex-col justify-between items-center p-4">
              <img
                src={category.image}
                alt={category.name}
                className="max-h-32 object-contain mb-4"
              />
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* Product Grid Section */}
      <section>
        <div className="mb-6 flex justify-center space-x-8">
          <h3 className="text-lg font-semibold border-b-2 border-black pb-1">RECENT PRODUCTS</h3>
          <h3 className="text-lg font-medium text-gray-500">FEATURED PRODUCTS</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Card key={index} className="p-4 flex flex-col items-center text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-2"
              />
              <span className="text-sm font-medium text-gray-800">{product.name}</span>
              <span className="text-sm text-gray-500">{product.price}</span>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section4;