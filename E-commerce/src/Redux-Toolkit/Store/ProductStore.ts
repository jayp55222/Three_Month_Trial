// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "../ApiSlice/Product";
import paginationReducer from "../DataSlice/Pagination/PaginationSlice";
import filterReducer from "../DataSlice/categories/categoriesFilterSlice";
import productPageReducer from "../DataSlice/ProductPage/ProductPageSlice";
import cartReducer from "../DataSlice/cart/cartSlice";
import wishlistReducer from "../DataSlice/wishlist/wishlistSlice";

export const ProductStore = configureStore({
  reducer: {
    // Add the generated reducer from the ProductApi
    [ProductApi.reducerPath]: ProductApi.reducer,
    pagination: paginationReducer,
    filter: filterReducer,
    productPage: productPageReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other useful features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof ProductStore.getState>;
export type AppDispatch = typeof ProductStore.dispatch;
