import { SDeal } from "@/schemas/Deal.schema";
import Image from "next/image";

interface DealCardProps {
  deal: SDeal;
}

function DealCard({ deal }: DealCardProps) {
  const { title, imageUrl, price, location, likesCount } = deal;
  return (
    <div>
      <div className="relative aspect-[4/3]">
        <Image className="object-cover" src={imageUrl} alt={title} fill />
      </div>
      <h6>{title}</h6>
      <div>{price}</div>
      <div>{location}</div>
      <div>{likesCount}</div>
    </div>
  );
}

export default DealCard;
