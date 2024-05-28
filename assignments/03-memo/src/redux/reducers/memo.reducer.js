import { v4 as uuid } from "uuid";

const initId = uuid();

const loadLocalStorage = () => {
  try {
    const getStorage = localStorage.getItem("memos");

    if (!getStorage) {
      return {
        memos: [
          {
            id: initId,
            content: "",
            updatedAt: Date.now(),
          },
        ],
        selectMemoId: initId,
      };
    }

    return JSON.parse(getStorage);
  } catch (err) {
    return {
      memos: [
        {
          id: initId,
          content: "",
          updatedAt: Date.now(),
        },
      ],
      selectMemoId: initId,
    };
  }
};

const saveLocalStorage = (state) => {
  try {
    const stringifyState = JSON.stringify(state);
    localStorage.setItem("memos", stringifyState);
  } catch (err) {
    console.error(err);
  }
};

const initialState = loadLocalStorage();

export const CREATE_MEMO = "memo/CREATE_MEMO";
export const GET_MEMO = "memo/GET_MEMO";
export const UPDATE_MEMO = "memo/UPDATE_MEMO";
export const DELETE_MEMO = "memo/DELETE_MEMO";

export const memoReducer = (prevState = initialState, action) => {
  let nextState;
  switch (action.type) {
    case CREATE_MEMO:
      const newMemo = {
        id: uuid(),
        content: "",
        updatedAt: Date.now(),
      };

      nextState = {
        ...prevState,
        selectMemoId: newMemo.id,
        memos: [...prevState.memos, newMemo],
      };
      break;

    case GET_MEMO:
      nextState = {
        ...prevState,
        selectMemoId: action.payload.memoId,
      };
      break;

    case UPDATE_MEMO:
      nextState = {
        ...prevState,
        memos: prevState.memos.map((memo) =>
          memo.id === action.payload.memoId
            ? { ...memo, content: action.payload.content }
            : memo
        ),
      };
      break;

    case DELETE_MEMO:
      const updatedMemos = prevState.memos.filter(
        (memo) => memo.id !== prevState.selectMemoId
      );
      // 길이로 계산해 0번째 넣는다.
      nextState = {
        ...prevState,
        selectMemoId:
          updatedMemos.length > 0
            ? updatedMemos[updatedMemos.length - 1].id
            : null,
        memos: updatedMemos,
      };
      break;

    default:
      nextState = { ...prevState };
  }
  saveLocalStorage(nextState);
  return nextState;
};
