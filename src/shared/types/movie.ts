export interface Movie {
  id: number;
  name: string;
  alternativeName: string;
  enName: string | null;
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  slogan: string;
  status: string | null;
  poster: {
    url: string;
  };
  rating: {
    kp: string;
  };
}

export type ContentType = 'movie' | 'tv-series' | 'anime';

export interface MoviesResponse {
  docs: Movie[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
