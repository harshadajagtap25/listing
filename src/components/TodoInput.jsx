import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="New todo item"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        disabled={!value} //button wil be disables if there is no value
        onClick={() => {
          //this will not add empty todo
          if (value) {
            addTodo(value);
            setValue("");
          }
          // else {
          //   alert("Please add atleast one todo");
          // }
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoInput;
