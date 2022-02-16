import kakaoApiRequest from '../../../app/kakaoApiRequest';
import { LocationResponse } from './makePiece.type';

export const getPlaceListAPI = async (lat: number, lng: number, code: string) => {
  const data = await kakaoApiRequest<LocalResponse>({
    method: 'get',
    url: '/v2/local/search/category',
    query: {
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

interface LocalResponse {
  documents: LocationResponse[];
  meta: { total_count: number; pageable_count: number; is_end: boolean; same_name: any };
}
