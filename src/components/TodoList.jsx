import React from "react";
import TodoItem from "./TodoItem";
import styles from'./TodoApp.module.css'

function TodoList({ todos, deleteTodo }) {
  return (
    // <div>
    //   <h3>Here is your TodoList</h3>
    //   {children}
    // </div>
    <div >
      <ul  >
        {todos.map((todo) => (
          <TodoItem key={todo.id} value={todo.value} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
