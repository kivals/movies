import Home from '@/pages/Home/Home.tsx';
import MoviePage from '@/pages/MoviePage/MoviePage.tsx';
import { createBrowserRouter } from 'react-router';
import BaseLayout from '@/layouts/BaseLayout/BaseLayout.tsx';
import { store } from '@/app/store.ts';
import { moviesApi } from '@/modules/movies/api.ts';
import SearchPage from '@/pages/SearchPage/SearchPage.tsx';

const loadStore = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(store), 0);
  });

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/movie/:movieId',
        loader: ({ params }) => {
          loadStore().then(async () => {
            store.dispatch(
              moviesApi.util.prefetch('getMovieById', params.movieId ?? '', {}),
            );
          });
          return null;
        },
        element: <MoviePage />,
      },
      {
        path: '/search/:query',
        loader: ({ params }) => {
          loadStore().then(async () => {
            store.dispatch(
              moviesApi.util.prefetch(
                'searchMovie',
                {
                  page: '1',
                  limit: '10',
                  query: params.query ?? '',
                },
                {},
              ),
            );
          });
          return null;
        },
        element: <SearchPage />,
      },
    ],
  },
]);
