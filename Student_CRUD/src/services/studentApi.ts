// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Student } from "@/types/students";

// Define a service using a base URL and expected endpoints
export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6891dd89447ff4f11fbe160d.mockapi.io/api/v1/",
  }),
  keepUnusedDataFor: 10,
  tagTypes: ["Student"], // <-- declare the tag type
  endpoints: (builder) => ({
    getStudens: builder.query<Student[], string>({
      query: () => `students`,
      providesTags: ["Student"], // <-- this tells RTK Query that this query is related to 'Student'
    }),
    deleteStudent: builder.mutation<void, string>({
      query: (id) => ({
        url: `students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Student"], // <-- this tells RTK Query to refetch queries tagged with 'Student'
    }),
    // PATCH - update partial student data
    patchStudent: builder.mutation<
      void,
      Partial<Omit<Student, "id" | " createdAt">> & { Id: string }
    >({
      query: ({ Id, ...patch }) => ({
        url: `students/${Id}`,
        method: "PATCH",
        body: patch,
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }),
      invalidatesTags: ["Student"],
    }),
    postStudent: builder.mutation<void, Omit<Student, "id" & "createdAt">>({
      query: (student) => ({
        url: `students`,
        method: "POST",
        body: student,
      }),
      invalidatesTags: ["Student"],
    }),
    getPeginatedStudents: builder.query<
      Student[],
      {
        page: number;
        limit: number;
        sortBy?: string;
        order?: string;
        search?: string;
      }
    >({
      query: ({ page, limit, sortBy = "id", order, search }) => ({
        url: "students",
        method: "GET",
        params: { page, limit, sortBy, order, filter: search },
      }),
    }),
    getStudentsLength: builder.query<number, void>({
      query: () => "students",
      // Transform the response to only return the array length
      transformResponse: (response: Student[]) => response.length,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetStudensQuery,
  useDeleteStudentMutation,
  usePatchStudentMutation,
  usePostStudentMutation,
  useGetPeginatedStudentsQuery,
  useGetStudentsLengthQuery,
} = studentApi;
