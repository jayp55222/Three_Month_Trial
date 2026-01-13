// src/redux/studentSlice.ts
import type { Student } from "@/types/students";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface StudentState {
  editableStudent: Student | null;
  tabelquery?: string;
  studentListState: Student[];
  currentpage: number; // ✅ current page
  totalPage: number;
  order: "asc" | "desc";
  limit: number; // items per page
  firstIndex: number; // index of first item in current page
  lastIndex: number;
}

const initialState: StudentState = {
  editableStudent: null,
  tabelquery: "",
  studentListState: [],
  currentpage: 1,
  totalPage: 1,
  order: "asc",
  limit: 10,
  firstIndex: 0,
  lastIndex: 10,
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

    setTableQuery: (state, action: PayloadAction<string>) => {
      state.tabelquery = action.payload;
    },
    clearTableQuery: (state) => {
      state.tabelquery = "";
    },

    //use to set studentList for filter and sorting
    setStudents: (state, action: PayloadAction<Student[]>) => {
      state.studentListState = action.payload;
    },
    // add one student
    addStudent: (state, action: PayloadAction<Student>) => {
      state.studentListState.push(action.payload);
    },
    // remove one student
    removeStudent: (state, action: PayloadAction<string>) => {
      state.studentListState = state.studentListState.filter(
        (student) => student.id !== action.payload
      );
    },
    // update one student
    updateStudent: (state, action: PayloadAction<Student>) => {
      const index = state.studentListState.findIndex(
        (s) => s.id === action.payload.id
      );
      if (index !== -1) {
        state.studentListState[index] = action.payload;
      }
    },
    setPaginationdata: (state, action: PayloadAction<number>) => {
      state.currentpage = action.payload;
      state.lastIndex = state.currentpage * state.limit;
      state.firstIndex = state.lastIndex - state.limit;
    },
    setPage: (state, action: PayloadAction<"increment" | "decrement">) => {
      if (action.payload === "increment" && state.currentpage < state.totalPage) {
        state.currentpage += 1;
      } else if (action.payload === "decrement" && state.currentpage > 1) {
        state.currentpage -= 1;
      }
      state.lastIndex = state.currentpage * state.limit;
      state.firstIndex = state.lastIndex - state.limit;
    },
    setTotalPage: (state, action: PayloadAction<number>) => {
      state.totalPage = action.payload;
    },
    toggleOrder: (state) => {
      state.order = state.order === "asc" ? "desc" : "asc";
    },
  },
});

export const {
  setEditableStudent,
  updateEditableStudent,
  clearEditableStudent,
  setTableQuery,
  clearTableQuery,
  setStudents,
  addStudent,
  removeStudent,
  updateStudent,
  setPage,
  setTotalPage,
  toggleOrder,
  setPaginationdata,
} = studentSlice.actions;

const studentSliceReducer = studentSlice.reducer;
export default studentSliceReducer;
