import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/types/ProductType";
interface ComperisionState {
  items: Product[];
  compareswitch: boolean;
}

const initialState: ComperisionState = {
  items: [],
  compareswitch: false,
};

const comparisionSlice = createSlice({
  name: "comparision",
  initialState,
  reducers: {
    addToComparision: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists && state.items.length < 3) {
        state.items.push(action.payload);
      }
    },
    removeFromComparision: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      if (state.items.length === 0) {
        state.compareswitch = false;
      }
    },
    clearComperision: (state) => {
      state.items = [];
    },
    switchTrue: (state) => {
      state.compareswitch = true;
    },
    switchFalse: (state) => {
      state.compareswitch = false;
    },
  },
});

export const {
  addToComparision,
  removeFromComparision,
  clearComperision,
  switchFalse,
  switchTrue,
} = comparisionSlice.actions;

const comparisionReducer = comparisionSlice.reducer;

export default comparisionReducer;
