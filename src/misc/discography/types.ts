export interface IDiscography {
  tracks: ITrack[];
  releases: IUnresolvedRelease[];
}
export interface IBaseRelease {
  slug: string;
  title: string;
  type: string;
  year: number;
  links: {[service: string]: string;}
  artist_comment: string;
  album_art: string;
}

export type IResolvedRelease = IBaseRelease & { tracks: ITrack[]; }
export type IUnresolvedRelease = IBaseRelease & { tracks: string[]; }

export interface ITrack {
  id: string;
  name: string;
  genre: string;
  length: string;
  artists: string[];
}