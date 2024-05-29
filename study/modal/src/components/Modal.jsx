import { useModal } from "../contexts/modal.context";
import Backdrop from "./Backdrop";

function Modal({ title, content }) {
  const modal = useModal();

  /**
   *  useRef 를 사용하면 될 듯
   */

  // stopPropagation 으로 이벤트 버블링 되는 걸 막는다. -> 권장되지 않음
  // 이벤트의 타겟을 찾는다.

  return (
    <Backdrop>
      <article className="modal">
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={() => modal.close()}>닫기</button>
      </article>
    </Backdrop>
  );
}

export default Modal;
