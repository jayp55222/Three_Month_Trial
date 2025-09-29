import { Card } from "@/components/ui/card";
import { img } from "@/GlobalVariable";
import { useGetProductCategoriesQuery } from "@/Redux-Toolkit/ApiSlice/Product";
import { setCategory } from "@/Redux-Toolkit/DataSlice/categories/categoriesFilterSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Section2: React.FC = () => {
  const { data: categories } = useGetProductCategoriesQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {/* Categories Section */}
      <section className="mb-12">
        <div className="w-full flex p-4 gap-4 no-scrollbar justify-center">
          <div className="flex w-1/2 overflow-x-auto gap-11 ">
            {categories?.map((category, index) => (
              <Card
                key={index}
                className="w-48 h-64 bg-cover bg-[url('img.jpg')] flex-shrink-0 flex flex-col rounded-none justify-between items-center p-4 cursor-pointer"
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
                <span className="text-sm font-medium text-gray-700">
                  {category.name}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
