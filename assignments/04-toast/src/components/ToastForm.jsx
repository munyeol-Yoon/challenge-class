import { useState } from "react";
import { useToast } from "../contexts/modal.context";
import Input from "./Input";

function ToastForm() {
  const toast = useToast();

  const [inputs, setInputs] = useState({
    title: "Scheduled: Catch up",
    content: "Friday, February 10, 2023 at 5:57 PM",
    delay: 2000,
  });

  const { title, content, delay } = inputs;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleOnClickToastButton = () => {
    toast.onClickModal({ title, content, delay });
  };

  return (
    <>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-2xl font-bold">토스트 컨트롤러</h1>
        <Input
          label="제목 (필수)"
          value={title}
          name="title"
          onChange={handleOnChange}
        />
        <Input
          label="내용 (필수)"
          value={content}
          name="content"
          onChange={handleOnChange}
        />
        <Input
          type="number"
          label="노출 시간(ms) (선택)"
          name="delay"
          value={delay}
          onChange={handleOnChange}
        />
        <button
          className="bg-black text-white w-full py-3 text-[15px] rounded-md hover:bg-black/80 active:bg-black/70 transition-all"
          onClick={handleOnClickToastButton}
        >
          토스트 띄우기
        </button>
      </div>
    </>
  );
}

export default ToastForm;
