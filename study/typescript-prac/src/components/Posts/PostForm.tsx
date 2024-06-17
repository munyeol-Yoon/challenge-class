import { DefaultError, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  title: string;
  body: string;
};

function PostForm() {
  const titleElementRef = useRef<HTMLInputElement>(null);
  const bodyElementRef = useRef<HTMLTextAreaElement>(null);

  const { mutateAsync: createPost } = useMutation<unknown, DefaultError, Post>({
    mutationFn: (data) => axios.post(endpoint, data),
  });

  const handleClickButton = async () => {
    const title = titleElementRef.current?.value;
    const body = bodyElementRef.current?.value;

    if (!title || !body) return alert("데이터를 잘 준비해셈");

    const data = {
      title,
      body,
    };
    await createPost(data);
  };

  return (
    <div className="flex flex-col p-4">
      <input
        ref={titleElementRef}
        className="border border-black"
        type="text"
        placeholder="제목"
      />
      <textarea
        ref={bodyElementRef}
        className="border border-black"
        name=""
        id=""
        placeholder="내용"
      />
      <button onClick={handleClickButton} className="border border-black">
        포스트 생성
      </button>
    </div>
  );
}

export default PostForm;
