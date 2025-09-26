import { img } from "@/GlobalVariable";
import React from "react";
// Assuming your shadcn-ui components are in "@/components/ui"
// import { Card } from "@/components/ui/card"; // Uncomment if you have shadcn Card

// Fallback for Card if shadcn-ui Card is not available or preferred not to be used
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={`bg-white ${className}`}>{children}</div>;

// Reusable Button component for "Shop Now"
const ShopNowButton: React.FC<{ className?: string }> = ({ className }) => (
  <button
    className={`bg-black text-white text-sm font-semibold px-6 py-3 hover:bg-gray-800 transition-colors ${className}`}
  >
    SHOP NOW
  </button>
);

const PromotionalBanners: React.FC = () => {
  return (
    <div className="h-[500px] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4 font-jost">
      {/* Top Left Banner: Smartwatch */}
      <Card className="relative  min-h-[300px] bg-cover bg-[url('img.jpg')] flex items-center p-8 overflow-hidden col-span-1">
        <div className="relative z-10 text-center md:text-left flex flex-col justify-center items-center md:items-start w-1/2">
          <span className="text-sm text-gray-600 mb-2 font-medium">
            EXCLUSIVE COUPON
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Top Electronic Deals
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            SAVE UP TO $199 OFF, GET CHANCE!
          </p>
          <ShopNowButton />
        </div>
        <div className="absolute right-10 bottom-0 top-0 h-full flex items-center justify-end w-1/2">
          {/* Placeholder for Smartwatch Image */}
          <img
            src={img}
            alt="Smartwatch Mockup"
            className="h-full object-contain -mr-8" // Adjusted for visual match
          />
        </div>
      </Card>

      {/* Right Column */}
      <div className="grid grid-rows-2 gap-4 col-span-1">
        {/* Top Right Banner: Laptop */}
        <Card className="relative bg-cover bg-[url('img.jpg')] min-h-[150px] flex items-center p-6 overflow-hidden">
          <div className="relative z-10 w-1/2 pr-4">
            <span className="text-xs text-gray-600 font-medium">
              STARTING FROM $399.99
            </span>
            <h3 className="text-2xl font-bold mt-1 mb-3">Up To 30% Off</h3>
            <ShopNowButton className="px-4 py-2 text-xs" />
          </div>
          <div className="absolute right-0 top-0 bottom-0 h-full flex items-center justify-end w-1/2">
            {/* Placeholder for Laptop Image */}
            <img
              src="https://pixabay.com/get/g912441249de5d4c78ea135c01f009c521f6ba4b32528a2927cb7e8b8094c471d82adb0238e76ff92ee9feff78746fecdc8a9f49698b53ecb1d79813947570d71_1280.jpg"
              alt="Laptop"
              className="h-full object-contain -mr-8" // Adjusted for visual match
            />
          </div>
        </Card>

        {/* Bottom Right Banners: Airpods & Speaker */}
        <div className="grid grid-cols-2 gap-4">
          {/* Airpods */}
          <Card className="relative bg-cover bg-[url('img.jpg')] min-h-[150px] flex flex-col justify-end p-4 text-center overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center -mt-8">
              <p className="text-sm text-gray-700 mb-2">For Accessories</p>
              <img
                src={img}
                alt="Airpods"
                className="max-h-24 object-contain"
              />
            </div>
            <div className="relative z-10 mt-auto">
              {" "}
              {/* Ensures text is at the bottom */}
              
              <ShopNowButton className="px-4 py-2 text-xs" />
            </div>
          </Card>

          {/* Wireless Speaker */}
          <Card className="relative bg-cover bg-[url('img.jpg')] min-h-[150px] flex flex-col justify-end p-4 text-center overflow-hidden">
            <div className="absolute top-4 right-4 text-right z-10">
              <span className="text-xs text-red-500 font-semibold">
                EXTRA 50% OFF
              </span>
              <h4 className="text-lg font-bold">Wireless Speaker</h4>
            </div>
            <div className="absolute inset-0 flex items-center justify-center mb-2">
              {" "}
              {/* Adjusted position */}
              {/* Placeholder for Wireless Speaker Image */}
              <img
                src={img}
                alt="Wireless Speaker"
                className="max-h-24 object-contain"
              />
            </div>
            <div className="relative z-10 mt-auto">
              <ShopNowButton className="px-4 py-2 text-xs" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanners;
