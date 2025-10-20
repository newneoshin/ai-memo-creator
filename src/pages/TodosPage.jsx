import { useState, useMemo } from "react";
import Logo from "../shared/components/Logo";
import TodoList from "../features/todos/components/TodoList";
import ListFilterBar from "../features/todos/components/ListFilterBar";

const TodosPage = () => {
  const todos = [
    { id: 1, title: "title1", content: "good!", isCompleted: false },
    { id: 2, title: "title2", content: "good!!", isCompleted: true },
    { id: 3, title: "title3", content: "good!!!", isCompleted: true },
    { id: 4, title: "title4", content: "good!!!!", isCompleted: false },
  ];
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
  }, [order]);

  return (
    <div>
      <Logo />
      <ListFilterBar onChange={setOrder} />
      <TodoList todos={filteredTodos} />
    </div>
  );
};

export default TodosPage;
