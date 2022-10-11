import { apiSlice } from '../../../../app/api/apiSlice';

const instructorApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Instructors'],
  endpoints: (builder) => ({
    getInstructors: builder.query({
      query: () => 'api/v1/instructors',
      providesTags: ['Instructors'],
    }),
    createInstructor: builder.mutation({
      query: (instructor) => ({
        url: 'api/v1/instructors',
        method: 'POST',
        body: { ...instructor },
      }),
      invalidatesTags: ['Instructors'],
    }),
    updateInstructor: builder.mutation({
      query: (instructor) => ({
        url: `api/v1/instructors/${instructor.id}`,
        method: 'PATCH',
        body: instructor,
      }),
      invalidatesTags: ['Instructors'],
    }),
    deleteInstructor: builder.mutation({
      query: (id) => ({
        url: `api/v1/instructors/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Instructors'],
    }),
  }),
});

export const {
  useGetInstructorsQuery,
  useCreateInstructorMutation,
  useUpdateInstructorMutation,
  useDeleteInstructorMutation,
} = instructorApiSlice;
