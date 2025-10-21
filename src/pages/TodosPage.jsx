import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import PATHS from "../shared/constants/paths";
import Logo from "../shared/components/Logo";
import SquareButton from "../shared/components/SquareButton";
import TodoList from "../features/todos/components/TodoList";
import ListFilterBar from "../features/todos/components/ListFilterBar";

const TodosPage = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "title1",
      content: "good!",
      isCompleted: false,
      createdAt: "2025-10-20T16:13:00",
    },
    {
      id: 2,
      title: "title2",
      content: "good!!",
      isCompleted: true,
      createdAt: "2025-10-25T15:30:00",
    },
    {
      id: 3,
      title: "title3",
      content: "good!!!",
      isCompleted: true,
      createdAt: "2025-10-25T15:00:00",
    },
    {
      id: 4,
      title: "title4",
      content: "good!!!!",
      isCompleted: false,
      createdAt: "2025-10-25T10:49:01",
    },
  ]);
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

  const handleToggle = (id, next) => {
    setTodos((prev) => {
      return prev.map((t) => (t.id === id ? { ...t, isCompleted: next } : t));
    });
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
