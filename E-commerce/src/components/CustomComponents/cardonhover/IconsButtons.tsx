import React from "react";
import { ShoppingBag, Heart, Search, Shuffle } from "lucide-react";
import type { Product } from "@/types/ProductType";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Redux-Toolkit/DataSlice/cart/cartSlice";
import {
  addToWishlist,
  type WishlistItem,
} from "@/Redux-Toolkit/DataSlice/wishlist/wishlistSlice";
import {
  addToComparision,
  switchTrue,
} from "@/Redux-Toolkit/DataSlice/Comparison/comparisonSlice";

interface IconButtonsProps {
  cart: Product;
  wishlist: WishlistItem;
  comparison: Product;
}
const IconButtons: React.FC<IconButtonsProps> = ({
  cart,
  wishlist,
  comparison,
}) => {
  const dispatch = useDispatch();

  const icons = [
    {
      component: ShoppingBag,
      label: "Shopping Bag",
      onClick: () => {
        dispatch(
          addToCart({
            id: cart.id,
            name: cart.name,
            price: cart.price,
            img: cart.img,
            quantity: 1, // default add 1
          })
        );
      },
    },
    {
      component: Heart,
      label: "Heart",
      onClick: () => {
        dispatch(
          addToWishlist({
            id: wishlist.id,
            name: wishlist.name,
            img: wishlist.img,
            price: wishlist.price,
          })
        );
      },
    },
    {
      component: Search,
      label: "Search",
      onClick: () => console.log("Search Clicked"),
    },
    {
      component: Shuffle,
      label: "Shuffle",
      onClick: () => {
        dispatch(
          addToComparision({
            id: comparison.id,
            img: comparison.img,
            badge: comparison.badge,
            price: comparison.price,
            description: comparison.description,
            name: comparison.name,
            beforediscount: comparison.beforediscount,
            category: comparison.category,
          })
        );
        dispatch(switchTrue());
      },
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
