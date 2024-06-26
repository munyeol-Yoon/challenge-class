export type SDeal<IsDetail extends boolean = false> = {
  id: number;
  title: string;
  imageUrl: string;
  location: string;
  price: number;
  likesCount: number;
} & (IsDetail extends true
  ? {
      seller: {
        avatarImgURL: string;
        email: string;
      };

      createdAt: number;
      content: string;
      viewsCount: number;
    }
  : {});
