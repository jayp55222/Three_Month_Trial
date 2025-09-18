import { type Student } from "@/types/students"; // your Student interface

/**
 * Filters students array by search string
 * @param students - array of Student objects
 * @param search - string to search
 * @returns filtered array of students
 */
export function FilterStudents(students: Student[], search: string): Student[] {
  if (!search) return students; // return all if search is empty

  const searchWords = search.toLowerCase().trim();
  console.log(searchWords);

  return students.filter((student) => {
    return (
      student.firstname.toLowerCase().includes(searchWords) ||
      student.lastname.toLowerCase().includes(searchWords) ||
      student.gender.toLowerCase().includes(searchWords) ||
      student.city.toLowerCase().includes(searchWords) ||
      student.state.toLowerCase().includes(searchWords)
    );
  });
}
