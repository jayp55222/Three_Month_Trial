import { Card } from "@/components/ui/card";
import { img } from "@/GlobalVariable";
import { useGetProductCategoriesQuery } from "@/Redux-Toolkit/ApiSlice/Product";
import { setCategory } from "@/Redux-Toolkit/DataSlice/categories/categoriesFilterSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "../My_ReusableComponent/ReusableComponent";

const Section2: React.FC = () => {
  const { data: categories } = useGetProductCategoriesQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Container className="relative flex justify-center w-full h-72 bg-white">
        <Container className="absolute -top-9 px-7 pt-7 bg-white flex w-4/5 overflow-x-auto gap-11">
          {categories?.map((category, index) => (
              <Card
                key={index}
                className="w-72 h-72 bg-cover bg-[#F7F7F7] flex-shrink-0 flex flex-col rounded-none justify-between items-center p-4 cursor-pointer hover:border-1 hover:border-black"
                onClick={() => {
                  dispatch(setCategory(category.name));
                  navigate('/shop')
                }}
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="h-full object-contain"
                />
                <span className="text-sm font-medium font-jost text-gray-700">
                  {category.name}
                </span>
              </Card>
            ))}
        </Container>
      </Container>
    </>
  );
};

export default Section2;
