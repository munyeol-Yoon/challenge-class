import clsx from "clsx";
import { useEffect, useState } from "react";
import { CLOSE_DELAY } from "../constants/constants";

function ToastModal({ title, content, delay }) {
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    setIsShowModal(true);

    setTimeout(() => {
      setIsShowModal(false);
    }, delay ?? 2000);
  }, [delay, title]);

  const modalWrapperClassName = clsx(
    `shadow-lg bg-white flex flex-col gap-1 p-6 border rounded-lg w-[320px] transition-all duration-${CLOSE_DELAY}`,
    isShowModal ? "translate-x-0" : "translate-x-[550px]"
  );

  return (
    <div className={modalWrapperClassName}>
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
}

export default ToastModal;
