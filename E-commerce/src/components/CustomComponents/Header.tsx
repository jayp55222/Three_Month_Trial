import React, { useState } from "react";
import { Link } from "react-router";

// You would import your actual icon components here
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.125-4.312 2.72c-.417.828-1.55 1.125-2.417 0-1.077-1.125-2.73-1.125-3.807 0C3.78 6.75 2.25 9.185 2.25 11.25c0 2.235 1.573 4.14 4.09 5.865C8.25 19.344 12 21.75 12 21.75s3.75-2.406 5.66-3.635c2.517-1.725 4.09-3.63 4.09-5.865z"
    />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.5l-2.433 9.696a1.125 1.125 0 01-1.12.984H8.74c-.584 0-1.04-.46-1.12-.984L5.59 10.5h12.827z"
    />
  </svg>
);

const navLinks = [
  { name: "HOME", href: "/", hasDropdown: true },
  { name: "SHOP", href: "/shop", hasDropdown: true },
  { name: "PRODUCTS", href: "/products", hasDropdown: true },
  { name: "BLOGS", href: "/blogs", hasDropdown: true },
  { name: "PAGES", href: "/pages", hasDropdown: true },
];

const Header = () => {
  // You can manage dropdown states here if you want to make them interactive.
  // const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
                  {link.hasDropdown && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>
                {/* Example Dropdown Menu - hidden by default */}
                {/* You would make this visible on hover or click */}
                <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Sub-link 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Sub-link 2
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Icons Section */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-red-500 transition-colors">
            <SearchIcon />
          </button>
          <button className="text-gray-600 hover:text-red-500 transition-colors hidden md:block">
            <UserIcon />
          </button>
          <button className="relative text-gray-600 hover:text-red-500 transition-colors">
            <HeartIcon />
            {/* Optional badge */}
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>
          <button className="relative text-gray-600 hover:text-red-500 transition-colors">
            <ShoppingBagIcon />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
