import { combineReducers } from '@reduxjs/toolkit';
import filtersReducer from '@/app/filters.reducer.ts';
import { moviesApi } from '@/modules/movies/api.ts';

export const rootReducer = combineReducers({
  userFilters: filtersReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
});
