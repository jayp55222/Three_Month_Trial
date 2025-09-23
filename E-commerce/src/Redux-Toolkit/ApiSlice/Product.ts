// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Category, Product } from "@/types/ProductType";
import { Backend_URL } from "@/GlobalVariable";

// Define a service using a base URL and expected endpoints
export const ProductApi = createApi({
  reducerPath: "ProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: Backend_URL || "" }),
  endpoints: (builder) => ({
    getProductCategories: builder.query<Category[], string>({
      query: () => `categories`,
    }),
    getFourProducts: builder.query<Product[], string>({
      query: () => `products?_limit=4`,
    }),
    getAllProducts: builder.query<Product[], { itemsPerPage: number; category?: string | null; subcategory?: string | null }>({
      query: ({ itemsPerPage, category, subcategory }) => {
    const params = new URLSearchParams();
    params.set("_limit", itemsPerPage.toString());

    if (category) params.set("category", category);
    if (subcategory) params.set("subcategory", subcategory);

    return `products?${params.toString()}`;
  },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductCategoriesQuery,
  useGetFourProductsQuery,
  useGetAllProductsQuery,
} = ProductApi;
