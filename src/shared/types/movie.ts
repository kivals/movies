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
}
