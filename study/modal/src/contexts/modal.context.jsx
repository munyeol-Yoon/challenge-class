import { useScrollLock } from "@yoojinyoung/usescrolllock";
import { createContext, useContext, useState } from "react";
import Modal from "../components/Modal";

const initialValue = {
  open: () => {},
  close: () => {},
};

const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [modalOptions, setModalOptions] = useState(null);
  const scrollLock = useScrollLock();

  const value = {
    // open: (element) => {
    //   setModalElement(element);
    // },
    // close: () => {
    //   setModalElement(null);
    // },
    open: (options) => {
      setModalOptions(options);
      scrollLock.lock();
    },
    close: () => {
      setModalOptions(null);
      scrollLock.release();
    },
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalOptions && (
        <Modal title={modalOptions.title} content={modalOptions.content} />
      )}
    </ModalContext.Provider>
  );
}

// 내가 만든 useModal 을 어떻게 쓰는 게 편리할까
