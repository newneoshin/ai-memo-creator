import TodoCell from "./TodoCell";

const TodoList = ({ todos, onToggle }) => {
  return (
    <div className="bg-gray-50">
      {todos.map((item) => {
        return <TodoCell key={item.id} todo={item} onToggle={onToggle} />;
      })}
    </div>
  );
};

export default TodoList;
