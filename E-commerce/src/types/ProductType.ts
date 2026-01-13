// Define and export all types at once
type CategoryName =
  | "Accessories"
  | "Beauty"
  | "Clothes"
  | "Electronic"
  | "Furniture"
  | "Jewelry"
  | "Men"
  | "Sport"
  | "Women";

type SubcategoryType =
  | "Boots"
  | "Shoes"
  | "Sunglasses"
  | "Eye"
  | "Fragrance"
  | "Hair"
  | "Lips"
  | "Nails"
  | "Skincare"
  | "Bags"
  | "Boot"
  | "Shirt"
  | "Short"
  | "Watch"
  | "Camcorder"
  | "Computers"
  | "Headphones"
  | "Laptops"
  | "Mouse"
  | "Smartphones"
  | "Smartwatches"
  | "Speaker"
  | "Televisions"
  | "Cabinet"
  | "Chair"
  | "Lighting"
  | "Sofa"
  | "Table"
  | "Bracelet"
  | "Earings"
  | "Necklaces"
  | "Rings"
  | "Accessory"
  | "Clothing"
  | "Sneakers"
  | "Sweater"
  | "Trouser"
  | "Watches"
  | "Fitness"
  | "Hats"
  | "Mens"
  | "Sneaker"
  | "Womens"
  | "Accessories"
  | "Glasses"
  | "Handbags"
  | "Leather Bag"
  | "Outfit"
  | "Sandals";

interface Category {
  name: CategoryName;
  subcategories: SubcategoryType[];
  img: string;
}

interface Product {
  id: number;
  name: string;
  img: string;
  category: string;
  subcategory: string;
  price: number;
  quantity: number;
  beforediscount: number;
  badge: string;
  description: string;
  images: string[];
  product_add_date: Date;
  isFeatured: boolean;
  isTrending: boolean;
  isBestseller: boolean;
}

export type { Product, Category, SubcategoryType, CategoryName };
