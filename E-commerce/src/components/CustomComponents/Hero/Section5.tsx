import React from "react";
import { Card } from "@/components/ui/card"; // Assuming shadcn-ui Card component is available

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

const categories = [
  {
    name: "Smartphone",
    image: "https://via.placeholder.com/200/F5F5F5/333333?text=Smartphone",
  },
  {
    name: "Headphone",
    image: "https://via.placeholder.com/200/F5F5F5/333333?text=Headphone",
  },
  {
    name: "Speakers",
    image: "https://via.placeholder.com/200/F5F5F5/333333?text=Speakers",
  },
  {
    name: "Computers",
    image: "https://via.placeholder.com/200/F5F5F5/333333?text=Computers",
  },
  {
    name: "Mouse",
    image: "https://via.placeholder.com/200/F5F5F5/333333?text=Mouse",
  },
];

const Section5 = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      {/* Main Promotional Banner Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card className="relative bg-[#F4F1ED] p-8 flex items-center justify-between overflow-hidden">
          <div className="relative z-10 flex flex-col">
            <span className="text-sm font-semibold text-gray-600 mb-2">
              FLASH SALE 50% OFF
            </span>
            <h2 className="text-5xl font-bold leading-tight">
              Wireless Earphone
            </h2>
            <button className="bg-black text-white text-sm font-semibold px-6 py-3 hover:bg-gray-800 transition-colors mt-4 w-fit">
              SHOP NOW
            </button>
          </div>
          <div className="absolute right-0 bottom-0 h-full w-1/2 flex items-end">
            <img
              src="https://via.placeholder.com/400x300/F4F1ED/333333?text=Earphones"
              alt="Wireless Earphone"
              className="h-full object-contain"
            />
          </div>
        </Card>

        <Card className="relative bg-[#E6F0F6] p-8 flex items-center justify-between overflow-hidden">
          <div className="relative z-10 flex flex-col">
            <span className="text-sm font-semibold text-gray-600 mb-2">
              SEASON COLLECTION
            </span>
            <h2 className="text-5xl font-bold leading-tight">Up to 30% Off</h2>
            <button className="bg-black text-white text-sm font-semibold px-6 py-3 hover:bg-gray-800 transition-colors mt-4 w-fit">
              SHOP NOW
            </button>
          </div>
          <div className="absolute right-0 bottom-0 h-full w-1/2 flex items-end justify-center">
            <img
              src="https://via.placeholder.com/400x300/E6F0F6/333333?text=Smartwatch"
              alt="Smartwatch"
              className="h-full object-contain"
            />
          </div>
        </Card>
      </section>    
    </div>
  );
};

export default Section5;
