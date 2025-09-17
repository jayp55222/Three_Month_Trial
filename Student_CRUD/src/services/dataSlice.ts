// src/redux/studentSlice.ts
import type { Student } from "@/types/students";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface StudentState {
  editableStudent: Student | null;
  tabelquery: string | undefined;
}

const initialState: StudentState = {
  editableStudent: null,
  tabelquery: undefined,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    // Set the whole student object to edit
    setEditableStudent: (state, action: PayloadAction<Student>) => {
      state.editableStudent = action.payload;
    },

    // Update only specific fields
    updateEditableStudent: (state, action: PayloadAction<Partial<Student>>) => {
      if (state.editableStudent) {
        state.editableStudent = {
          ...state.editableStudent,
          ...action.payload,
        };
      }
    },

    // Clear after saving or canceling
    clearEditableStudent: (state) => {
      state.editableStudent = null;
    },

    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.tabelquery = action.payload;
    },
    clearSearchQuery: (state) => {
      state.tabelquery = "";
    },
  },
});

export const {
  setEditableStudent,
  updateEditableStudent,
  clearEditableStudent,
  setSearchQuery,
  clearSearchQuery,
} = studentSlice.actions;

const studentSliceReducer = studentSlice.reducer;
export default studentSliceReducer;
