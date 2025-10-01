import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import CartDrawer from "./Drawer/CartDrawer";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDispatch } from "react-redux";
import { setSale } from "@/Redux-Toolkit/DataSlice/categories/categoriesFilterSlice";
import "./Header.scss";
import Alternative_Header from "./Alternative_Header";

export const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SHOP", href: "/shop" },
  { name: "PRODUCTS", href: "/products" },
  { name: "BLOGS", href: "/blogs" },
  { name: "PAGES", href: "/pages" },
];

const Header = () => {
  const [isMyAccount, setIsMyAccount] = useState(false);
  const [isCart, setIsCart] = useState();
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <header className="header w-full bg-white text-gray-800 py-4 border-b border-gray-200 font-jost px-16">
        <div className="mx-auto px-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
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
          <nav className="hidden md:flex flex-grow justify-start pl-4">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    className="flex items-center font-medium uppercase text-sm hover:text-red-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-3">
            <Link
              to="/shop"
              className="text-sm font-medium specialoffer"
              onClick={() => dispatch(setSale())}
            >
              SPECIAL OFFER!
            </Link>
            <button className="text-gray-600 hover:text-red-500 transition-colors">
              <IoSearchOutline size={24} />
            </button>
            <div
              className="relative"
              // onClick={() => setIsHovering((prev) => !prev)}
            >
              <Popover open={isMyAccount} onOpenChange={setIsMyAccount}>
                <PopoverTrigger asChild>
                  <button className="text-gray-600 hover:text-red-500 transition-colors hidden md:block">
                    <CiUser size={24} />
                  </button>
                </PopoverTrigger>

                <PopoverContent className="w-56" side="bottom" align="end">
                  <Link
                    to="/MyAccount"
                    onClick={() => {
                      setIsMyAccount(false);
                    }}
                  >
                    <h4 className="font-medium leading-none">My Account</h4>
                  </Link>
                </PopoverContent>
              </Popover>

              {/* {isHovering && <Login />} */}
            </div>
            <CartDrawer
              cart={false}
              wishlist={true}
              onClick={setIsCart}
              isCart={isCart}
            />
            <CartDrawer
              cart={true}
              wishlist={false}
              onClick={setIsCart}
              isCart={isCart}
            />
          </div>
        </div>
      </header>
      <Alternative_Header />
    </>
  );
};

export default Header;
