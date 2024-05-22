export const LOG_IN = "auth/LOG_IN";
export const LOG_OUT = "auth/LOG_OUT";

const initialState = {
  isLoggedIn: false,
};

function authReducer(prevState = initialState, action) {
  // 작업의 종류에 따라 다른 작업을 해야함
  switch (action.type) {
    case LOG_IN:
      // 작업이 반영된 상태를 리턴
      return { ...prevState, isLoggedIn: true };
    case LOG_OUT:
      return { ...prevState, isLoggedIn: false };

    default:
      return prevState;
  }
}

export default authReducer;
