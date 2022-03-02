export interface Me {
  kakaoId: string;
  nickname: string;
  enabled: boolean;
  createdAt: Date;
  image: {
    id: number;
    encoded: string;
  };
}
