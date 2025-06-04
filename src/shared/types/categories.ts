export interface CategoryValue {
  name: string;
  slug: string;
}

export type PossibleValuesByFieldResponse = CategoryValue[];

export type RequestFieldType = 'genres.name' | 'countries.name';
