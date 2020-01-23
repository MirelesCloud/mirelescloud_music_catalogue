export interface ServiceInit {
    status: 'init';
  }

export interface ServiceLoading {
    status: 'loading';
  }

export interface ServiceLoaded<T> {
    status: 'loaded';
    payload: T;
  }

export interface ServiceError {
    status: 'error';
    error: Error;
  }

export type Service<T> =
| ServiceInit
| ServiceLoading
| ServiceLoaded<T>
| ServiceError;


export interface ITracks {
    id: number;
    title: string;
    artist: {
      name: string;
      picture_big: string;
    }
    album: {
      title: string;
      cover: string;
    }
  }

export interface IAlbum {
    id: number;
    title: string;
    cover_big: string;
    artist: {
      name: string;
    }
  }
  
  export interface IArtist {
    id: number;
    name: string;
    position: number;
    picture_big: string;
    tracklist: string;
  }
  
  export interface IPlaylist {
    id: number;
    title: string;
    picture_big: string;
    tracklist: string;
    user: { name: string };
  }
  

export interface IPodcast {
    id: number;
    title: string;
    description: string;
    fans: number;
    picture_big: string;
  }

  export interface IChart {
    tracks: { data: ITracks[]};
    albums: { data: IAlbum[]};
    artists: { data: IArtist[]};
    playlists: { data: IPlaylist[]};
    podcasts: { data: IPodcast[]};
  }

  export interface IData {
    id: number;
    title: string;
    artist: { name: string, picture_big: string; };
    album: { title: string, cover_big: string, tracklist: string; };
  }

  export interface IResults {
    data: IData[]
  }

