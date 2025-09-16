import { createSlice } from "@reduxjs/toolkit";

interface BooleanState {
  value: boolean;
}

const initialState: BooleanState = {
  value: false,
};

//will use to show update form visiablity
const updateformbooleanSlice = createSlice({
  name: "updateformboolean",
  initialState,
  reducers: {
    // equivalent of setBoolean(prev => !prev)
    toggleforupdateform: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleforupdateform } = updateformbooleanSlice.actions;

// export default updateformbooleanSlice.reducer;
// export named reducer to allow named imports in store
export const updateformbooleanReducer = updateformbooleanSlice.reducer;
