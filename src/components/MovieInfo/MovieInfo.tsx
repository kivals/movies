import { prepareUserRating } from '@/shared/utils/user-rating.ts';
import type { Movie } from '@/shared/types/movie.ts';

import styles from './MovieInfo.module.css';

interface Props {
  movie: Movie;
}

const MovieInfo = ({ movie }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={movie.poster.url} alt="" />
      </div>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>{movie.name}</h1>
        </div>
        <p className={styles.description}>{movie.description}</p>
        <div className={styles.about}>
          <h2>О фильме</h2>
          <div className={styles.info}>
            <div>Жанр:</div>
            <div>{movie.genres.map(genre => genre?.name ?? '').join(', ')}</div>
            <div>Страна:</div>
            <div>
              {movie.countries.map(country => country?.name ?? '').join(', ')}
            </div>
            <div>Год:</div>
            <div>{movie.year}</div>
            <div>Режиссер:</div>
            <div>
              {movie.persons
                .filter(({ enProfession }) => enProfession === 'director')
                .map(person => person.name)
                .join(', ') || ' - '}
            </div>
            <div>В ролях:</div>
            <div>
              {movie.persons
                .filter(({ enProfession }) => enProfession === 'actor')
                .map(person => person.name)
                .join(', ') || ' - '}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rating}>
        Кинопоиск
        <span> {prepareUserRating(movie.rating.kp)}</span>
      </div>
    </div>
  );
};

export default MovieInfo;
