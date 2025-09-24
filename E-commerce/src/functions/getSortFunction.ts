type SortOption =
  | "Latest"
  | "Price Low"
  | "Price High"
  | "Best Selling"
  | "Best Rated";

import type { Product } from "@/types/ProductType";
const parsePrice = (price: string) => Number(price.replace(/,/g, ''));

const getSortFunction = (sort: SortOption | undefined) => {
  switch (sort) {
    case "Price Low":
      return (a: Product, b: Product) => parsePrice(a.price) - parsePrice(b.price);
    case "Price High":
      return (a: Product, b: Product) => parsePrice(b.price) - parsePrice(a.price);
    default:
      return () => 0;
  }
};
export { getSortFunction };
