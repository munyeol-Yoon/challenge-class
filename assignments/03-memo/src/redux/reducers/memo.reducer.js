import { v4 as uuid } from "uuid";

const initId = uuid();

const initialState = {
  memos: [
    {
      id: initId,
      content: "",
      updatedAt: Date.now(),
    },
  ],
  selectMemoId: initId,
};

export const CREATE_MEMO = "memo/CREATE_MEMO";
export const GET_MEMO = "memo/GET_MEMO";
export const UPDATE_MEMO = "memo/UPDATE_MEMO";
export const DELETE_MEMO = "memo/DELETE_MEMO";

export const memoReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case CREATE_MEMO:
      const newMemo = {
        id: uuid(),
        content: "",
        updatedAt: Date.now(),
      };

      return {
        ...prevState,
        selectMemoId: newMemo.id,
        memos: [...prevState.memos, newMemo],
      };

    case GET_MEMO:
      return {
        ...prevState,
        selectMemoId: action.payload.memoId,
      };

    case UPDATE_MEMO:
      return {
        ...prevState,
        memos: prevState.memos.map((memo) =>
          memo.id === action.payload.memoId
            ? { ...memo, content: action.payload.content }
            : memo
        ),
      };

    case DELETE_MEMO:
      const updatedMemos = prevState.memos.filter(
        (memo) => memo.id !== prevState.selectMemoId
      );
      // 길이로 계산해 0번째 넣는다.
      return {
        ...prevState,
        selectMemoId:
          updatedMemos.length > 0
            ? updatedMemos[updatedMemos.length - 1].id
            : null,
        memos: updatedMemos,
      };
    default:
      return { ...prevState };
  }
};
