import React, { useState } from "react";

function TodoInput({addTodo}) {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="New todo item"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(value);
          setValue("")
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoInput;
