// src/components/Dropdown/EditButton.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have ShadCN Button
import { UpdateStudentForm } from "./UpdateStudentForm";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";
import { toggleforupdateform } from "@/services/booleanSlice";
import type { Student } from "@/types/students";
import { setEditableStudent } from "@/services/dataSlice";
interface EditButtonProps {
  studentObj: Student; // or any data needed for the form
}

const EditButton: React.FC<EditButtonProps> = ({ studentObj }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    // inline-block
    <div className="flex justify-center items-center">
      <Button
        onClick={() => {
          dispatch(setEditableStudent(studentObj));
          dispatch(toggleforupdateform());
        }}
        className=" bg-green-500 hover:bg-green-600"
      >
        Edit
      </Button>
    </div>
  );
};

export default EditButton;
