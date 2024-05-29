import { useScrollLock } from "@yoojinyoung/usescrolllock";
import "./App.css";
import { useModal } from "./contexts/modal.context";
import "./custom.css";

function App() {
  const modal = useModal();
  const scrollLock = useScrollLock();

  const handleClickButton = () => {
    // modal.open(<Modal title="샘플모달" content="샘플 컨텐츠" />);
    modal.open({ title: "title", content: "content" });
    scrollLock.lock();
  };

  return (
    <main>
      <button onClick={handleClickButton}>모달 띄우기</button>
      {Array(500)
        .fill(0)
        .map((_, index) => (
          <div>{index + 1}</div>
        ))}
    </main>
  );
}

export default App;
