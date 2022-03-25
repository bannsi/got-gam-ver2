import { Keyword } from './keyword.interface';
import { WhoKeyword } from './whoKeyword.interface';

export interface Piece {
  pieceId: number;
  user?: {
    kakaoId: string;
    nickname: string;
    enabled: boolean;
    createdAt: string;
  };
  content: string;
  date: string;
  createdAt?: string;
  latitude: number;
  longitude: number;
  address: string;
  addressDetail: string;
  placeUrl: string;
  keywords: Keyword[];
  opKeywords: Keyword[];
  whos: WhoKeyword[];
  images: Image[];
  place: string;
}

export interface Image {
  image: string;
  thumbnail: boolean;
}
