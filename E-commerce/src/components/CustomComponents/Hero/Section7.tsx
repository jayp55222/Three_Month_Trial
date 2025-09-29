import { img } from "@/GlobalVariable";
import { useGetsale_trending_bestseller_productusQuery } from "@/Redux-Toolkit/ApiSlice/Product";
import type { Product } from "@/types/ProductType";
import React from "react";
import { useNavigate } from "react-router-dom";

// Reusable Product Card Component

const productSections = [
  {
    title: "ON SALE PRODUCTS",
    filter: (p: Product) => p.beforediscount !== null,
  },
  {
    title: "TRENDING PRODUCTS",
    filter: (p: Product) =>
      p.isTrending === true && p.beforediscount === undefined,
  },
  {
    title: "BEST SELLERS",
    filter: (p: Product) => p.isBestseller === true && p.isFeatured === false,
  },
];

interface ProductCardProps {
  imageSrc: string;
  name: string;
  currentPrice: number;
  oldPrice?: number; // Optional for sale items
  id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  name,
  currentPrice,
  oldPrice,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center space-x-4 mb-6">
      <div
        className="flex-shrink-0 w-36 h-44 bg-cover bg-[url('img.jpg')] flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={() => {
          navigate(`/product/${id}`);
        }}
      >
        <img
          src={img}
          alt={name}
          className="max-w-[80%] max-h-[80%] object-contain"
        />
      </div>
      <div className="pl-4">
        <h4
          className="text-sm font-base text-gray-800 line-clamp-2 cursor-pointer hover:text-red-400"
          onClick={() => {
            navigate(`/product/${id}`);
          }}
        >
          {name}
        </h4>
        <div className="flex items-baseline space-x-2 mt-1">
          <span className="text-base font-normal text-gray-900">
            ${currentPrice}
          </span>
          {oldPrice && (
            <span className="text-sm font-normal text-gray-500 line-through">
              ${oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

type ProductColumnProps = {
  title: string;
  products: Product[];
};

const ProductColumn: React.FC<ProductColumnProps> = ({ title, products }) => {
  return (
    <div className="text-left">
      <h3 className="text-xl text-gray-800 mb-6 pb-2 font-light">{title}</h3>
      {products.slice(0, 3).map((product, index) => (
        <ProductCard
          key={`${title.toLowerCase().replace(/\s+/g, "-")}-${index}`}
          imageSrc={product.imageSrc}
          name={product.name}
          currentPrice={product.price}
          oldPrice={product.beforediscount}
          id={product.id}
        />
      ))}
    </div>
  );
};

const Section7: React.FC = () => {
  const { data: sale_trending_bestseller_data } =
    useGetsale_trending_bestseller_productusQuery();

  return (
    <>
      <div className="flex justify-center mt-8 text-left gap-32">
        {productSections.map(({ title, filter }) => (
          <ProductColumn
            key={title}
            title={title}
            products={sale_trending_bestseller_data?.filter(filter) || []}
          />
        ))}
      </div>
    </>
  );
};

export default Section7;
