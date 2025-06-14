import { Link } from 'react-router';
import BackArrow from '@/assets/images/svg/back-arrow.svg?react';
import MovieInfo from '@/components/MovieInfo/MovieInfo.tsx';
import { useGetMovieByIdQuery } from '@/modules/movies/api.ts';
import { useParams } from 'react-router-dom';
import Skeleton from '@/components/MovieInfo/Skeleton.tsx';

import styles from './MoviePage.module.css';

const MoviePage = () => {
  const { movieId } = useParams<{ movieId: string }>();

  const { data: movie, isLoading } = useGetMovieByIdQuery(movieId ?? '');
  return (
    <>
      <div className={styles.back}>
        <Link className={styles.link} to="/">
          <BackArrow /> Вернуться на главную
        </Link>
      </div>
      {isLoading ? (
        <Skeleton />
      ) : movie ? (
        <MovieInfo movie={movie} />
      ) : (
        <p>Данные о фильме не были получены</p>
      )}
    </>
  );
};

export default MoviePage;
