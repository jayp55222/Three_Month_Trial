// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Category, Product } from "@/types/ProductType";
import { Backend_URL } from "@/GlobalVariable";
import { buildPriceQuery } from "@/functions/buildPriceQuery";

const params = new URLSearchParams();
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
    getAllProducts: builder.query<
      Product[],
      {
        itemsPerPage: string;
        category?: string | null;
        subcategory?: string | null;
        priceArray?: string[];
      }
    >({
      query: ({ itemsPerPage, category, subcategory, priceArray }) => {
        params.set("_limit", itemsPerPage.toString());

        if (category) params.set("category", category);
        if (subcategory) params.set("subcategory", subcategory);
        if (priceArray && priceArray.length > 0) {
          const priceQuery = buildPriceQuery(priceArray);
          if (priceQuery) {
            priceQuery.split("&").forEach((param) => {
              const [key, value] = param.split("=");
              params.append(key, value);
            });
          }
        }

        return `products?${params.toString()}`;
      },
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
    getProductByCategorie: builder.query<Product, {category:string}>({
      query: ({ category, limit = 20 }) => {
        params.set("_limit", limit.toString());
        if (category) params.set("category", category);

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
  useGetProductByIdQuery,
  useGetProductByCategorieQuery,
} = ProductApi;
