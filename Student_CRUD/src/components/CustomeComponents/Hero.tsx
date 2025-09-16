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
import { MoreHorizontal, ChevronsUpDown } from "lucide-react";
import { useGetStudensQuery } from "@/services/studentApi";
import type { Student } from "@/types/students";
import { formatToIndianDate } from "@/services/dateconverter";
import { getHeaderClass } from "@/functions/DyanamicClass";
import DeleteConfirmDialog from "./DeleteConfirmDialog";
import EditButton from "./EditeButton";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
};

const sampleData: User[] = [
  {
    id: "1",
    name: "Asha Patel",
    email: "asha@example.com",
    role: "Admin",
    createdAt: "2025-08-01",
  },
  {
    id: "2",
    name: "Ravi Kumar",
    email: "ravi@example.com",
    role: "Editor",
    createdAt: "2025-07-12",
  },
  {
    id: "3",
    name: "Nina Verma",
    email: "nina@example.com",
    role: "Viewer",
    createdAt: "2025-05-22",
  },
  {
    id: "4",
    name: "Karan Mehta",
    email: "karan@example.com",
    role: "Editor",
    createdAt: "2025-04-18",
  },
  {
    id: "5",
    name: "Priya Singh",
    email: "priya@example.com",
    role: "Viewer",
    createdAt: "2025-02-11",
  },
];

export default function Hero() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 3;
  const [sortField, setSortField] = useState<keyof Student | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const { data: studentList, isLoading, isSuccess } = useGetStudensQuery();
  const editeobj = useSelector((state:RootState)=> state.editablestudent.editableStudent)
  console.log(editeobj);
  

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = sampleData.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.role.toLowerCase().includes(q)
    );

    if (sortField) {
      out = out.slice().sort((a, b) => {
        const va = String(a[sortField]).toLowerCase();
        const vb = String(b[sortField]).toLowerCase();
        if (va === vb) return 0;
        if (sortDir === "asc") return va > vb ? 1 : -1;
        return va < vb ? 1 : -1;
      });
    }

    return out;
  }, [query, sortField, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  function toggleSort(field: keyof Student) {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("asc");
    }
    setPage(1);
  }

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
    <Card className="w-full h-full">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <CardTitle>Users</CardTitle>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search by name, email or role..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            className="max-w-xs"
          />
          <Button
            onClick={() => {
              setQuery("");
              setSortField(null);
              setSortDir("asc");
              setPage(1);
            }}
            className="bg-blue-500 hover:bg-blue-700 cursor-pointer"
          >
            Reset
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <Table>
            <TableHeader>
              <TableRow>
                {Object.entries(tablerow).map(([key, value]) => (
                  <TableHead
                    // className={`${getHeaderClass(key)}`}
                    onClick={() => toggleSort(key)}
                  >
                    {value}
                    <ChevronsUpDown className="inline-block w-4 h-4 ml-1 align-text-bottom" />
                  </TableHead>
                ))}
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentList?.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.id}</TableCell>
                  <TableCell>{student.firstname}</TableCell>
                  <TableCell className="hidden md:inline">
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

              {paged.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5}>
                    <div className="py-6 text-center text-sm text-muted-foreground">
                      No results found.
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {Math.min((page - 1) * pageSize + 1, filtered.length)} -{" "}
            {Math.min(page * pageSize, filtered.length)} of {filtered.length}
          </div>

          <div className="flex items-center gap-2">
            <Button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Prev
            </Button>
            <div className="text-sm">
              Page {page} of {totalPages}
            </div>
            <Button
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
