import {type Student} from '@/types/students' // your Student interface

/**
 * Filters students array by search string
 * @param students - array of Student objects
 * @param search - string to search
 * @returns filtered array of students
 */
export function filterStudents(students: Student[], search: string): Student[] {
  if (!search || !search.trim()) return students // return all if search is empty

  const searchWords = search.toLowerCase().split("")
  console.log(searchWords);
  

  return students.filter((student) => {
    const valuesToSearch = [
      student.firstname,
      student.gender,
      student.city,
      student.state,
    ].map((v) => v.toLowerCase()) // lowercase for case-insensitive search

    // Check if ANY word matches ANY of the fields
    return searchWords.every((word) =>
      valuesToSearch.some((field) => field.includes(word))
    )
  })
}
