import { img } from "@/GlobalVariable";
import React from "react";
import {
  Button,
  Container,
  Text,
} from "../My_ReusableComponent/ReusableComponent";
import "./Section3.scss";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={`bg-white ${className}`}>{children}</div>;

interface ShopNowButtonProps {
  onShopnow: () => void;
  className?: string;
}

// Reusable Button component for "Shop Now"
const ShopNowButton: React.FC<ShopNowButtonProps> = ({
  onShopnow,
  className,
}) => (
  <button
    className={`bg-black text-white text-sm font-semibold px-6 py-3 hover:bg-gray-800 transition-colors ${className}`}
    onClick={onShopnow}
  >
    SHOP NOW
  </button>
);

const PromotionalBanners = ({ onShopnow }) => {
  return (
    <Container className="h-[700px] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 font-jost">
      {/* Top Left Banner: Smartwatch */}
      <Card className="relative min-h-[300px] bg-cover flex items-center overflow-hidden col-span-1">
        <div className="absolute inset-0">
          <div
            className="banner"
          ></div>
        </div>
        <Container className="h-auto z-10 flex flex-col justify-end w-full md:w-1/2 ml-auto mr-8 md:text-left items-center md:items-start">
          <Text className="w-full text-sm font-normal leading-5 text-gray-600 mb-2 text-right">
            EXCLUSIVE COUPON
          </Text>
          <Text className="w-full text-5xl font-normal mb-4 leading-tight text-black text-right">
            Top Electronic Deals
          </Text>
          <Text className="w-full text-sm text-gray-700 mb-6 md:text-gray-700 text-right">
            SAVE UP TO $199 OFF, GET CHANCE!
          </Text>

          <div className="w-full flex justify-end">
            <Button
              className="bg-black text-white text-sm font-semibold uppercase px-6 py-3 hover:bg-gray-800 transition-colors text-left font-jost"
              onClick={onShopnow}
            >
              Shop Now
            </Button>
          </div>
        </Container>
      </Card>

      {/* Right Column */}
      <div className="grid grid-rows-2 col-span-1">
        {/* Top Right Banner: Laptop */}
        <Card className="relative bg-cover min-h-[150px] flex items-center p-6 overflow-hidden">
          <div className="relative z-10 pl-4 text-left">
            <span className="text-sm font-normal leading-5 text-gray-600">
              STARTING FROM $399.99
            </span>
            <h3 className="text-5xl font-normal mt-1 mb-3">Up To 30% Off</h3>
            <Button
              className="bg-black w-32 h-8 flex justify-center px-4 py-2 text-xs text-white font-semibold uppercase hover:bg-gray-800 transition-colors text-left font-jost"
              onClick={onShopnow}
            >
              Shop Now
            </Button>
          </div>
          <div className="absolute inset-0">
            <div
              className="h-full w-full bg-[url('https://emall-be87.kxcdn.com/emall/wp-content/uploads/2024/06/banner-2-mobile-electronic-01.jpg')] bg-cover bg-center 
                 transform transition-transform duration-300 hover:scale-105"
            ></div>
          </div>
        </Card>

        {/* Bottom Right Banners: Airpods & Speaker */}
        <div className="grid grid-cols-2">
          {/* Airpods */}
          <Card className="relative min-h-[150px] flex flex-col justify-end p-4 text-center overflow-hidden">
            <div className="relative z-10 flex flex-col items-center top-16 justify-center -mt-8">
              <p className="text-3xl font-normal leading-5 text-white mb-2">
                For Accessories
              </p>
            </div>
            <div
              className="absolute inset-0 bg-cover bg-center 
               bg-[url('https://emall-be87.kxcdn.com/emall/wp-content/uploads/2024/04/banner-3-electronic-01.jpg')] transform transition-transform duration-300 hover:scale-105"
            ></div>

            <div className="relative flex justify-center z-10 mt-auto">
              {" "}
              <Button
                className="bg-black flex items-center w-28 h-10 text-center px-4 py-2 text-xs text-white font-semibold uppercase hover:bg-gray-800 transition-colors font-jost"
                onClick={onShopnow}
              >
                Shop Now
              </Button>
            </div>
          </Card>

          {/* Wireless Speaker */}
          <Card className="relative min-h-[150px] flex flex-col justify-end p-4 text-center overflow-hidden">
            <div className="absolute top-4 right-4 text-right z-10">
              <span className="text-sm font-normal leading-5 ">
                EXTRA 50% OFF
              </span>
              <h4 className="text-3xl font-normal">Wireless Speaker</h4>
            </div>
            <div className="absolute inset-0 bg-cover bg-center bg-[url('https://emall-be87.kxcdn.com/emall/wp-content/uploads/2024/04/banner-4-electronic-01.jpg')] transform transition-transform duration-300 hover:scale-105"></div>
            <div className="relative z-10 mt-auto">
              <Button
                className="bg-black flex items-center w-28 h-10 text-center px-4 py-2 text-xs text-white font-semibold uppercase hover:bg-gray-800 transition-colors font-jost"
                onClick={onShopnow}
              >
                Shop Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default PromotionalBanners;
