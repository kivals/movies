import Home from '@/pages/Home/Home.tsx';
import MoviePage from '@/pages/MoviePage/MoviePage.tsx';
import { createBrowserRouter } from 'react-router';
import BaseLayout from '@/layouts/BaseLayout/BaseLayout.tsx';
import { store } from '@/app/store.ts';
import { moviesApi } from '@/modules/movies/api.ts';

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
            console.log('params.id', params);
            store.dispatch(
              moviesApi.util.prefetch('getMovieById', params.movieId ?? '', {}),
            );
          });
          return null;
        },
        element: <MoviePage />,
      },
    ],
  },
]);

/*const AppRoutes = () => {
  const navigationRoutes = [
    { path: '/', element: <Home /> },
    {
      path: '/movie/:movieId',
      element: <MoviePage />,
      loader: async ({ params }: LoaderFunctionArgs) => {
        const movieId = params.movieId;
        console.log(movieId);
        return { movieId };
      },
    },
  ];
  return (
    <Routes>
      {navigationRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
          loader={route.loader}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;*/
