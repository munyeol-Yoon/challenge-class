import { useModal } from "../contexts/modal.context";

function Backdrop({ children }) {
  const modal = useModal();

  /**
   * 모달이 꺼지면 안댐
   * 1) 클릭 이벤트 타겟이 current 타겟이랑 동일하게 할때만
   * 2) 이벤트 프로퍼게이션 -> 클릭 이벤트를 버블링으로 처리한다.
   * 이중에서 권장되는 방법은 이벤트 위임이다.
   */

  const handleBackdropClick = (e) => {
    const value = e.target.className;
    // 언제 실행할 것인가
    // 백드롭일때만
    if (value === "backdrop") {
      modal.close();
    }
  };

  return (
    <div className="backdrop" onClick={handleBackdropClick}>
      {children}
    </div>
  );
}

export default Backdrop;
