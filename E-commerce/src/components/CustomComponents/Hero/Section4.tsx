import React, { useState } from "react";
import { img } from "@/GlobalVariable";
import { useGetRecent_Featured_ProductsQuery } from "@/Redux-Toolkit/ApiSlice/Product";
import { ProductCard } from "../Shop/Shop";
import { Container } from "../My_ReusableComponent/ReusableComponent";
import "./Section4.scss";

const Section4 = () => {
  const [isRecent, setIsRecent] = useState(true);
  const { data: recent_featured_product } = useGetRecent_Featured_ProductsQuery(
    { isRecent },
    // { refetchOnMountOrArgChange: true }
  );

  return (
    <Container className="min-h-screen p-14 mx-auto">
      {/* Product Grid Section */}
      <Container className="px-auto">
        <div className="mb-6 flex justify-center space-x-8">
          <h3
            className="text-2xl font-normal border-b-2 border-black pb-1 cursor-pointer"
            onClick={() => setIsRecent(true)}
          >
            RECENT PRODUCTS
          </h3>
          <h3
            className="text-2xl font-normal text-gray-500 cursor-pointer"
            onClick={() => setIsRecent(false)}
          >
            FEATURED PRODUCTS
          </h3>
        </div>
        <Container className="grid-container">
          {recent_featured_product?.map((product, index) => (
            <ProductCard product={product} />
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default Section4;
