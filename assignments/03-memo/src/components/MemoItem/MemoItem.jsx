import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GET_MEMO } from "../../redux/reducers/memo.reducer";
import { dateFormatter } from "../../utils/formatDate";

const MAX_TITLE_LENGTH = 20;

const createTitle = (title) => {
  const firstLine = title.trim();

  return firstLine.length > MAX_TITLE_LENGTH
    ? `${firstLine.substring(0, MAX_TITLE_LENGTH)}...`
    : firstLine;
};

function MemoItem({ memo }) {
  const selectMemoId = useSelector((state) => state.memo.selectMemoId);
  const dispatch = useDispatch();
  const title = createTitle(memo.content);

  const handleClickItem = () => {
    dispatch({ type: GET_MEMO, payload: { memoId: memo.id } });
  };

  return (
    <StListItem
      $isSelected={selectMemoId === memo.id}
      onClick={handleClickItem}
    >
      <StItemTitle>{memo.content ? title : "새로운 메모"}</StItemTitle>
      <StItemTime>{dateFormatter(memo.updatedAt).koreaTime}</StItemTime>
    </StListItem>
  );
}

export default MemoItem;

const StListItem = styled.li`
  height: 50px;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? "#d3d3d3" : "white")};
`;

const StItemTitle = styled.h3`
  padding: 5px 8px;
  font-size: 13px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
`;

const StItemTime = styled.time`
  padding: 5px 8px;
  font-size: 12px;
  color: rgb(64, 64, 64);
`;
