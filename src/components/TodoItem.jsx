import React from "react";
import styles from'./TodoApp.module.css'

function TodoItem({ value, deleteTodo }) {
  return (
    <div  >
      <li className={styles.item}>
        {value}
        <button
        className={styles.deletebtn}
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
