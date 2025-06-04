import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_API_TOKEN;
const baseUrl = 'https://api.kinopoisk.dev/';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: {
      'X-API-KEY': API_KEY,
    },
  }),
  endpoints: () => ({}),
});
