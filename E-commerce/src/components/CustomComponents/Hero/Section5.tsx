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
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 font-jost">
      {/* Main Promotional Banner Section */}
      <section className="min-h-80 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card className="relative bg-[#EFEBE2] bg-[url('https://emall-be87.kxcdn.com/emall/wp-content/uploads/2024/04/banner-5-electronic-01.jpg')] p-8 flex items-start justify-center overflow-hidden rounded-none text-left">
          <div className="relative z-10 flex flex-col">
            <span className="text-base font-normal text-gray-600 mb-2">
              FLASH SALE 50% OFF
            </span>
            <h2 className="text-4xl font-normal leading-tight">
              Wireless Earphone
            </h2>
            <button className="bg-black text-white text-sm font-semibold px-6 py-3 hover:bg-gray-800 transition-colors mt-4 w-fit">
              SHOP NOW
            </button>
          </div>
        </Card>

        <Card className="relative w-full bg-[#E5EEF3] bg-[url('https://emall-be87.kxcdn.com/emall/wp-content/uploads/2024/04/banner-6-electronic-01.jpg')] bg-right bg-no-repeat p-8 flex items-start justify-center overflow-hidden rounded-none text-left">
          <div className="relative z-10 flex flex-col">
            <span className="text-base font-normal text-gray-600 mb-2">
              SEASON COLLECTION
            </span>
            <h2 className="text-4xl font-normal leading-tight">Up to 30% Off</h2>
            <button className="bg-black text-white text-sm font-semibold px-6 py-3 hover:bg-gray-800 transition-colors mt-4 w-fit">
              SHOP NOW
            </button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Section5;
