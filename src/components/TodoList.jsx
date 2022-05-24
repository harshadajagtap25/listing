import React from "react";
import TodoItem from "./TodoItem";
import styles from'./TodoApp.module.css'

function TodoList({ todos, deleteTodo }) {

  // console.log("List todos",todos)
  return (
    // <div>
    //   <h3>Here is your TodoList</h3>
    //   {children}
    // </div>
    <div >
      <ul  >
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
