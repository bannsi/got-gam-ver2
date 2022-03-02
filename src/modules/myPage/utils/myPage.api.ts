import makeRequest from '../../../app/makeRequest';
import { Me } from '../../../common/interfaces/me.interface';
import { Piece } from '../../../common/interfaces/piece.interface';

export const fetchMeAPI = () =>
  makeRequest<MeResponse>({
    method: 'get',
    url: '/accounts/v1/me'
  });

interface MeResponse {
  code: string;
  message: string;
  body: Me;
}

export const fetchMyPiecesAPI = (kakaoId: string) =>
  makeRequest<MyPiecesResponse>({
    method: 'get',
    url: `/pieces/v1/${kakaoId}`
  });

interface MyPiecesResponse {
  code: string;
  message: string;
  body: Piece[];
}
