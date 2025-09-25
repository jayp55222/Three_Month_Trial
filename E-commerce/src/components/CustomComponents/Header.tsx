import { Link } from "react-router";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import CartDrawer from "./Drawer/CartDrawer";
import { useSelector } from "react-redux";
import type { RootState } from "@/Redux-Toolkit/Store/ProductStore";
import { useState } from "react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SHOP", href: "/shop" },
  { name: "PRODUCTS", href: "/products" },
  { name: "BLOGS", href: "/blogs" },
  { name: "PAGES", href: "/pages" },
];

const Header = () => {
  const [isCart, setIsCart] = useState();

  return (
    <header className="w-full bg-white text-gray-800 py-4 border-b border-gray-200 font-jost">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2">
            {/* Replace with your actual logo component or image */}
            <div className="w-10 h-10 border border-gray-800 flex items-center justify-center">
              <img
                src="https://emall-be87.kxcdn.com/emall/wp-content/themes/emall/images/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className="flex items-center font-semibold uppercase text-sm hover:text-red-500 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Icons Section */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-red-500 transition-colors">
            <IoSearchOutline size={24} />
          </button>
          <button className="text-gray-600 hover:text-red-500 transition-colors hidden md:block">
            <CiUser size={24} />
          </button>

          <CartDrawer cart={false} wishlist={true} onClick={setIsCart}  isCart={isCart}/>
          <CartDrawer cart={true} wishlist={false} onClick={setIsCart} isCart={isCart}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
