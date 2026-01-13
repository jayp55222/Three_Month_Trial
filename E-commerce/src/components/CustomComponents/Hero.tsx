import React from "react";
import Section1 from "./Hero/Section1";
import Section2 from "./Hero/Section2";
import Section3 from "./Hero/Section3";
import Section4 from "./Hero/Section4";
import Section5 from "./Hero/Section5";
import Section6 from "./Hero/Section6";
import Section7 from "./Hero/Section7";
import Section8 from "./Hero/Section8";
import Section9 from "./Hero/Section9";
import { useDispatch } from "react-redux";
import { setCategory } from "@/Redux-Toolkit/DataSlice/categories/categoriesFilterSlice";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onShopnow = () => {
    dispatch(setCategory("Electronic"));
    navigate("/shop");
  };

  return (
    <>
      <Section1 onShopnow={onShopnow} />
      <Section2 />
      <Section3 onShopnow={onShopnow} />
      <Section4 />
      <Section5 onShopnow={onShopnow} />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </>
  );
};

export default Hero;
