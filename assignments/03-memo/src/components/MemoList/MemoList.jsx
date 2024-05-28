import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CREATE_MEMO, DELETE_MEMO } from "../../redux/reducers/memo.reducer";
import MemoItem from "../MemoItem/MemoItem";

function MemoList() {
  const dispatch = useDispatch();
  const memos = useSelector((state) => state.memo);
  console.log(memos);

  const handleClickCreateMemo = () => {
    dispatch({ type: CREATE_MEMO });
  };

  const handleClickDeleteMemo = () => {
    if (memos.memos.length <= 1) {
      alert("하나 이상의 메모는 남겨두어야 합니다.");
      return;
    }
    dispatch({ type: DELETE_MEMO });
  };

  const handleSortedUpdatedList = (memos) => {
    return memos.toSorted((a, b) => b.updatedAt - a.updatedAt);
  };

  return (
    <StAside>
      <StHeader>
        <StButton onClick={handleClickCreateMemo}>새 메모 작성하기</StButton>
        <StButton onClick={handleClickDeleteMemo}>삭제</StButton>
      </StHeader>
      <StList>
        {handleSortedUpdatedList(memos.memos).map((memo) => (
          <MemoItem key={memo.id} memo={memo} />
        ))}
      </StList>
    </StAside>
  );
}

export default MemoList;

const StAside = styled.aside`
  height: 100%;
  border-right: 1px solid rgb(230, 230, 230);
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
`;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px;
  background-color: white;
  border-top-left-radius: 10px;
  position: sticky;
`;

const StButton = styled.button`
  all: unset;
  font-size: 13px;
  font-weight: 500;
  background-color: white;
  color: rgb(128, 128, 128);
  padding: 4px 8px;
  cursor: pointer;
`;

const StList = styled.ul`
  padding: 20px 12px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
  gap: 8px;
`;
