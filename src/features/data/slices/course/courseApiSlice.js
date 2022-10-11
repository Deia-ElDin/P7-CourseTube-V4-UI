import { apiSlice } from '../../../../app/api/apiSlice';

const courseApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Courses'],
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => 'api/v1/courses',
      providesTags: ['Courses'],
    }),
    createCourse: builder.mutation({
      query: (course) => ({
        url: 'api/v1/courses',
        method: 'POST',
        body: { ...course },
      }),
      invalidatesTags: ['Courses'],
    }),
    updateCourse: builder.mutation({
      query: (course) => ({
        url: `api/v1/courses/${course.id}`,
        method: 'PATCH',
        body: course,
      }),
      invalidatesTags: ['Courses'],
    }),
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `api/v1/courses/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Courses'],
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = courseApiSlice;
