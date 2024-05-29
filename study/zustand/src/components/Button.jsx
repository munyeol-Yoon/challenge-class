import { useShallow } from "zustand/react/shallow";
import useLoginStore from "../zustand/login.store";

function Button() {
  // const logIn = useLoginStore((state) => state.logIn);
  // const logOut = useLoginStore((state) => state.logOut);

  const { logIn, logOut } = useLoginStore(
    useShallow((state) => ({
      logIn: state.logIn,
      logOut: state.logOut,
    }))
  );

  // useStore 를 통해 따로 꺼내기.
  // 한번에 구조분해할당을 쓰고 싶으면 useShallow 사용.
  // -> 불필요한 리렌더링을 막기 위해서

  console.log("button re:render");

  return (
    <div>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </div>
  );
}

export default Button;
