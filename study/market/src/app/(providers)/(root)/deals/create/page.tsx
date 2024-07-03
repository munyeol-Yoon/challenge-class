"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { supabase } from "@/contexts/supabase.context";
import { nanoid } from "nanoid";
import { useState } from "react";

function CreateDealPage() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleClickCreate = async () => {
    // join
    // const { data } = await supabase
    //   .from("deals")
    //   .select("*, seller:sellerId (*)");

    // console.log(data);

    // image
    // console.log(image);
    if (!image) return;
    const extension = image?.name.split(".").splice(-1)[0];
    const filename = nanoid() + "." + extension;
    const response = await supabase.storage
      .from("deals")
      .upload(`/${filename}`, image);
    console.log(response);

    if (!response.data) return;

    const url =
      "https://lsegfyvrnwykvvzjwwdw.supabase.co/storage/v1/object/public/" +
      response.data.fullPath;

    // create
    await supabase.from("deals").insert({ content, imageURL: url });
  };

  return (
    <Page title="판매글 작성하기">
      <Input
        label="판매글 내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        label="대표 이미지"
        type="file"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />
      <Button onClick={handleClickCreate}>작성히기</Button>
    </Page>
  );
}

export default CreateDealPage;

// npx supabase gen types typescript --project-id Reference ID --schema public > src/types/supabase.ts
