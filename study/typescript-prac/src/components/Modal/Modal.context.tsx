// 1. 만든다.
// 2. 사용한다.
// 3. 범위를 지정해 값을 내려준다.

import { createContext, useContext, useState } from "react";

type ModalContextValue = {
  open: (element: React.ReactElement) => void;
  close: () => void;
};

const initialValue: ModalContextValue = {
  open: () => {},
  close: () => {},
};

const ModalContext = createContext<ModalContextValue>(initialValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalElement, setModalElement] = useState<React.ReactElement | null>(
    null
  );

  const open: ModalContextValue["open"] = (element) => {
    setModalElement(element);
  };

  const close: ModalContextValue["close"] = () => {
    setModalElement(null);
  };

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      {modalElement}
    </ModalContext.Provider>
  );
}
