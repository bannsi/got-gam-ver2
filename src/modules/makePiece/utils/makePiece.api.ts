import kakaoApiRequest from '../../../app/kakaoApiRequest';
import makeRequest from '../../../app/makeRequest';
import { Keyword } from '../../../common/interfaces/keyword.interface';
import { Image, Piece } from '../../../common/interfaces/piece.interface';
import { WhoKeyword } from '../../../common/interfaces/whoKeyword.interface';
import { LocationResponse } from './makePiece.type';

export const getPlaceListAPI = async (lat: number, lng: number, code: string) => {
  const data = await kakaoApiRequest<LocalResponse>({
    method: 'get',
    url: '/v2/local/search/category',
    param: {
      category_group_code: code,
      x: lng.toString(),
      y: lat.toString(),
      radius: 500,
      size: 3
    }
  });
  const { documents } = await data;
  return await documents;
};

export const searchPlaceListAPI = async (query: string) => {
  const data = await kakaoApiRequest<LocalResponse>({
    method: 'get',
    url: '/v2/local/search/keyword',
    param: {
      query: query
    }
  });
  const { documents } = await data;
  return await documents;
};

interface LocalResponse {
  documents: LocationResponse[];
  meta: { total_count: number; pageable_count: number; is_end: boolean; same_name: any };
}

export const fetchKeywordIdsAPI = () =>
  makeRequest<KeywordResponse>({
    url: '/pieces/v1/keyword',
    method: 'get'
  });

export const fetchOptionIdsAPI = () =>
  makeRequest<KeywordResponse>({
    url: '/opKeyword/v1',
    method: 'get'
  });

export interface KeywordResponse {
  code: string;
  message: string;
  body: Keyword[];
}

export const fetchCompanionIdsAPI = () =>
  makeRequest<WhoKeywordResponse>({
    url: '/pieces/v1/who',
    method: 'get'
  });

export interface WhoKeywordResponse {
  code: string;
  message: string;
  body: WhoKeyword[];
}

export const makePieceAPI = (form: MakePieceRequest) =>
  makeRequest<MakePieceResponse>({
    url: '/pieces/v1/',
    method: 'post',
    body: form
  });

export interface MakePieceRequest {
  date: string;
  content: string;
  latitude: number;
  longitude: number;
  address: string;
  addressDetail: string;
  placeUrl: string;
  images: Image[];
  keywords: number[];
  optionalKeywords: number[];
  whos: number[];
  place: string;
}

export interface MakePieceResponse {
  code: string;
  message: string;
  body: Piece;
}
