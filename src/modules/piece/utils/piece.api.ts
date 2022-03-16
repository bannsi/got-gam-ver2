import { UserInfo } from 'os';
import makeRequest from '../../../app/makeRequest';
import { Piece } from '../../../common/interfaces/piece.interface';
import { User } from '../../../common/interfaces/user.interface';

export const fetchPieceByIdAPI = (pieceId: number) =>
  makeRequest<PieceResponse>({
    method: 'get',
    url: `/pieces/v1/${pieceId}`
  });

interface PieceResponse {
  code: string;
  message: string;
  body: Piece;
}

export const fetchUserByIdAPI = (pieceId: number) =>
  makeRequest<User>({
    method: 'get',
    url: `/accounts/v1/piece/${pieceId}`
  });
