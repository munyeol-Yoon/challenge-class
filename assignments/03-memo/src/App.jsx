import AppWrapper from "./components/AppWrapper";
import MemoCreator from "./components/MemoCreator";
import MemoList from "./components/MemoList";

function App() {
  return (
    <>
      <AppWrapper>
        <MemoList />
        <MemoCreator />
      </AppWrapper>
    </>
  );
}

export default App;
