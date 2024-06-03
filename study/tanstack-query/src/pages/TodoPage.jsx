import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";
import Page from "../components/Page";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const { isPending, mutate } = useMutation({
    mutationFn: (variables) => {
      console.log(variables);
      axios.post(ENDPOINT, { value: variables });
    },
    onSuccess: (...mutationResult) => {
      console.log(mutationResult);
      alert("성공");
    },
    onError: () => {
      alert("실패");
    },
  });

  const handleClickButton = async () => {
    try {
      mutate(inputRef.current.value, { onSuccess: () => alert("성공성공") });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Page>
      <input
        ref={inputRef}
        type="text"
        className="border"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isPending}
      />
      <button
        onClick={handleClickButton}
        className="bg-black text-white"
        disabled={isPending}
      >
        입력
      </button>
    </Page>
  );
}

export default TodoPage;
