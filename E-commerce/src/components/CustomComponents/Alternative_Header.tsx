import React, { useState } from "react";
import { Container } from "./My_ReusableComponent/ReusableComponent";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { HiOutlineBars3 } from "react-icons/hi2";
import { navLinks } from "./Header";

const Alternative_Header = () => {
  const [isopen, setIsOpen] = useState(false);
  navLinks;
  return (
    <>
      <Container className="px-4 pt-1 h-12 bg-white flex justify-between items-center">
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
        <div className="flex gap-2 justify-center items-center">
          <IoSearch size={20} />
          <HiMiniShoppingBag size={20} />
          <HiOutlineBars3
            size={20}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </Container>
      {isopen && (
        <Container
          className={`flex flex-col gap-10 fixed py-8 px-8 top-0 right-0 w-80 h-screen text-black bg-white z-10 shadow-lg transform transition-transform duration-200 ${
            isopen ? "-translate-x-85" : "translate-x-80"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              to={link.href}
              className="flex items-center font-medium uppercase text-sm hover:text-red-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </Container>
      )}
    </>
  );
};

export default Alternative_Header;
