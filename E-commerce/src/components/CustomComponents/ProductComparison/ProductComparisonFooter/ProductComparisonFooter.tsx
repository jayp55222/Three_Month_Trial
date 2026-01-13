import {
  clearComperision,
  removeFromComparision,
  switchFalse,
} from "@/Redux-Toolkit/DataSlice/Comparison/comparisonSlice";
import type { RootState } from "@/Redux-Toolkit/Store/ProductStore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

// NOTE: This component assumes you have Tailwind CSS and daisyUI set up in your React project.

/**
 * A product comparison card component.
 * @param {object} props - Component props.
 * @param {string} props.name - The name of the product.
 * @param {string} props.price - The price of the product (e.g., "$14.00").
 * @param {string} props.imageSrc - Source URL or path for the product image.
 * @param {function} props.onRemove - Function to call when the 'X' (remove) button is clicked.
 */

const ProductCard = ({ name, price, imageSrc, id, dispatch }) => {
  return (
    // Base card container with light border and padding
    <div className="border border-gray-200 p-4 w-64 flex flex-col items-center relative">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 text-xl font-bold transition-colors"
        aria-label={`Remove ${name}`}
      >
        <IoCloseOutline
          className="cursor-pointer"
          onClick={() => dispatch(removeFromComparision({ id }))}
        />
      </button>

      <div className="w-24 h-24 bg-gray-100 mb-4 flex items-center justify-center">
        <span className="text-gray-400 text-sm">Image</span>
      </div>

      <div className="text-center">
        <Link
          to={`/product/${id}`}
          className="font-semibold text-gray-800 mb-1 hover:text-red-300"
        >
          {name}
        </Link>
        <p className="text-lg font-bold text-gray-900">${price}</p>
      </div>
    </div>
  );
};

const ProductComparisonFooter = () => {
  const dispatch = useDispatch();

  const { items: comparisonItems } = useSelector(
    (state: RootState) => state.comparision
  );

  return (
    <div className="flex w-1/2 items-start justify-center p-8 gap-4 bg-white font-jost">
      <div className="flex space-x-0 border-r gap-2 border-gray-200">
        {comparisonItems?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageSrc={product.img}
            dispatch={dispatch}
          />
        ))}
      </div>

      <div className="flex flex-col ml-0 w-64 self-stretch">
        <Link to="/comparison" className="btn btn-block bg-black text-white hover:bg-gray-800 h-20 text-xl font-semibold uppercase rounded-none border-none cursor-pointer"
        onClick={()=>dispatch(switchFalse())}
        >
          Compare
        </Link>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            className="text-sm font-semibold text-gray-900 hover:text-black uppercase tracking-wider underline underline-offset-4 cursor-pointer"
            onClick={() => {
              dispatch(clearComperision());
              dispatch(switchFalse());
            }}
          >
            Remove All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductComparisonFooter;
