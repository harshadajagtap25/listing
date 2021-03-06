import React, { useState } from "react";
  import styles from'./TodoApp.module.css'
function TodoInput({ addTodo }) {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Write Something"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
      className={styles.button}
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
        +
      </button>
    </div>
  );
}

export default TodoInput;
