import { useGetAvailableFieldsQuery } from '@/modules/categories/api.ts';
import { useAppDispatch, useAppSelector } from '@/app/store.ts';
import { setCountry, setGenre } from '@/app/filters.reducer.ts';
import { Select } from '@/features';

import styles from './SelectGroup.module.css';

const SelectGroup = () => {
  const dispatch = useAppDispatch();

  const { data: genres } = useGetAvailableFieldsQuery({
    field: 'genres.name',
  });

  const { data: countries } = useGetAvailableFieldsQuery({
    field: 'countries.name',
  });

  const selectedGenre = useAppSelector(
    state => state.userFilters.selectedGenre,
  );
  const selectedCountry = useAppSelector(
    state => state.userFilters.selectedCountry,
  );

  return (
    <div className={styles.container}>
      <Select
        selected={selectedGenre}
        data={genres}
        label={'Выберете жанр'}
        onChange={value => {
          dispatch(setGenre(value));
        }}
      />

      <Select
        selected={selectedCountry}
        data={countries}
        label={'Выберете страну'}
        onChange={value => {
          dispatch(setCountry(value));
        }}
      />
    </div>
  );
};

export default SelectGroup;
