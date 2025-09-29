import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { img } from "@/GlobalVariable";

const slides = [
  {
    id: 1,
    title: "Select Headphone",
    subtitle: "UP TO 30% OFF",
    image: "https://pixabay.com/get/g04499fc8590de8ca9f820c662b23fbe71acf93ad7541b9172f0d27dfe0cc7b936303e8ebd7a71855acf9a51676c43e6d681270d386b0a2c9b6bd09687f9c992d_1280.jpg", // place your headphone image in public folder
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "Wireless Earbuds",
    subtitle: "LIMITED OFFER",
    image: "https://pixabay.com/get/g9b1e67343a4b9097d247957e2e73bbe78bea391a8cfafaf9e86c917ab91940e120623ee7ab917100b71ab9792cca7584c1f22b61dd05c86cebcb9512093a4800_1280.jpg",
    cta: "Shop Now",
  },
];

export default function Section1( {onShopnow}: {onShopnow: () => void}) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-gray-50 overflow-hidden">
      {/* Slide */}
      <motion.div
        key={slides[current].id}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex w-full max-w-6xl items-center justify-between px-8 bg-cover bg-[url(img.jpg)]"
      >
        {/* Left Content */}
        <div className="flex flex-col gap-4 max-w-md">
          <p className="text-xs tracking-wide uppercase text-gray-500">
            {slides[current].subtitle}
          </p>
          <h1 className="text-4xl font-bold">{slides[current].title}</h1>
          <Button
            variant="link"
            className="p-0 text-base underline underline-offset-4"
            onClick={onShopnow}
          >
            {slides[current].cta}
          </Button>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 ">
          <img
            // src={slides[current].image}
            src={img}
            alt={slides[current].title}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border p-2 hover:bg-gray-100"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border p-2 hover:bg-gray-100"
      >
        →
      </button>
    </div>
  );
}
