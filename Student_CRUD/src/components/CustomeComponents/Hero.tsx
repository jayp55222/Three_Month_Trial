import React, { useMemo, useState } from "react";
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
import {
  useGetPeginatedStudentsQuery,
  useGetStudensQuery,
  useGetStudentsLengthQuery,
} from "@/services/studentApi";
import type { Student } from "@/types/students";
import { formatToIndianDate } from "@/services/dateconverter";
import { getHeaderClass } from "@/functions/DyanamicClass";
import DeleteConfirmDialog from "./DeleteConfirmDialog";
import EditButton from "./EditeButton";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { CreateButton } from "./CreateButton";
import { clearSearchQuery, setSearchQuery } from "@/services/dataSlice";
import { FilterStudents } from "@/functions/filter";

export default function Hero() {
  const [reverseboolen, setreverseboolen] = useState(false);
  const [reversearray, setReversearray] = useState([]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const limit = 10; // number of records per page

  const { data: studentList, isLoading, isSuccess } = useGetStudensQuery();
  const { data: studentListLength } = useGetStudentsLengthQuery();

  const { tabelquery } = useSelector(
    (state: RootState) => state.editablestudent
  );
  const dispatch = useDispatch();
  const totalpage = Math.ceil(studentListLength / limit);
  const tablerow: Omit<Student, "createdAt"> = {
    id: "Id",
    firstname: "Firstname",
    lastname: "Lastname",
    gender: "Gender",
    city: "City",
    state: "State",
    birthday: "Birthday",
  };

  //return Filter array on user Input
  const Filterarray = useMemo(() => {
    return FilterStudents(studentList ?? [], tabelquery);
  }, [studentList, tabelquery]);
  const { data: paginatedStudent } = useGetPeginatedStudentsQuery({
    page: page,
    limit: 10,
    order,
    search: tabelquery,
  });
  console.log(order);
  
  return (
    <Card className="w-full h-full">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <CardTitle>Students</CardTitle>
        <div className="flex items-center gap-2">
          <CreateButton />
          <Input
            placeholder="Search by name, gender or role..."
            value={tabelquery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="max-w-xs"
          />
          <Button
            onClick={() => {
              dispatch(clearSearchQuery());
            }}
            className="bg-blue-500 hover:bg-blue-700 cursor-pointer"
          >
            Reset
          </Button>
        </div>
      </CardHeader>
      <CardContent className="w-full h-full">
        <ScrollArea className="w-full h-full">
          <Table>
            <TableHeader>
              <TableRow>
                {Object.entries(tablerow).map(([key, value]) => (
                  <TableHead
                  // className={`${getHeaderClass(key)}`}
                  >
                    {value}
                    {value === "Id" && (
                      <ChevronsUpDown
                        className="inline-block w-4 h-4 ml-1 align-text-bottom cursor-pointer"
                        onClick={() => {
                          setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
                          setReversearray([...(studentList ?? [])].reverse());
                          setreverseboolen((prev) => !prev);
                        }}
                      />
                    )}
                  </TableHead>
                ))}
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(paginatedStudent
                ? paginatedStudent
                :[]
              )?.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.id}</TableCell>
                  <TableCell>{student.firstname}</TableCell>
                  <TableCell className="hidden md:inline-flex md:pt-4">
                    {student.lastname}
                  </TableCell>
                  <TableCell>{student.gender}</TableCell>
                  <TableCell>{student.city}</TableCell>
                  <TableCell>{student.state}</TableCell>
                  <TableCell className="hidden lg:block">
                    {formatToIndianDate(student.birthday)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <EditButton studentObj={student} />
                      <DeleteConfirmDialog id={student.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
        <div className="flex justify-end-safe items-center gap-4">
          <Button
            className="bg-blue-500 hover:bg-blue-600"
            onClick={() => {
              if (page > 1) {
                setPage((prev) => prev - 1);
              }
            }}
          >
            <ChevronLeft />
            Previous
          </Button>
          {page} of {totalpage}
          <Button
            className="bg-blue-500 hover:bg-blue-600"
            onClick={() => {
              if (page <= totalpage - 1) {
                setPage((prev) => prev + 1);
              }
            }}
          >
            Next
            <ChevronRight />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
