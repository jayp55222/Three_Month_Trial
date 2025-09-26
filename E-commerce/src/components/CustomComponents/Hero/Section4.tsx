// This file assumes you have Tailwind CSS, shadcn-ui, and DaisyUI installed and configured.
// For DaisyUI, add `require('daisyui')` to your `tailwind.config.js` plugins array.
// For shadcn-ui, run `npx shadcn-ui@latest init` and `npx shadcn-ui@latest add card`.

import React from "react";
import { Card } from "@/components/ui/card"; // Import shadcn-ui Card component
import { img } from "@/GlobalVariable";

const products = [
  {
    name: "Bluetooth Black Mouse",
    price: "$25.00",
    image: "https://via.placeholder.com/200/F5F5F5/333333?text=Mouse",
  },
  {
    name: "Samsung 4K Smart TV",
    price: "$299.00",
    image: "https://via.placeholder.com/200/F5F5F5/333333?text=TV",
  },
  {
    name: "Wireless Earphone",
    price: "$189.00",
    image: "https://via.placeholder.com/200/F5F5F5/333333?text=Earphone",
  },
  {
    name: "Wireless Speaker",
    price: "$85.00",
    image: "https://via.placeholder.com/200/F5F5F5/333333?text=Speaker",
  },
  {
    name: "Airpod Headphone",
    price: "$150.00",
    image: "https://via.placeholder.com/200/F5F5F5/333333?text=Headphone",
  },
  {
    name: "Smart Holo Pad Pro",
    price: "$599.00",
    image: "https://via.placeholder.com/200/F5F5F5/333333?text=Tablet",
  },
  {
    name: "Wireless Headphone",
    price: "$399.00",
    image: "https://via.placeholder.com/200/F5F5F5/333333?text=Headphones",
  },
  {
    name: "EOS 5D Camera",
    price: "$599.00",
    image: "https://via.placeholder.com/200/F5F5F5/333333?text=Camera",
  },
];



const Section4 = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
     

      {/* Product Grid Section */}
      <section>
        <div className="mb-6 flex justify-center space-x-8">
          <h3 className="text-lg font-semibold border-b-2 border-black pb-1">
            RECENT PRODUCTS
          </h3>
          <h3 className="text-lg font-medium text-gray-500">
            FEATURED PRODUCTS
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Card
              key={index}
              className="p-4 bg-cover bg-[url('img.jpg')] flex flex-col items-center text-center rounded-none"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-2"
              />
              <span className="text-sm font-medium text-gray-800">
                {product.name}
              </span>
              <span className="text-sm text-black">{product.price}</span>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section4;
