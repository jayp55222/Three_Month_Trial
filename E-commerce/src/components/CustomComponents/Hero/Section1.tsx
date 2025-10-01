import { useState } from "react";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PiLessThanLight } from "react-icons/pi";
import { PiGreaterThanLight } from "react-icons/pi";
import { img } from "@/GlobalVariable";
import {
  Button,
  Container,
  Text,
} from "../My_ReusableComponent/ReusableComponent";
import './Section1.scss'

const slides = [
  {
    id: 1,
    title: "Select Headphone",
    subtitle: "UP TO 30% OFF",
    image:
      "https://emall-be87.kxcdn.com/emall/wp-content/uploads/2024/04/slider-1-electronic-01.jpg",
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "Sale 20% Off",
    subtitle: "DRONE COLLECTION",
    image:
      "https://emall-be87.kxcdn.com/emall/wp-content/uploads/2024/04/slider-2-electronic-01.jpg",
    cta: "Shop Now",
  },
];

export default function Section1({ onShopnow }: { onShopnow: () => void }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <Container
      className="Container"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      <motion.div
        key={slides[current].id}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex w-full items-center justify-center gap-16 px-8"
      >
        <div
          className={`absolute ${
            slides[current].id === 1
              ? "left-32 text-left"
              : "right-32 text-right"
          }  top-1/2 -translate-y-1/2 flex flex-col gap-4 max-w-md`}
        >
          <Text
            children={slides[current].subtitle}
            className="headphonesubtitle text-base tracking-wide uppercase text-gray-500 font-normal font-jost"
          />
          <Text
            className="headphonetitle font-jost"
            children={slides[current].title}
          />
          <Button
            className="p-0 text-base underline underline-offset-4 cursor-pointer"
            onClick={onShopnow}
          >
            {slides[current].cta}
          </Button>
        </div>
      </motion.div>

      {/* Arrows */}
      <Button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2"
        onClick={prevSlide}
      >
        <PiLessThanLight className="size-10" />
      </Button>
      <Button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2"
        onClick={nextSlide}
      >
        <PiGreaterThanLight className="size-10" />
      </Button>
    </Container>
  );
}
