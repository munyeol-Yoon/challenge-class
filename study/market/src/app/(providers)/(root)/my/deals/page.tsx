"use client";

import Page from "@/components/Page";
import { supabase } from "@/contexts/supabase.context";
import { Tables } from "@/types/supabase";
import Image from "next/image";
import { useEffect, useState } from "react";

type Deal = Tables<"deals">;

function MyDealsPage() {
  const [myDeals, setMyDeals] = useState<Deal[]>([]);

  useEffect(() => {
    (async () => {
      const user = await supabase.auth.getUser().then((res) => res.data.user);

      if (!user) return;

      const { data } = await supabase
        .from("deals")
        .select("*")
        .eq("sellerId", user.id);
      console.log(data);

      if (!data) return;

      setMyDeals(data);
    })();
  }, []);

  return (
    <Page title="내 판매글">
      {myDeals.map((deal) => (
        <div key={deal.id}>
          <div className="relative aspect-[4/3]">
            <Image
              className="object-cover"
              src={deal.imageURL}
              alt={deal.content}
              fill
            />
          </div>
          <p>{deal.content}</p>
        </div>
      ))}
    </Page>
  );
}

export default MyDealsPage;
