import React, { useState } from "react";
import {
  useGetAllProductsQuery,
  useGetProductCategoriesQuery,
} from "@/Redux-Toolkit/ApiSlice/Product";
import type { Product } from "@/types/ProductType";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setPriceRange,
  setSale,
  setSort,
  setSubcategory,
} from "@/Redux-Toolkit/DataSlice/categories/categoriesFilterSlice";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { RootState } from "@/Redux-Toolkit/Store/ProductStore";
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import IconButtons from "../cardonhover/IconsButtons";
import { setCurrentPage } from "@/Redux-Toolkit/DataSlice/Pagination/PaginationSlice";
import { getSortFunction } from "@/functions/getSortFunction";
import { Link } from "react-router-dom";
import { img } from "@/GlobalVariable";

// Icons from Lucide for React, commonly used with Shadcn
const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Star = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={fill ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Mock data to populate the UI
const priceOptions = [
  { id: "price-all", label: "All" },
  { id: "price-100", label: "0 - 100" },
  { id: "price-300", label: "100 - 299" },
  { id: "price-500", label: "300 - 499" },
  { id: "price-999", label: "500 - 999" },
  { id: "price-4999", label: "1,000 - 4,999" },
  { id: "price-over", label: "4,999 & Over" },
];
const brands = [
  {
    name: "Acer",
  },
  {
    name: "Addias",
  },
  {
    name: "Apple",
  },
  {
    name: "Ashley",
  },
  {
    name: "Asics",
  },
  {
    name: "ASUS",
  },
  {
    name: "Bassett",
  },
  {
    name: "Biotique",
  },
  {
    name: "Burrow",
  },
  {
    name: "Cartier",
  },
  {
    name: "Castlery",
  },
  {
    name: "Celine",
  },
  {
    name: "Chopard",
  },
  {
    name: "Dell",
  },
  {
    name: "Estee Lauder",
  },
  {
    name: "Fendi",
  },
  {
    name: "Fila",
  },
  {
    name: "Fusion",
  },
  {
    name: "GAP",
  },
  {
    name: "GRAFF",
  },
  {
    name: "H&M",
  },
  {
    name: "HNI",
  },
  {
    name: "HP",
  },
  {
    name: "IKEA",
  },
  {
    name: "Intel",
  },
  {
    name: "JBL",
  },
  {
    name: "Kappa",
  },
  {
    name: "Lacoste",
  },
  {
    name: "Lenovo",
  },
  {
    name: "Levi's",
  },
  {
    name: "Lo'real",
  },
  {
    name: "Lotus",
  },
  {
    name: "Marshall",
  },
  {
    name: "Maybelline",
  },
  {
    name: "MLB",
  },
  {
    name: "NARS",
  },
  {
    name: "New Balance",
  },
  {
    name: "Nike",
  },
  {
    name: "Olay",
  },
  {
    name: "PANDORA",
  },
  {
    name: "Puma",
  },
  {
    name: "SK-II",
  },
  {
    name: "TheNorthFace",
  },
  {
    name: "Uniqlo",
  },
  {
    name: "Valentino",
  },
  {
    name: "Vichy",
  },
  {
    name: "Zara",
  },
];

const sizes = [
  { name: "S" },
  { name: "M" },
  { name: "L" },
  { name: "XL" },
  { name: "XXL" },
];

const tags = [
  "Accessories",
  "Chairs",
  "Cosmetics",
  "Electronics",
  "Fashion",
  "Furniture",
  "Laptop",
  "Luxury",
  "New Arrivals",
  "PC gaming",
  "Ring",
  "Sportswear",
  "Smartwatches",
  "Table",
  "T-shirt",
  "Travel",
  "Trousers",
  "Watches",
];

const shortoption = [
  "Latest",
  "Price Low",
  "Price High",
  "Best Selling",
  "Best Rated",
];

const Pagination = () => (
  <nav className="flex items-center justify-end space-x-2 py-8 text-sm">
    <Button
      className="bg-blue-500 text-white hover:bg-blue-600"
      onClick={() => {
        setCurrentPage("previous");
      }}
    >
      Previous
    </Button>
    <Button
      className="bg-blue-500 text-white hover:bg-blue-600"
      onClick={() => {
        setCurrentPage("next");
      }}
    >
      Next
    </Button>
  </nav>
);

const Rating = ({ rating, count, checked, onChange }) => (
  <div className="flex items-center justify-between py-1 text-sm font-medium text-zinc-600">
    <label
      htmlFor={`rating-${rating}`}
      className="flex items-center space-x-2 cursor-pointer"
    >
      <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center">
        {checked && <div className="w-2 h-2 rounded-sm bg-zinc-900" />}
      </div>
      <div className="flex items-center space-x-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} fill={i < rating} />
        ))}
        <span>& Up</span>
      </div>
    </label>
    <span className="text-zinc-400">({count})</span>
  </div>
);

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  ...divProps
}) => (
  <div
    {...divProps}
    className="min-h-96 w-64 flex flex-col gap-2 group overflow-hidden transition-all duration-300 cursor-pointer relative"
  >
    {product.badge && (
      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-2 py-1 z-10">
        {product.badge}
      </div>
    )}
    {/* IconButtons visible only on hover */}
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
      <IconButtons cart={product} wishlist={product} comparison={product} />
    </div>
    <Link key={product.id} to={`/product/${product.id}`}>
      <img
        src={img}
        alt={product.name}
        className="w-full h-64 object-center transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
    <div className="p-4 bg-white">
      <h3 className="text-base font-normal text-zinc-900 line-clamp-2 min-h-[1rem]">
        {product.name}
      </h3>
      <div className="flex items-center mt-2 space-x-2 justify-center">
        {product.price && (
          <span className="text-zinc-900 font-normal">
            ${product.price.toFixed(2)}
          </span>
        )}
        {product.price && (
          <span
            className={`text-zinc-400 text-sm ${
              product.beforediscount ? "line-through" : "font-normal"
            }`}
          >
            {product.beforediscount !== null && "$"}
            {Number.isInteger(product.beforediscount)
              ? product.beforediscount
              : product.beforediscount?.toFixed(2)}
          </span>
        )}
      </div>
    </div>
  </div>
);

const Shop = () => {

  const { data: categories } = useGetProductCategoriesQuery();
  const { itemsPerPage, firstIndex, lastIndex, currentPage } = useSelector(
    (state: RootState) => state.pagination
  );

  const { category, subcategory, price, sort,sale } = useSelector(
    (state: RootState) => state.filter
  );
  const { data: allProducts,refetch } = useGetAllProductsQuery({
    itemsPerPage: itemsPerPage.toString(),
    category: category,
    subcategory: subcategory,
    priceArray: price,
    badge: sale,
  });
  const dispatch = useDispatch();

  return (
    <>
      <div className="antialiased text-zinc-900 bg-white font-jost">
        {/* Tailwind CSS CDN, using the JIT engine for on-the-fly compilation */}
        <script src="https://cdn.tailwindcss.com"></script>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Navigation Header */}
          <div className="flex items-center justify-between py-4 border-b border-zinc-200">
            <div className="flex items-center space-x-4 text-sm font-medium text-zinc-400">
              <a href="#" className="hover:text-zinc-900 transition-colors">
                Home
              </a>
              <span className="text-zinc-300">/</span>
              <span className="text-zinc-900 font-semibold">Shop</span>
            </div>
            <h1 className="text-2xl font-bold">Shop</h1>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row mt-8 gap-10">
            {/* Left Sidebar Filters */}
            <aside className="w-full lg:w-1/4 xl:w-1/5 flex-shrink-0">
              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h2 className="text-lg font-bold text-left">Categories</h2>
                  <ul className="mt-4 space-y-2">
                    {categories?.map((cat, index) => (
                      <div key={index} className="collapse mb-2 text-left">
                        <input
                          type="checkbox"
                          value={cat.name}
                          id={`collapse-${index}`}
                          onClick={() => dispatch(setCategory(cat.name))}
                        />
                        <div className="collapse-title font-normal cursor-pointer p-0">
                          {cat.name}
                        </div>
                        <div className="collapse-content">
                          <ul className="list-disc list-inside space-y-1 ">
                            {cat.subcategories?.map((sub, subIndex) => (
                              <li
                                key={subIndex}
                                className="list-none text-center cursor-pointer hover:text-zinc-900 transition-colors text-left"
                                onClick={() => dispatch(setSubcategory(sub))}
                              >
                                {sub}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>

                {/* Price Filter */}
                <div>
                  <h2 className="text-lg font-bold text-left">Price</h2>
                  <div className="mt-4 space-y-2 text-sm text-zinc-600">
                    {priceOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center space-x-2 pt-4 coursor-pointer"
                      >
                        <Checkbox
                          id={`price-${option.id}`}
                          checked={price.includes(option.label)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              dispatch(setPriceRange([...price, option.label]));
                            } else {
                              dispatch(
                                setPriceRange(
                                  price.filter((p) => p !== option.label)
                                )
                              );
                            }
                          }}
                        />

                        <Label htmlFor={`price-${option.id}`}>
                          ${option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="bg-white max-w-sm mx-auto my-8 text-left">
                  <h2 className="text-lg font-bold text-gray-800">Brands</h2>
                  {/* The scrollable list container */}
                  <ul className="mt-4 space-y-2 max-h-64 overflow-y-auto">
                    {brands.map((brand, index) => (
                      <div
                        key={brand.name}
                        className="flex items-center space-x-2 pt-4"
                      >
                        <Checkbox id="toggle" />
                        <Label htmlFor="toggle">{brand.name}</Label>
                      </div>
                    ))}
                  </ul>
                </div>

                {/* Size */}
                <div>
                  <h2 className="text-lg font-bold text-left">Size</h2>
                  <ul className="mt-4 space-y-2">
                    {sizes.map((size, index) => (
                      <div
                        key={size.name}
                        className="flex items-center space-x-2 pt-4"
                      >
                        <Checkbox id="toggle" />
                        <Label htmlFor="toggle">{size.name}</Label>
                      </div>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div>
                  <h2 className="text-lg font-bold text-left">Tags</h2>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-zinc-100 text-zinc-600 text-xs px-3 py-1.5 rounded-full cursor-pointer hover:bg-zinc-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Average Rating */}
                <div>
                  <h2 className="text-lg font-bold text-left">
                    Average Rating
                  </h2>
                  <ul className="mt-4 space-y-2">
                    <Rating rating={5} />
                    <Rating rating={4} />
                    <Rating rating={3} />
                    <Rating rating={2} />
                    <Rating rating={1} />
                  </ul>
                </div>
              </div>
            </aside>

            {/* Right Main Content */}
            <main className="flex-1">
              {/* Sort & View Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-zinc-200">
                <div className="flex items-center space-x-2 text-sm font-medium">
                  <span className="text-zinc-600">Sort by:</span>
                  <Select
                    onValueChange={(value) => {
                      // ✅ here you’ll get the value
                      dispatch(setSort(value));
                    }}
                  >
                    <SelectTrigger className="w-[180px] rounded-none">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      <SelectGroup>
                        {shortoption.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center mt-4 sm:mt-0 space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center gap-2">
                      <Checkbox
                      checked={sale}
                        id="toggle"
                        onClick={() => {
                          dispatch(setSale());
                          refetch();
                        }}
                      />
                      <Label htmlFor="toggle">Show only products on sale</Label>
                    </div>
                    <span className="text-zinc-600">Show:</span>
                    <div className="flex items-center space-x-1 cursor-pointer">
                      <span>24</span>
                      <ChevronDown />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {allProducts
                  ?.slice(0, 15)
                  .sort(getSortFunction(sort))
                  .map((product) => (
                    <ProductCard product={product} />
                  ))}
              </div>

              {/* Pagination */}
              <Pagination />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
