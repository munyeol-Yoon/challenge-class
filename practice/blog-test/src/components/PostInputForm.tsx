import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Post, PostsPropsType } from "./PostInputForm.type";

function PostInputForm({ posts, setPosts }: PostsPropsType) {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const { title, content } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handlePostOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postObj: Post = {
      postId: uuid(),
      id: uuid(),
      title,
      content,
    };

    setPosts([...posts, postObj]);
    setInputs({
      title: "",
      content: "",
    });
  };

  return (
    <div>
      <form onSubmit={handlePostOnSubmit}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={onChange}
          value={title}
        />
        <label htmlFor="content">내용</label>
        <textarea
          name="content"
          id="content"
          onChange={onChange}
          value={content}
        ></textarea>
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default PostInputForm;
