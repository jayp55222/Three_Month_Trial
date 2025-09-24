import { IoCartOutline } from "react-icons/io5";
import ReusableProductCard from "../ProductCard/ReusableProductCard";
import { useSelector } from "react-redux";
import type { RootState } from "@/Redux-Toolkit/Store/ProductStore";
import type { CartState } from "@/Redux-Toolkit/DataSlice/cart/cartSlice";
import type { WishlistState } from "@/Redux-Toolkit/DataSlice/wishlist/wishlistSlice";
import { CiHeart } from "react-icons/ci";

export interface Props {
  cart?: boolean;
  wishlist?: boolean;
}

const CartDrawer = ({ cart = false, wishlist = false }: Props) => {
  let items: any[] = [];
  let totalQuantity = 0;

  if (cart) {
    const { items: cartitems, totalQuantity: carttotal } = useSelector(
      (state: RootState) => state.cart
    );
    items = cartitems;
    totalQuantity = carttotal;
  } else if (wishlist) {
    const { items: wishlistitems } = useSelector(
      (state: RootState) => state.wishlist
    );
    items = wishlistitems;
  } else {
    return null;
  }

  return (
    <div className="drawer drawer-end">
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />

      {/* Button triggers drawer */}
      <div className="drawer-content">
        <label
          htmlFor="cart-drawer"
          className="relative text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
        >
          {cart ? <IoCartOutline size={24} /> : <CiHeart size={24} />}
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {totalQuantity}
          </span>
        </label>
      </div>

      {/* Drawer content */}
      <div className="drawer-side">
        <label
          htmlFor="cart-drawer"
          className="drawer-overlay"
          aria-label="close drawer"
        ></label>
        <ul className="menu flex gap-4 bg-white text-base-content min-h-full w-80 p-4">
          {items.map((item) => (
            <ReusableProductCard
              price={item.price}
              imageSrc={item.image}
              productName={item.name}
              key={item.id}
              id={item.id}
              quantity={item.quantity}
              cart
              wishlist
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CartDrawer;
