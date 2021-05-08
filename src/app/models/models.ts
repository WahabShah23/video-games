export interface Game {
  background_image: string;
  name: string;
  released: string;
  matacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Ratings>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailer>;
}

export interface APIResponse<T> {
  // results of array of the type we pass will be returned
  results: Array<T>
}

export interface Genre {
  name: string;
}

export interface ParentPlatform {
  platform: {
    name: string;
  }
}

export interface Publishers {
  name: string;
}

export interface Ratings {
  id: number;
  count: number;
  title: string;
}

export interface Screenshots {
  image: string;
}

export interface Trailer {
  data: {
    max: string;
  }
}
