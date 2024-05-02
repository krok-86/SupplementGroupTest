export type TFiltersValues = string | number | string[] | boolean | IOption[];

export interface IFilters {
    platforms: IOption[],
    numberOfGamersOffline: number,
    russianVoices: boolean,
    isMultiplyOnline: boolean,
    isBest: boolean
  }
  
  export interface IGame {
    title: string,
    rating: number,
    platforms: string[],
    isMultiplyOnline: boolean,
    numberOfGamersOffline: number,
    russianVoices: boolean,
    images?: string[]
  }

  export interface IOption {
    value: string,
    label: string
  }