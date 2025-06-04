import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ContentType } from '@/shared/types/movie.ts';

interface State {
  popularMoviesFilter: ContentType;
  selectedGenre: string;
  selectedCountry: string;
}

const initialState: State = {
  popularMoviesFilter: 'movie',
  selectedGenre: 'боевик',
  selectedCountry: 'Бразилия',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<ContentType>) => {
      state.popularMoviesFilter = action.payload;
    },
    setGenre: (state, action: PayloadAction<string>) => {
      state.selectedGenre = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const { setFilter, setGenre, setCountry } = filtersSlice.actions;
export default filtersSlice.reducer;
