import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo }) {
  return (
    // <div>
    //   <h3>Here is your TodoList</h3>
    //   {children}
    // </div>
    <div>
      <h3>Here is your TodoList</h3>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} value={todo.value} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
