type SortOption =
  | "Latest"
  | "Price Low"
  | "Price High"
  | "Best Selling"
  | "Best Rated";

import type { Product } from "@/types/ProductType";

const getSortFunction = (sort: SortOption | undefined) => {
  switch (sort) {
    case "Price Low":
      return (a: Product, b: Product) => a.price - b.price;
    case "Price High":
      return (a: Product, b: Product) => b.price - a.price;
    case "Best Selling":
      return (a: Product) => a.isBestseller === true;
    default:
      return () => 0;
  }
};
export { getSortFunction };
