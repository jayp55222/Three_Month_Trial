import React from "react";
import { ShoppingBag, Heart, Search, Shuffle } from "lucide-react";
import type { Product } from "@/types/ProductType";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Redux-Toolkit/DataSlice/cart/cartSlice";

const IconButtons: React.FC = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  const icons = [
    {
      component: ShoppingBag,
      label: "Shopping Bag",
      onClick: () => {
        dispatch(
          addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            quantity: 1, // default add 1
          })
        );
      },
    },
    {
      component: Heart,
      label: "Heart",
      onClick: () => console.log("Add to wishlist"),
    },
    {
      component: Search,
      label: "Search",
      onClick: () => console.log("Open search"),
    },
    {
      component: Shuffle,
      label: "Shuffle",
      onClick: () => console.log("Shuffle products"),
    },
  ];

  return (
    <div className="flex flex-col items-end space-y-2 p-2">
      {icons.map((icon, index) => (
        <button
          key={index}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-200"
          aria-label={icon.label}
          onClick={icon.onClick}
        >
          <icon.component className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
};

export default IconButtons;
