import Page from "@/components/Page";
import { SDeal } from "@/schemas/Deal.schema";
import Image from "next/image";

const deal: SDeal<true> = {
  id: 1,
  title: "춘향골 만 원 한 박스 판매함",
  imageUrl:
    "https://dnvefa72aowie.cloudfront.net/origin/article/202406/0c3fc4e63d2251a9348b80ddd5a087918089f7b02ec374e49cf9c87a4461fde9_0.webp?f=webp&q=95&s=1440x1440&t=inside",
  location: "서울 강동구 명일제2동",
  price: 9000,
  likesCount: 54,

  seller: {
    avatarImgURL:
      "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png",
    email: "blabla@sparta.com",
  },
  content: "맛도 좋아 영양도 좋아 춘향골 복숭아, 물복 딱복 다 있습니다.",
  createdAt: 1719388055073,
  viewsCount: 23212,
};

function DealDetailPage() {
  return (
    <Page title={deal.title} isTitleHidden>
      <div className="relative aspect-square">
        <Image
          className="object-cover"
          alt={deal.title}
          src={deal.imageUrl}
          fill
          unoptimized
        />
      </div>
      <div>{deal.seller?.email}</div>

      <h2>{deal.title}</h2>

      <div>{deal.createdAt}</div>

      <div>{deal.price}</div>

      <div>{deal.content}</div>

      <div>
        <div>{deal.likesCount}</div>
        <div>{deal.viewsCount}</div>
      </div>
    </Page>
  );
}

export default DealDetailPage;
