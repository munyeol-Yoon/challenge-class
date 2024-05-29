import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// 스토어와 리듀서를 한번에 쓰는 느낌
// async action 기본 지원
// 2 depth 부터는 immer.js 써야함
// persist 는 데이터 보관
const useLoginStore = create(
  persist(
    (set, get) => ({
      isLoggedIn: false, // 상태
      logIn: () => set((prevState) => ({ isLoggedIn: true })), // action
      logOut: () => set(() => ({ isLoggedIn: false })),

      // toggleIsLoggedIn: () => set((prevState) => ({ isLoggedIn: !prevState.isLoggedIn })),
      toggleIsLoggedIn: () => {
        const prevState = get();
        set({ isLoggedIn: !prevState.isLoggedIn });
      },
    }),
    {
      name: "login-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useLoginStore;
