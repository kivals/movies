import TabsNavigation from '@/components/TabsNavigation/TabsNavigation.tsx';

import styles from './PopularSection.module.css';
import MoviesGrid from '@/components/MoviesGrid/MoviesGrid.tsx';
import { useGetMoviesQuery } from '@/modules/movies/api.ts';
import { useAppDispatch, useAppSelector } from '@/app/store.ts';
import { setFilter } from '@/app/filters.reducer.ts';
import Skeleton from '@/components/PopularSection/Skeleton.tsx';

const PopularSection = () => {
  const activeTab = useAppSelector(
    state => state.userFilters.popularMoviesFilter,
  );
  const dispatch = useAppDispatch();

  const queryParams = {
    page: '1',
    limit: '10',
    type: activeTab,
    'rating.kp': '8-10',
  };

  const { data: movies, isFetching } = useGetMoviesQuery(queryParams);
  return (
    <section>
      <TabsNavigation
        activeTab={activeTab}
        onChangeTab={tab => {
          dispatch(setFilter(tab));
        }}
      />
      <button className={styles.viewAll}>Смотреть все →</button>
      {isFetching ? (
        <Skeleton />
      ) : (
        movies?.docs && <MoviesGrid movies={movies.docs} />
      )}
    </section>
  );
};

export default PopularSection;
