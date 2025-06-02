import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ContentType } from '@/shared/types/movie.ts';

interface State {
  popularMoviesFilter: ContentType;
}

const initialState: State = {
  popularMoviesFilter: 'movie',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<ContentType>) => {
      state.popularMoviesFilter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
