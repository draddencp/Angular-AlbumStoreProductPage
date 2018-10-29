export interface AlbumModel {
  id: number;
  artist: string;
  album: {
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: Track;
  }
}

interface Track {
  trackNumber: number;
  trackName: string;
  trackLength: string;
  trackPrice: number;
}
