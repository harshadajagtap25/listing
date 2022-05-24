import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos([...todos, { id: uuidv4(), value: newTodo }]);
  };

  const deleteTodo = (value) => {
    let newTodos = todos.filter((todo) => todo.value !== value);
    setTodos(newTodos);
  };
  return (
    <div>
      <TodoInput addTodo={addTodo} />
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
    </div>
  );
}

export default TodoApp;
