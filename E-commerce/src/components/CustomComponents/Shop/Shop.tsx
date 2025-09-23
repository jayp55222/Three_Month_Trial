import * as React from "react";
// import { useGetProductreact } from "CategoriesQuery";
import {
  useGetAllProductsQuery,
  useGetProductCategoriesQuery,
} from "@/Redux-Toolkit/ApiSlice/Product";
import type { Product } from "@/types/ProductType";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setPriceRange,
  setSubcategory,
} from "@/Redux-Toolkit/DataSlice/categories/categoriesFilterSlice";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { RootState } from "@/Redux-Toolkit/Store/ProductStore";
import {
  Select,
  SelectLabel,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { getPaginationIndexes } from "@/functions/getPaginationIndexes";
import IconButtons from "../cardonhover/IconsButtons";
import { setCurrentPage } from "@/Redux-Toolkit/DataSlice/Pagination/PaginationSlice";

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
const Filter = () => (
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
    <path d="M22 17H2" />
    <path d="M22 12H2" />
    <path d="M22 7H2" />
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
const Grid2X2 = () => (
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
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 12h18" />
    <path d="M12 3v18" />
  </svg>
);
const Square = () => (
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
    <rect width="18" height="18" x="3" y="3" rx="2" />
  </svg>
);
const List = () => (
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
    <line x1="8" x2="21" y1="6" y2="6" />
    <line x1="8" x2="21" y1="12" y2="12" />
    <line x1="8" x2="21" y1="18" y2="18" />
    <line x1="3" x2="3.01" y1="6" y2="6" />
    <line x1="3" x2="3.01" y1="12" y2="12" />
    <line x1="3" x2="3.01" y1="18" y2="18" />
  </svg>
);

// Mock data to populate the UI
const priceOptions = [
  { id: "price-all", label: "All" },
  { id: "price-100", label: "0 - 100" },
  { id: "price-300", label: "100.00 - 299.00" },
  { id: "price-500", label: "300.00 - 499.00" },
  { id: "price-999", label: "500.00 - 999.00" },
  { id: "price-4999", label: "1,000.00 - 4,999.00" },
  { id: "price-over", label: "4,999.00 & Over" },
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

const colors = [
  "bg-red-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-teal-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-pink-500",
  "bg-gray-500",
  "bg-black",
  "bg-white border border-gray-300",
  "bg-fuchsia-500",
  "bg-lime-500",
  "bg-rose-500",
  "bg-emerald-500",
  "bg-cyan-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-slate-500",
  "bg-zinc-500",
  "bg-neutral-500",
  "bg-stone-500",
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
const products = [
  {
    name: "T-Shirt With Printed",
    price: 25.0,
    salePrice: 20.0,
    sale: true,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: "-20%",
  },
  {
    name: "Sweatshirt With Printed",
    price: 150.0,
    salePrice: 120.0,
    sale: true,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: "-20%",
  },
  {
    name: "Leather Shoulder Bag",
    price: 150.0,
    salePrice: 100.0,
    sale: true,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: "-33%",
  },
  {
    name: "Tie Shoulder Cami",
    price: 69.0,
    salePrice: null,
    sale: false,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: null,
  },
  {
    name: "Blue Short T-Shirt",
    price: 40.0,
    salePrice: null,
    sale: false,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: null,
  },
  {
    name: "Long Sleeve Shirt",
    price: 49.0,
    salePrice: 39.0,
    sale: true,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: "-20%",
  },
  {
    name: "Essential Basic T-Shirt",
    price: 29.0,
    salePrice: 20.0,
    sale: true,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: "-30%",
  },
  {
    name: "Rounded Brown Sunglasses",
    price: 99.0,
    salePrice: 110.0,
    sale: false,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: "-10%",
  },
  {
    name: "Slim Fit Trousers",
    price: 49.0,
    salePrice: null,
    sale: false,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: null,
  },
  {
    name: "Tank Top T-Shirt",
    price: 39.0,
    salePrice: 29.0,
    sale: true,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: "-25%",
  },
  {
    name: "Men's Casual Shirt",
    price: 45.0,
    salePrice: 20.0,
    sale: true,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: "-55%",
  },
  {
    name: "Fitted Crop T-shirt",
    price: 49.0,
    salePrice: 35.0,
    sale: true,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: "-29%",
  },
  {
    name: "Sleeve Back T-Shirt",
    price: 80.0,
    salePrice: 60.0,
    sale: true,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: "-25%",
  },
  {
    name: "Tie It High Heeled",
    price: 89.0,
    salePrice: 69.0,
    sale: true,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: "-22%",
  },
  {
    name: "Women's Short Dress",
    price: 109.0,
    salePrice: null,
    sale: false,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: null,
  },
  {
    name: "Men's Jacket",
    price: 119.0,
    salePrice: null,
    sale: false,
    image: "https://placehold.co/300x400/F2F2F2/737373?text=Product+Image",
    badge: null,
  },
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

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative">
    {product.badge && (
      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
        {product.badge}
      </div>
    )}
    <IconButtons />
    <img
      src={product.img}
      alt={product.name}
      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="p-4 bg-white">
      <h3 className="text-sm font-medium text-zinc-900 line-clamp-2 min-h-[3rem]">
        {product.name}
      </h3>
      <div className="flex items-center mt-2 space-x-2">
        {product.salePrice && (
          <span className="text-zinc-900 font-semibold">
            ${product.salePrice.toFixed(2)}
          </span>
        )}
        {product.price && (
          <span
            className={`text-zinc-400 ${
              product.salePrice ? "line-through" : "font-semibold"
            }`}
          >
            ${product.price.toFixed(2)}
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
  const { data: allProducts } = useGetAllProductsQuery(itemsPerPage.toString());
  const dispatch = useDispatch();

  const { category, subcategory, price } = useSelector(
    (state: RootState) => state.filter
  );

  // React.useEffect(() => {
  //   getPaginationIndexes(currentPage, itemsPerPage, dispatch);
  // }, [itemsPerPage]);

  return (
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
                <h2 className="text-lg font-bold">Categories</h2>
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
                <h2 className="text-lg font-bold">Price</h2>
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

              {/* Filter By Color */}
              {/* <div>
                <h2 className="text-lg font-bold">Filter By Color</h2>
                <div className="mt-4 grid grid-cols-6 gap-2">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-6 h-6 rounded-full cursor-pointer border-2 border-transparent hover:border-zinc-900 transition-colors ${color}`}
                    />
                  ))}
                </div>
              </div> */}

              {/* Brands */}
              <div className="bg-white max-w-sm mx-auto my-8">
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
                <h2 className="text-lg font-bold">Size</h2>
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
                <h2 className="text-lg font-bold">Tags</h2>
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
                <h2 className="text-lg font-bold">Average Rating</h2>
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
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Fruits</SelectLabel> */}
                      {shortoption.map((option) => (
                        <SelectItem
                          key={option}
                          value={option.toLowerCase().replace(" ", "-")}
                        >
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
                    <Checkbox id="toggle" />
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
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allProducts
                ?.slice(1, 16)
                .map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
            </div>

            {/* Pagination */}
            <Pagination />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
