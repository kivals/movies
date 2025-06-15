import { baseApi } from '@/shared/api.ts';
import type { Movie, MoviesResponse } from '@/shared/types/movie.ts';

export const moviesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getRandomMovies: build.query<Movie, Record<string, string>>({
      query: params => ({
        url: '/v1.4/movie/random',
        params,
      }),
    }),
    getMovies: build.query<MoviesResponse, Record<string, string>>({
      query: params => ({
        url: '/v1.4/movie',
        params,
      }),
    }),
    getMovieById: build.query<Movie, string>({
      query: movieId => ({
        url: `/v1.4/movie/${movieId}`,
      }),
    }),
    searchMovie: build.query<
      MoviesResponse,
      Record<string, string | number | undefined>
    >({
      query: params => ({
        url: '/v1.4/movie/search',
        params,
      }),
    }),
  }),
});

export const {
  useGetRandomMoviesQuery,
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useSearchMovieQuery,
} = moviesApi;
