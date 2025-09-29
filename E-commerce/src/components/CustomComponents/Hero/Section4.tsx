import React, { useState } from "react";
import { Card } from "@/components/ui/card"; // Import shadcn-ui Card component
import { img } from "@/GlobalVariable";
import { useGetRecent_Featured_ProductsQuery } from "@/Redux-Toolkit/ApiSlice/Product";
import { ProductCard } from "../Shop/Shop";

const Section4 = () => {
  const [isRecent, setIsRecent] = useState(true);
  const { data: recent_featured_product } = useGetRecent_Featured_ProductsQuery(
    { isRecent },
    // { refetchOnMountOrArgChange: true }
  );

  return (
    <div className="bg-gray-50 min-h-screen p-16">
      {/* Product Grid Section */}
      <section className="px-52">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 px-28">
          {recent_featured_product?.map((product, index) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section4;
