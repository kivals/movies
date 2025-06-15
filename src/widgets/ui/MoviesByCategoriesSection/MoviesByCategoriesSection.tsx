import SelectGroup from '@/widgets/ui/SelectGroup/SelectGroup.tsx';
import MoviesGrid from '@/widgets/ui/MoviesGrid/MoviesGrid.tsx';
import { useAppSelector } from '@/app/store.ts';
import { useGetMoviesQuery } from '@/modules/movies/api.ts';

import styles from './MoviesByCategoriesSection.module.css';
import SkeletonCardList from '@/features/SkeletonCardList/SkeletonCardList.tsx';

const MoviesByCategoriesSection = () => {
  const selectedGenre = useAppSelector(
    state => state.userFilters.selectedGenre,
  );
  const selectedCountry = useAppSelector(
    state => state.userFilters.selectedCountry,
  );

  const queryParams = {
    page: '1',
    limit: '10',
    'genres.name': selectedGenre,
    'countries.name': selectedCountry,
    'rating.kp': '6-10',
  };

  const { data: movies, isFetching } = useGetMoviesQuery(queryParams);

  return (
    <section className={styles.section}>
      <SelectGroup />
      {isFetching ? (
        <SkeletonCardList />
      ) : (
        movies?.docs && <MoviesGrid movies={movies.docs} />
      )}
    </section>
  );
};

export default MoviesByCategoriesSection;
