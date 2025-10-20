const TodoList = ({ todos }) => {
  return (
    <div className="bg-gray-50">
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <hr />
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
