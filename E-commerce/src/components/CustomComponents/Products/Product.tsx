import React, { useState } from "react";
import {
  ShoppingCart,
  Heart,
  User,
  Search,
  ChevronRight,
  Star,
  Minus,
  Plus,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  X,
  CheckCircle2,
  Truck,
  LifeBuoy,
  CreditCard,
} from "lucide-react";


const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState("M");


  const products = [
    {
      name: "Sleeve Block T-Shirt",
      price: "$49.00",
      imageUrl: "https://placehold.co/300x400/E5E7EB/4B5563?text=Product+Image",
    },
    {
      name: "Men's Stripe Shirt",
      price: "$99.00",
      imageUrl: "https://placehold.co/300x400/E5E7EB/4B5563?text=Product+Image",
    },
    {
      name: "Women's Matching Set",
      price: "$75.00",
      imageUrl: "https://placehold.co/300x400/E5E7EB/4B5563?text=Product+Image",
    },
    {
      name: "Gold Bracelet",
      price: "$150.00",
      imageUrl: "https://placehold.co/300x400/E5E7EB/4B5563?text=Product+Image",
    },
  ];

  const productDetails = {
    title: "Men's Stripe Shirt",
    rating: 4.5,
    reviews: 2,
    price: 99.0,
    originalPrice: 150.0,
    description:
      "Gazelle non tellus est sed eu auctor augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et consectetur semper vitae eam risus.",
    details: [
      {
        section: "Information",
        items: [
          "Giveaway collar",
          "Fluid line stitching",
          "Chest patch pocket",
          "Drop sleeves",
        ],
      },
      { section: "Fabric", items: ["100% Cotton"] },
      { section: "Wearing", items: ["Model is 6'1 in Wearing Size M"] },
    ],
    mainImageUrl:
      "https://placehold.co/600x800/E5E7EB/4B5563?text=Main+Product+Image",
    thumbnails: [
      "https://placehold.co/100x120/E5E7EB/4B5563?text=Thumb+1",
      "https://placehold.co/100x120/E5E7EB/4B5563?text=Thumb+2",
      "https://placehold.co/100x120/E5E7EB/4B5563?text=Thumb+3",
      "https://placehold.co/100x120/E5E7EB/4B5563?text=Thumb+4",
      "https://placehold.co/100x120/E5E7EB/4B5563?text=Thumb+5",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= Math.floor(rating)
              ? "text-yellow-400 fill-current"
              : "text-gray-300"
          }`}
        />
      );
    }
    return <div className="flex">{stars}</div>;
  };

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const SectionTitle = ({ title }) => (
    <h2 className="text-2xl font-semibold text-center mt-20 mb-10">{title}</h2>
  );

  const ProductCard = ({ product }) => (
    <div className="card w-64 bg-base-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <figure>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-auto object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body p-4 text-center">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-4 sm:p-8 font-jost">
      {/* Breadcrumbs */}
      <div className="text-sm breadcrumbs py-6 text-gray-500 hidden sm:block">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Clothes</a>
          </li>
          <li>
            <a href="#">Shirt</a>
          </li>
          <li>Men's Stripe Shirt</li>
        </ul>
      </div>

      {/* Main Product Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Product Images */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <img
            src={productDetails.mainImageUrl}
            alt={productDetails.title}
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="flex gap-2 mt-4 overflow-x-auto justify-center">
            {productDetails.thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-24 object-cover rounded-lg cursor-pointer hover:border-2 border-gray-400"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-3xl font-bold mb-2">{productDetails.title}</h1>
          <div className="flex items-center gap-2 mb-4">
            {renderStars(productDetails.rating)}
            <span className="text-gray-500 text-sm">
              ({productDetails.reviews} reviews)
            </span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-semibold text-gray-900">
              ${productDetails.price.toFixed(2)}
            </span>
            <span className="text-xl text-gray-400 line-through">
              ${productDetails.originalPrice.toFixed(2)}
            </span>
          </div>
          <p className="text-gray-600 mb-6">{productDetails.description}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-semibold">3</span> people are viewing this
            right now.
          </div>

          {/* Size Selector */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Size</p>
            <div className="flex gap-2">
              {productDetails.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`btn btn-sm btn-outline rounded-full ${
                    activeSize === size ? "btn-neutral" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-full px-2">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="p-2 text-gray-500 hover:text-gray-900"
              >
                <Minus size={18} />
              </button>
              <span className="px-4 text-center font-semibold w-12">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="p-2 text-gray-500 hover:text-gray-900"
              >
                <Plus size={18} />
              </button>
            </div>
            <button className="btn btn-neutral flex-1 rounded-full text-white">
              Add to Cart
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600">
            <button className="btn btn-sm btn-ghost flex-1 rounded-full">
              <Heart size={18} /> Add to wishlist
            </button>
            <button className="btn btn-sm btn-ghost flex-1 rounded-full">
              Compare
            </button>
            <button className="btn btn-sm btn-ghost flex-1 rounded-full">
              Ask a question
            </button>
          </div>

          {/* Shipping Info */}
          <div className="mt-8 border-t border-b py-4 border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span className="text-sm text-gray-600">
                Guaranteed Safe & Secure Checkout
              </span>
            </div>
            <img
              src="https://assets.website-files.com/62e847c5d3550e56e077a941/62e84852c0e86b2457c1549e_Payment%20Providers.png"
              alt="Payment providers"
              className="h-5 mt-2"
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Truck size={16} />
              <span className="font-medium">Estimated Delivery Date:</span> 30 -
              Jun 03
            </div>
            <p className="text-xs text-gray-500 ml-6">
              Free Shipping & Returns: On all orders over $150
            </p>
          </div>

          <div className="flex items-center justify-between mt-8 text-sm">
            <span className="text-gray-600">Share:</span>
            <div className="flex gap-2">
              <a href="#">
                <Facebook
                  size={20}
                  className="text-gray-400 hover:text-gray-600"
                />
              </a>
              <a href="#">
                <Twitter
                  size={20}
                  className="text-gray-400 hover:text-gray-600"
                />
              </a>
              <a href="#">
                <Linkedin
                  size={20}
                  className="text-gray-400 hover:text-gray-600"
                />
              </a>
              <a href="#">
                <X size={20} className="text-gray-400 hover:text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Section */}
      <div className="mt-20">
        <div role="tablist" className="tabs tabs-boxed rounded-lg bg-white p-2">
          <a
            role="tab"
            className={`tab rounded-lg ${
              activeTab === "description" ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </a>
          <a
            role="tab"
            className={`tab rounded-lg ${
              activeTab === "size-guide" ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab("size-guide")}
          >
            Size Guide
          </a>
          <a
            role="tab"
            className={`tab rounded-lg ${
              activeTab === "reviews" ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({productDetails.reviews})
          </a>
        </div>

        <div className="py-8">
          {activeTab === "description" && (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-600 mb-6">
                  Gazelle non tellus est sed eu auctor augue. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Aliquam et consectetur
                  semper vitae eam risus.{" "}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Information</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {productDetails.details[0].items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Fabric</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>{productDetails.details[1].items[0]}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Wearing</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>{productDetails.details[2].items[0]}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-600">
                  Nam quam leo, interdum vel tortor in, molestie dictum orci.
                  Mauris vel quam quis odio ullamcorper pulvinar eget ac risus.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.{" "}
                </p>
              </div>
            </div>
          )}
          {activeTab === "size-guide" && (
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Size Guide</h3>
              <p className="text-gray-600">
                A detailed guide to help you find your perfect fit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          )}
          {activeTab === "reviews" && (
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(5)}
                    <span className="font-semibold">Jane Doe</span>
                  </div>
                  <p className="text-gray-600">
                    This shirt is amazing! The quality is fantastic and it fits
                    perfectly.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(4)}
                    <span className="font-semibold">John Smith</span>
                  </div>
                  <p className="text-gray-600">
                    Great shirt, but the color was slightly different than I
                    expected. Still love it!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recommended Products */}
      <SectionTitle title="You may also like..." />
      <div className="flex flex-wrap justify-center gap-6">
        {products.slice(0, 3).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Recently Viewed Products */}
      <SectionTitle title="Recently Viewed Products" />
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Footer Info Section */}
      <div className="mt-20 py-10 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <Truck size={40} className="text-gray-500 mb-2" />
          <h4 className="font-semibold">Free Shipping & Return</h4>
          <p className="text-sm text-gray-500">
            Free shipping for all orders over $150
          </p>
        </div>
        <div className="flex flex-col items-center">
          <LifeBuoy size={40} className="text-gray-500 mb-2" />
          <h4 className="font-semibold">Customer Support 24/7</h4>
          <p className="text-sm text-gray-500">
            Get a friendly support whenever you need it
          </p>
        </div>
        <div className="flex flex-col items-center">
          <CreditCard size={40} className="text-gray-500 mb-2" />
          <h4 className="font-semibold">100% Secure Payment</h4>
          <p className="text-sm text-gray-500">
            We ensure secure payment for customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
