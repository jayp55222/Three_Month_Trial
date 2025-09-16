// src/redux/studentSlice.ts
import type { Student } from "@/types/students";
import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

interface StudentState {
  editableStudent: Student | null;
}

const initialState: StudentState = {
  editableStudent: null,
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
    updateEditableStudent: (
      state,
      action: PayloadAction<Partial<Student>>
    ) => {
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
  },
});

export const {
  setEditableStudent,
  updateEditableStudent,
  clearEditableStudent,
} = studentSlice.actions;

const studentSliceReducer =studentSlice.reducer 
export default studentSliceReducer;
