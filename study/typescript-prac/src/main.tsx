import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./components/Modal/Modal.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
