import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { modifyMemo } from "../features/memo/memoSlice.js";

import PATHS from "../shared/constants/paths";
import Logo from "../shared/components/Logo";
import SquareButton from "../shared/components/SquareButton";
import MemoList from "../features/memo/components/MemoList.jsx";
import ListFilterBar from "../features/memo/components/ListFilterBar";

const MemosPage = () => {
  const memos = useSelector((state) => state.memo.list);
  const [order, setOrder] = useState("all");
  const filteredMemos = useMemo(() => {
    if (order === "incomplete") {
      return memos.filter((item) => {
        return item.isCompleted === false;
      });
    } else if (order === "complete") {
      return memos.filter((item) => {
        return item.isCompleted === true;
      });
    } else {
      return memos;
    }
  }, [order, memos]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggle = (id, next) => {
    const found = memos.find((todo) => {
      return todo.id === id;
    });
    const modified = { ...found, isCompleted: next };
    dispatch(modifyMemo(modified));
  };

  const handleClick = () => {
    navigate(PATHS.MEMO.ADD);
  };

  return (
    <div>
      <Logo />
      <div>
        <ListFilterBar onChange={setOrder} />
        <SquareButton type="other" text={"추가하기"} onClick={handleClick} />
      </div>
      <MemoList memos={filteredMemos} onToggle={handleToggle} />
    </div>
  );
};

export default MemosPage;
