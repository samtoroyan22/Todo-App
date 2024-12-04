import Todo from "./Todo";

function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  return (
    <div>
      {todos.length ? (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        ))
      ) : (
        <h2>List is empty</h2>
      )}
    </div>
  );
}

export default TodoList;
