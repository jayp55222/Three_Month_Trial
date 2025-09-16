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
    patchStudent: builder.mutation<void, Partial<Omit<Student,"id" | " createdAt">> & { Id: string }>({
      query: ({ Id, ...patch }) => ({
        url: `students/${Id}`,
        method: "PATCH",
        body: patch,
        headers:{
          "Content-Type": "application/json",
        },
        mode:'cors'
      }),
      invalidatesTags: ["Student"],
    }),
    postStudent: builder.mutation<void,Omit<Student,"id" & "createdAt">>({
      query:(student)=>({
        url:`students`,
        method:"POST",
        body:student
      }),
      invalidatesTags:["Student"]
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetStudensQuery, useDeleteStudentMutation,usePatchStudentMutation,usePostStudentMutation } = studentApi;
