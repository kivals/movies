import { baseApi } from '@/shared/api.ts';
import type { Movie } from '@/shared/types/movie.ts';

export const moviesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getRandomMovies: build.query<Movie, Record<string, string>>({
      query: params => ({
        url: '/movie/random',
        params,
      }),
    }),
  }),
});

export const { useGetRandomMoviesQuery } = moviesApi;
