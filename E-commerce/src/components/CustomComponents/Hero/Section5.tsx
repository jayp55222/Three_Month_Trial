import React from "react";
import { Card } from "@/components/ui/card";
import { Button, Text } from "../My_ReusableComponent/ReusableComponent";

const Section5 = ({ onShopnow }) => {
  return (
    <div className="min-h-[400px] p-4 md:p-8 font-jost">
      <section className="min-h-80 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card className="relative bg-[#EFEBE2] bg-[url('https://emall-be87.kxcdn.com/emall/wp-content/uploads/2024/04/banner-5-electronic-01.jpg')] p-8 flex items-start justify-center overflow-hidden rounded-none text-left">
          <div className="relative z-10 flex flex-col">
            <Text className="text-base font-normal text-gray-600 mb-2">
              FLASH SALE 50% OFF
            </Text>
            <Text className="text-4xl font-normal leading-tight">
              {" "}
              Wireless Earphone
            </Text>
            <Button
              className="bg-black text-white text-sm font-semibold px-6 py-3 hover:bg-gray-800 transition-colors mt-4 w-fit"
              onClick={onShopnow}
            >
              SHOP NOW
            </Button>
          </div>
        </Card>

        <Card className="relative w-full bg-[#E5EEF3] bg-[url('https://emall-be87.kxcdn.com/emall/wp-content/uploads/2024/04/banner-6-electronic-01.jpg')] bg-right bg-no-repeat p-8 flex items-start justify-center overflow-hidden rounded-none text-left">
          <div className="relative z-10 flex flex-col">
            <Text className="text-base font-normal text-gray-600 mb-2">
              SEASON COLLECTION
            </Text>
            <Text className="text-4xl font-normal leading-tight">
              Up to 30% Off
            </Text>
            <Button
              className="bg-black text-white text-sm font-semibold px-6 py-3 hover:bg-gray-800 transition-colors mt-4 w-fit"
              onClick={onShopnow}
            >
              SHOP NOW
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Section5;
