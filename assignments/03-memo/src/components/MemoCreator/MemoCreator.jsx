import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { UPDATE_MEMO } from "../../redux/reducers/memo.reducer";
import { dateFormatter } from "../../utils/formatDate";

function MemoCreator() {
  const selectMemoId = useSelector((state) => state.memo.selectMemoId);
  const memos = useSelector((state) => state.memo.memos);
  const selectMemo = memos.find((memo) => memo.id === selectMemoId);
  const textareaRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    textareaRef.current.focus();
  }, [selectMemoId]);

  const handleOnChange = (e) => {
    const value = e.target.value;
    dispatch({
      type: UPDATE_MEMO,
      payload: { memoId: selectMemoId, content: value },
    });
  };

  return (
    <StMemoCreatorArticle>
      <StMemoCreatorTime>
        {dateFormatter(selectMemo.updatedAt).koreaDate}
      </StMemoCreatorTime>
      <StMemoCreatorTextArea
        autoFocus
        ref={textareaRef}
        onChange={handleOnChange}
        value={selectMemo.content}
      />
    </StMemoCreatorArticle>
  );
}

export default MemoCreator;

const StMemoCreatorArticle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 0;
  width: 100%;
`;

const StMemoCreatorTime = styled.time`
  color: rgb(128, 128, 128);
  font-size: 10px;
  margin: 0 auto;
`;

const StMemoCreatorTextArea = styled.textarea`
  all: unset;
  flex-grow: 1;
  font-size: 15px;
  line-height: 1.66;
  width: 94%;
  margin: 0 auto;
`;
