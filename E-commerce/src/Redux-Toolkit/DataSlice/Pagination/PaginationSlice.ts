// features/categoriesSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SortOption } from "@/Redux-Toolkit/DataSlice/categories/categoriesFilterSlice";

interface PaginationState {
  currentPage: number; // ✅ current page
  totalPage: number;
  order?: SortOption | undefined; // sorting order
  itemsPerPage: number; // items per page
  firstIndex: number; // index of first item in current page
  lastIndex: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  itemsPerPage: 16,
  order: undefined,
  totalPage: 10,
  firstIndex: 0,
  lastIndex: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    // ✅ update current page
    setCurrentPage: (
      state,
      action: PayloadAction<"next" | "prev" | number>
    ) => {
      if (action.payload === "next") {
        if (state.currentPage < state.totalPage) {
          state.currentPage += 1;
        }
      } else if (action.payload === "prev") {
        if (state.currentPage > 1) {
          state.currentPage -= 1;
        }
      } else {
        // direct number set
        state.currentPage = action.payload;
      }
    },

    // ✅ update total pages
    setTotalPage: (state, action: PayloadAction<number>) => {
      state.totalPage = action.payload;
    },

    // ✅ update sort order
    setOrder: (state, action: PayloadAction<SortOption | undefined>) => {
      state.order = action.payload;
    },

    // ✅ update items per page
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },

    // ✅ update first index
    setFirstIndex: (state, action: PayloadAction<number>) => {
      state.firstIndex = action.payload;
    },

    // ✅ update last index
    setLastIndex: (state, action: PayloadAction<number>) => {
      state.lastIndex = action.payload;
    },

    // ✅ reset pagination
    resetPagination: () => initialState,
  },
});

export const {
  setCurrentPage,
  setTotalPage,
  setOrder,
  setItemsPerPage,
  setFirstIndex,
  setLastIndex,
  resetPagination,
} = paginationSlice.actions;
const paginationReducer = paginationSlice.reducer;
export default paginationReducer;
