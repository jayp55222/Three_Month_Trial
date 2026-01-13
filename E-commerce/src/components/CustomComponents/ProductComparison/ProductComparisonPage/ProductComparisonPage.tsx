import type { RootState } from "@/Redux-Toolkit/Store/ProductStore";
import type { Product } from "@/types/ProductType";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { removeFromComparision } from "@/Redux-Toolkit/DataSlice/Comparison/comparisonSlice";

// Reusable Product Card Component
const ProductCard: React.FC<Product> = ({
  img,
  name,
  price,
  beforediscount,
  id,
  dispatch,
}) => {
  return (
    <div className="relative p-4 border-b border-gray-200 text-center flex flex-col items-center">
      <IoMdClose
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        onClick={() => {
          dispatch(removeFromComparision({ id }));
        }}
      />

      <img src={img} alt={name} className="w-48 h-48 object-contain mb-4" />
      <h3 className="font-semibold text-lg">{name}</h3>
      <div className="flex items-center space-x-2 my-2">
        <span className="text-xl font-bold text-gray-900">${price}</span>
        {beforediscount && (
          <span className="text-gray-500 line-through">${beforediscount}</span>
        )}
      </div>
      <button className="mt-4 px-6 py-2 bg-black text-white rounded-none hover:bg-gray-800 transition-colors">
        ADD TO CART
      </button>
    </div>
  );
};

// Reusable Feature Row Component
const FeatureRow = ({ label, items }) => (
  <div className="flex border-b border-gray-200">
    <div className="w-1/4 p-4 flex items-center bg-gray-50 font-medium text-gray-700">
      {label}
    </div>
    {items.map((item, index) => (
      <div
        key={index}
        className="w-1/4 p-4 flex items-center justify-center text-gray-600"
      >
        {item}
      </div>
    ))}
  </div>
);

const ProductComparisonPage = () => {
  const { items: comparisions } = useSelector(
    (state: RootState) => state.comparision
  );
  
  
  const featuresList = [
    "description",
    "name",
    "category",
    "price",
    "beforediscount",
    "badge",
  ];

  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased p-8 font-jost">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Compare
          </h1>
          <nav className="text-sm text-gray-500">
            <span className="cursor-pointer hover:text-gray-700 transition-colors">
              Home
            </span>{" "}
            &gt; Compare
          </nav>
        </header>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex">
            <div className="w-1/4 p-4 border-b border-gray-200"></div>
            {comparisions?.map((comparision) => (
              <div key={comparision.id} className="w-1/4">
                <ProductCard
                  img={comparision.img}
                  name={comparision.name}
                  price={comparision.price}
                  beforediscount={comparision.beforediscount}
                  id={comparision.id}
                  dispatch={dispatch}
                />
              </div>
            ))}
          </div>

          {featuresList.map((feature) => (
            <div key={feature} className="flex border-b border-gray-200">
              <div className="w-1/4 p-4 flex items-center bg-gray-50 font-medium text-gray-700">
                {feature}
              </div>
              {comparisions?.map((comparision) => (
                <div
                  key={comparision.id}
                  className="w-1/4 p-4 flex items-start justify-center text-gray-600"
                >
                  {comparision[feature]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductComparisonPage;
