import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/contacts';
const BASE_URL = 'https://640c97f0a3e07380e8f861f7.mockapi.io';

export const contactApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: ({ name, phone }) => ({
        url: API_ENDPOINT,
        method: 'POST',
        body: { name, phone },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `${API_ENDPOINT}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactApi;
