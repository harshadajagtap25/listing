import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import styles from './TodoApp.module.css'
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos([...todos, { id: uuidv4(), value: newTodo }]);
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className={styles.todolist}>
      
      {/* <TodoList>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              value={todo.value}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </TodoList> */}
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <TodoInput addTodo={addTodo} />
    </div>
  );
}

export default TodoApp;
