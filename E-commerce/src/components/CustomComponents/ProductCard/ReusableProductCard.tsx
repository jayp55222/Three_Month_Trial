import { img } from "@/GlobalVariable";
import { useGetProductByIdQuery } from "@/Redux-Toolkit/ApiSlice/Product";
import {
  removeFromCart,
  updateQuantityById,
} from "@/Redux-Toolkit/DataSlice/cart/cartSlice";
import { removeFromWishlist } from "@/Redux-Toolkit/DataSlice/wishlist/wishlistSlice";
import React from "react";
import { useDispatch } from "react-redux";

// Define the shape of the data for your product card
interface ProductCardProps {
  cart: boolean;
  wishlist: boolean;
  imageSrc: string;
  productName: string;
  price: number;
  quantity?: number;
  id: string;
  availableQuantity: number;
  isCart:boolean
}

const ReusableProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  productName,
  price,
  quantity = 1,
  id,
  isCart
}) => {
        
  const { data } = useGetProductByIdQuery(id);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center p-4 bg-white rounded-md shadow-sm">
      {/* Product Image */}
      <div className="flex-shrink-0 w-24 h-24">
        <img
          // src={imageSrc}
          src={img}
          alt={productName}
          className="object-cover text-black w-full h-full"
        />
      </div>

      {/* Product Details and Controls */}
      <div className="flex-1 ml-4 text-left">
        {/* Product Name and Price */}
        <div className="mb-2">
          <h2 className="text-base text-black font-normal">{productName}</h2>
          <p className="text-gray-600">${price.toFixed(2)}</p>
        </div>

        {/* Quantity and Remove Button */}
        <div className="flex items-center justify-between gap-2">
          {isCart && (
            <div className="flex items-center border border-gray-300">
              <button
                className="p-2 text-black hover:bg-gray-100 focus:outline-none"
                onClick={() =>
                  dispatch(
                    updateQuantityById({
                      id,
                      type: "decrement",
                      availableQuantity: data?.quantity,
                    })
                  )
                }
              >
                —
              </button>
              <span className="px-2 text-gray-800">{quantity}</span>
              <button
                className="p-2 text-black hover:bg-gray-100 focus:outline-none"
                onClick={() =>
                  dispatch(
                    updateQuantityById({
                      id,
                      type: "increment",
                      availableQuantity: data?.quantity,
                    })
                  )
                }
              >
                +
              </button>
            </div>
          )}
          <button
            className="text-red-500 hover:text-red-700 focus:outline-none"
            onClick={() => {
              if (isCart) {
                dispatch(removeFromCart(id));
              } else if (!isCart) {
                dispatch(removeFromWishlist(id));
              }
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReusableProductCard;
