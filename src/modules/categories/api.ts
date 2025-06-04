import { baseApi } from '@/shared/api.ts';
import type {
  PossibleValuesByFieldResponse,
  RequestFieldType,
} from '@/shared/types/categories.ts';

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getAvailableFields: build.query<string[], { field: RequestFieldType }>({
      query: params => ({
        url: '/v1/movie/possible-values-by-field',
        params,
      }),
      transformResponse: (
        response: PossibleValuesByFieldResponse,
      ): string[] => {
        return response.map(item => item.name);
      },
    }),
  }),
});

export const { useGetAvailableFieldsQuery } = categoriesApi;
