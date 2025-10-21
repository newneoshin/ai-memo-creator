import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { modifyMemo } from "../features/todos/todoSlice.js";

import PATHS from "../shared/constants/paths";
import Logo from "../shared/components/Logo";
import SquareButton from "../shared/components/SquareButton";
import TodoList from "../features/todos/components/TodoList";
import ListFilterBar from "../features/todos/components/ListFilterBar";

const TodosPage = () => {
  const todos = useSelector((state) => state.memos.memos);
  const [order, setOrder] = useState("all");
  const filteredTodos = useMemo(() => {
    if (order === "incomplete") {
      return todos.filter((item) => {
        return item.isCompleted === false;
      });
    } else if (order === "complete") {
      return todos.filter((item) => {
        return item.isCompleted === true;
      });
    } else {
      return todos;
    }
  }, [order, todos]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggle = (id, next) => {
    const found = todos.find((todo) => {
      return todo.id === id;
    });
    const modified = { ...found, isCompleted: !found.isCompleted };
    dispatch(modifyMemo(modified));
  };

  const handleClick = () => {
    navigate(PATHS.TODOS.ADD);
  };

  return (
    <div>
      <Logo />
      <div>
        <ListFilterBar onChange={setOrder} />
        <SquareButton type="other" text={"추가하기"} onClick={handleClick} />
      </div>
      <TodoList todos={filteredTodos} onToggle={handleToggle} />
    </div>
  );
};

export default TodosPage;
