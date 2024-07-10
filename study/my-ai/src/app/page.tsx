"use client";

import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleClickTalk = async () => {
    const response = await fetch("http://localhost:3000/api/talk", {
      method: "POST",
      body: JSON.stringify({ content }),
    });
    const data = await response.json();

    setResponse(data);

    console.log(data);
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold">AI 친구</h1>
      <textarea
        name=""
        id=""
        className="border border-black w-full max-w-sm p-1.5"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        onClick={handleClickTalk}
        className="border border-black px-4 py-2 text-sm mt-3 bg-white hover:brightness-90 active:brightness-75"
      >
        위 내용으로 말걸기
      </button>

      <img src={response.url} />
      <p className="mt-10">{response}</p>
    </main>
  );
}
