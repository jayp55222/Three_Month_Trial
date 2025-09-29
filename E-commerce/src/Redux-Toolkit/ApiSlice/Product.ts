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
        badge?: boolean;
      }
    >({
      query: ({ itemsPerPage, category, subcategory, priceArray, badge }) => {
        params.set("_limit", itemsPerPage.toString());
        if (badge) params.set("badge_ne", null);
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
    getProductByCategorie: builder.query<Product, { category: string }>({
      query: ({ category, limit = 20 }) => {
        params.set("_limit", limit.toString());
        if (category) params.set("category", category);

        return `products?${params.toString()}`;
      },
    }),
    getRecent_Featured_Products: builder.query<
      Product[],
      { isRecent: boolean }
    >({
      query: ({ isRecent }) => {
        const params = new URLSearchParams();
        if (isRecent) {
          const now = new Date();

          // 1 month ago
          const oneMonthAgo = new Date(now);
          oneMonthAgo.setMonth(now.getMonth() - 1);

          // +1 hour
          const oneHourLater = new Date(now);
          oneHourLater.setHours(now.getHours() + 1);

          params.set("product_add_date_gte", oneMonthAgo.toISOString());
          params.set("product_add_date_lte", oneHourLater.toISOString());
          params.set("isFeatured", "false");
        } else {
          params.set("isFeatured", "true");
        }
        return `products?${params.toString()}`;
      },
    }),
    getsale_trending_bestseller_productus: builder.query<Product[]>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          // Fetch products separately
          const res1 = await fetchWithBQ("products?beforediscount_ne=null&_limit=10");
          const res2 = await fetchWithBQ("products?isTrending_ne=null&_limit=10");
          const res3 = await fetchWithBQ("products?isBestseller_ne=null&_limit=10");

          if (res1.error || res2.error || res3.error) {
            return { error: res1.error || res2.error || res3.error };
          }

          // Merge results & remove duplicates by id
          const merged = [...res1.data, ...res2.data, ...res3.data].filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.id === item.id)
          );

          return { data: merged };
        } catch (error) {
          console.log(error);

          return { error };
        }
      },
    }),
  }),
});

export const {
  useGetProductCategoriesQuery,
  useGetFourProductsQuery,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductByCategorieQuery,
  useGetRecent_Featured_ProductsQuery,
  useGetsale_trending_bestseller_productusQuery
} = ProductApi;
