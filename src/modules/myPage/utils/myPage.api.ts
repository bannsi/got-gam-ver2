import makeRequest from '../../../app/makeRequest';
import { User } from '../../../common/interfaces/user.interface';
import { Piece } from '../../../common/interfaces/piece.interface';
import { PieceThumnail } from '../../../common/interfaces/pieceThumbnail.interface';

export const fetchMyInfoAPI = () =>
  makeRequest<UserResponse>({
    method: 'get',
    url: '/accounts/v1/me'
  });

interface UserResponse {
  code: string;
  message: string;
  body: User;
}

export const fetchMyPiecesAPI = (kakaoId: string) =>
  makeRequest<MyPiecesResponse>({
    method: 'get',
    url: `/pieces/v1/user/${kakaoId}`
  });

interface MyPiecesResponse {
  code: string;
  message: string;
  body: PieceThumnail[];
}
