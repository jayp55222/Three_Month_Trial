import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Section1 = () => {
  return (
    <section>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="bg-orange-100 font-jost">
            <div className="flex gap-10 items-center h-full">
              <img
                src="https://img.faballey.com/images/Product/ISK00761Z/d3.jpg"
                alt=""
              />
              <div className="flex flex-col gap-12 text-start ml-8">
                <span>Season Fashion Deals</span>
                <span className="text-7xl">Women Fashion </span>
                <span className="text-7xl">30% Off</span>
                <button className="bg-black text-white py-2 px-4 max-w-48">
                  Shop Now
                </button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="bg-pink-100">
            <div className="flex gap-10 items-center h-full">
              <img
                src="https://miracle-boutique-collections.myshopify.com/cdn/shop/products/2247_320x.jpg"
                alt=""
              />
              <div className="flex flex-col gap-12 text-start ml-8">
                <span>Season Fashion Deals</span>
                <span className="text-7xl">Women Fashion </span>
                <span className="text-7xl">30% Off</span>
                <button className="bg-black text-white py-2 px-4 max-w-48">
                  Shop Now
                </button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Section1;
