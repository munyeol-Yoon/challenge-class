import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import ToastModal from "../components/ToastModal";
import { CLOSE_DELAY } from "../constants/constants";

const initialValue = {
  modals: [],
  onClickModal: () => {},
};

const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [modals, setModals] = useState(initialValue.modals);

  const onClickModal = (options) => {
    const modalId = uuid();
    const { title, content } = options;
    let { delay } = options;

    if (delay === "") {
      delay = 2000;
    }

    const element = (
      <ToastModal title={title} content={content} delay={delay} />
    );

    setModals((prevModals) => [...prevModals, { element, modalId }]);

    setTimeout(() => {
      setModals((prevModals) =>
        prevModals.filter((prevModal) => prevModal.modalId !== modalId)
      );
    }, delay + CLOSE_DELAY);
  };

  return (
    <ToastContext.Provider value={{ modals, onClickModal }}>
      {children}
      {
        <ul className="fixed right-6 bottom-6 flex flex-col gap-6">
          {modals.map((modal, i) => (
            <li key={i}>{modal.element}</li>
          ))}
        </ul>
      }
    </ToastContext.Provider>
  );
};
