import { useGetMoviesQuery } from '@/modules/movies/api.ts';
import { useAppDispatch, useAppSelector } from '@/app/store.ts';
import { setFilter } from '@/app/filters.reducer.ts';
import { SkeletonCardList, TabsNavigation } from '@/features';
import { MoviesGrid } from '@/widgets/ui';

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
        style={{ marginBottom: '20px' }}
        activeTab={activeTab}
        onChangeTab={tab => {
          dispatch(setFilter(tab));
        }}
      />
      {isFetching ? (
        <SkeletonCardList />
      ) : (
        movies?.docs && <MoviesGrid movies={movies.docs} />
      )}
    </section>
  );
};

export default PopularSection;
