import { createSlice } from "@reduxjs/toolkit";

interface BooleanState {
  showform: boolean;
}

const initialState: BooleanState = {
  showform:false
};

//will use to show update form visiablity
const booleanSlice = createSlice({
  name: "booleanSlice",
  initialState,
  reducers: {
    // equivalent of setBoolean(prev => !prev)
    toggleform: (state) => {
      state.showform = !state.showform;
    },
  },
});

export const { toggleform } = booleanSlice.actions;

// export default updateformbooleanSlice.reducer;
// export named reducer to allow named imports in store
export const booleanReducer = booleanSlice.reducer;
