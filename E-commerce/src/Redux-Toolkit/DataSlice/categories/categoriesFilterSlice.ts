import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type CategoryName, type SubcategoryType } from "@/types/ProductType"; // Adjust the path to your types file

export type SortOption =
  | "Latest"
  | "Price Low"
  | "Price High"
  | "Best Selling"
  | "Best Rated";

export interface FilterState {
  category?: CategoryName | null;
  subcategory?: SubcategoryType | null;
  price?: string[];
  brands?: string[];
  sort?: SortOption | undefined;
}

const initialState: FilterState = {
  category: null,
  subcategory: null,
  price: [],
  brands: [],
  sort: undefined, // Default sort option
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string | null>) => {
      
      state.category = action.payload;
      state.subcategory = null; // Reset subcategory when category changes
    },
    setSubcategory: (state, action: PayloadAction<SubcategoryType | null>) => {
      state.subcategory = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<string[]>) => {
      // Replace the existing price array with the new one
      state.price = [...action.payload];
    },
    setBrands: (state, action: PayloadAction<string[]>) => {
      state.brands = action.payload;
    },
    setSort: (state, action: PayloadAction<SortOption>) => {
      state.sort = action.payload;
    },
    resetFilters: (state) => {
      state.category = initialState.category;
      state.subcategory = initialState.subcategory;
      state.price = initialState.price;
      state.brands = initialState.brands;
      state.sort = initialState.sort;
    },
  },
});

export const {
  setCategory,
  setSubcategory,
  setPriceRange,
  setBrands,
  setSort,
  resetFilters,
} = filterSlice.actions;

const filterReducer = filterSlice.reducer;
export default filterReducer;
