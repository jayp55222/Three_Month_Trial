import React, { useEffect } from "react";
// Shadcn-style imports (assumes you have these components scaffolded in your project)
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { ScrollArea } from "../ui/scroll-area";
import {
  MoreHorizontal,
  ChevronsUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useGetStudentsQuery } from "@/services/studentApi";
import type { Student } from "@/types/students";
import { formatToIndianDate } from "@/services/dateconverter";
import { getHeaderClass } from "@/functions/DyanamicClass";
import DeleteConfirmDialog from "./DeleteConfirmDialog";
import EditButton from "./EditeButton";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { CreateButton } from "./CreateButton";
import {
  clearTableQuery,
  setPage,
  setStudents,
  setTableQuery,
  setPaginationdata,
  setTotalPage,
  toggleOrder,
} from "@/services/dataSlice";
import { filterAndSortStudents } from "@/functions/filter";

export default function Hero() {
  const dispatch = useDispatch();

  const { data: studentList, isLoading, isSuccess } = useGetStudentsQuery();
  const {
    studentListState,
    tabelquery,
    currentpage,
    totalPage,
    order,
    lastIndex,
    firstIndex,
    limit,
  } = useSelector((state: RootState) => state.editablestudent);

  // Initialize students and pagination
  useEffect(() => {
    if (isSuccess && studentList) {
      dispatch(setStudents(studentList));
      const totalPages = Math.ceil(studentList.length / limit);
      dispatch(setTotalPage(totalPages));
      dispatch(setPaginationdata(1));
    }
  }, [isSuccess, studentList, dispatch, limit]);

  // Handle filtering and sorting
  useEffect(() => {
    if (studentList) {
      filterAndSortStudents({
        students: studentList,
        filter: tabelquery,
        dispatch: dispatch,
        pageSize: limit,
        firstIndex,
        lastIndex,
      });
    }
  }, [studentList, tabelquery, order, dispatch, limit]);

  // Reset to page 1 when search query changes
  useEffect(() => {
    if (tabelquery !== undefined) {
      dispatch(setPaginationdata(1));
    }
  }, [tabelquery, dispatch]);

  const tablerow: Omit<Student, "createdAt"> = {
    id: "Id",
    firstname: "Firstname",
    lastname: "Lastname",
    gender: "Gender",
    city: "City",
    state: "State",
    birthday: "Birthday",
  };

  return (
    <Card className="w-full h-[95%]">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <CardTitle>Students</CardTitle>
        <div className="flex items-center gap-2">
          <CreateButton />
          <Input
            placeholder="Search by name, gender or role..."
            value={tabelquery}
            onChange={(e) => dispatch(setTableQuery(e.target.value))}
            className="max-w-xs"
          />
          <Button
            onClick={() => {
              dispatch(clearTableQuery());
            }}
            className="bg-blue-500 hover:bg-blue-700 cursor-pointer"
          >
            Reset
          </Button>
        </div>
      </CardHeader>
      <CardContent className="w-full h-11/12">
        <ScrollArea className="w-full h-full py-8">
          <Table>
            <TableHeader>
              <TableRow>
                {Object.entries(tablerow).map(([key, value]) => (
                  <TableHead key={key} className={`${getHeaderClass(key)}`}>
                    {value}
                    {value === "Id" && (
                      <ChevronsUpDown
                        className="inline-block w-4 h-4 ml-1 align-text-bottom cursor-pointer"
                        onClick={() => dispatch(toggleOrder())}
                      />
                    )}
                  </TableHead>
                ))}
                <TableHead className="table-cell">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(studentListState ? studentListState : [])
                ?.slice(firstIndex, lastIndex)
                .sort((a, b) =>
                  order === "asc"
                    ? Number(a.id) - Number(b.id)
                    : Number(b.id) - Number(a.id)
                )
                .map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium hidden md:table-cell">{student.id}</TableCell>
                    <TableCell>{student.firstname}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      {student.lastname}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{student.gender}</TableCell>
                    <TableCell className="hidden sm:table-cell">{student.city}</TableCell>
                    <TableCell>{student.state}</TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {formatToIndianDate(student.birthday)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 sm:flex-col md:flex-row">
                        <EditButton studentObj={student} />
                        <DeleteConfirmDialog id={student.id} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
      <div className="flex justify-end-safe items-center gap-4 mr-8">
        <Button
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => dispatch(setPage("decrement"))}
          disabled={currentpage <= 1}
        >
          <ChevronLeft />
          Previous
        </Button>
        <span className="text-sm">
          Page {currentpage} of {totalPage}
        </span>
        <Button
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => dispatch(setPage("increment"))}
          disabled={currentpage >= totalPage}
        >
          Next
          <ChevronRight />
        </Button>
      </div>
    </Card>
  );
}
