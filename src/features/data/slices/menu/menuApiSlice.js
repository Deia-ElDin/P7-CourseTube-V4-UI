import { apiSlice } from '../../../../app/api/apiSlice';

const menuApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Logos'],
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => 'api/v1/menu',
      providesTags: ['Logos'],
    }),
    createLogo: builder.mutation({
      query: (logo) => ({
        url: 'api/v1/menu',
        method: 'POST',
        body: { ...logo },
      }),
      invalidatesTags: ['Logos'],
    }),
    updateLogo: builder.mutation({
      query: (logo) => ({
        url: `api/v1/menu/${logo.id}`,
        method: 'PATCH',
        body: logo,
      }),
      invalidatesTags: ['Logos'],
    }),
    deleteLogo: builder.mutation({
      query: (id) => ({
        url: `api/v1/menu/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Logos'],
    }),
  }),
});

export const {
  useGetMenuQuery,
  useCreateLogoMutation,
  useUpdateLogoMutation,
  useDeleteLogoMutation,
} = menuApiSlice;
