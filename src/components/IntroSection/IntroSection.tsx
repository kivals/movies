import styles from './IntroSection.module.css';
import Skeleton from '@/components/IntroSection/Skeleton.tsx';
import { useGetRandomMoviesQuery } from '@/modules/movies/api.ts';

const queryParams = {
  type: 'movie',
  year: '2025',
  'rating.kp': '8-10',
};

const IntroSection = () => {
  const { data: movie, isLoading } = useGetRandomMoviesQuery(queryParams);

  return (
    <section className={styles.intro}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <div className={styles.content}>
            <h2 className={styles.title}>Уже в кино</h2>
            <p className={styles.subtitle}>
              {movie?.name} ({movie?.year})
            </p>
            <p className={styles.description}>{movie?.description}</p>

            <button className={styles.button}>Смотреть</button>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.wrapper}>
              <img
                className={styles.image}
                src={movie?.poster.url}
                alt="Афиша"
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default IntroSection;
