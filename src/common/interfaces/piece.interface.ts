import { Keyword } from './keyword.interface';
import { WhoKeyword } from './whoKeyword.interface';

export interface Piece {
  address: string;
  addressDetail: string;
  content: string;
  date: string;
  pieceId: number;
  images: string[];
  user?: {
    nickname: string;
  };
  keywords: Keyword[];
  latitude: number;
  longitude: number;
  placeUrl: string;
  createdAt?: string;
  whos: WhoKeyword[];
}
