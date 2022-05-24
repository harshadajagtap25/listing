import React from "react";

function TodoItem({ value, deleteTodo }) {
  return (
    <div>
      <li>
        {value}
        <button
          onClick={() => {
            deleteTodo(value);

          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default TodoItem;
