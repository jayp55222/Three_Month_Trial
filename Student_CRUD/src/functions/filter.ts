/**
 * Filters, sorts, and paginates a list of students, then updates state.
 *
 * @param {Student[]} students - The full list of students to filter and sort.
 * @param {string} filter - The search string to match against student fields (firstname, lastname, city, state, gender).
 * @param {number} pageSize - The number of students to display per page (used for total page calculation).
 * @param {"asc" | "desc"} order - Sorting order for the students based on their `id` field.
 * @param {(data: Student[]) => void} setFilteredStudents - State setter function to update the filtered student list.
 * @param {(pages: number) => void} setTotalPages - State setter function to update the total number of pages.
 */
import { type Student } from "../types/students";
import { setStudents, setTotalPage } from "@/services/dataSlice";

interface FilterParams {
  students: Student[];
  filter?: string; // optional
  pageSize: number;
  dispatch: any; // Redux dispatch type
  firstIndex: number;
  lastIndex: number;
}

function filterAndSortStudents({
  students,
  filter,
  pageSize,
  dispatch,
}: FilterParams) {
  let result = [...students];

  // 1. Apply filter if provided
  if (filter && filter.trim() !== "") {
    const search = filter.toLowerCase();
    result = students.filter((student) =>
      [
        student.firstname,
        student.lastname,
        student.city,
        student.state,
        student.gender,
      ].some((field) => field.toLowerCase().includes(search))
    );
  }

  // 3. Set filtered data and recalculate total pages
  dispatch(setStudents(result));
  const totalPages = Math.ceil(result.length / pageSize);
  dispatch(setTotalPage(totalPages));
}

export { filterAndSortStudents };
