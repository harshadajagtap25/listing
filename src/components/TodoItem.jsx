import React from "react";
import styles from'./TodoApp.module.css'

function TodoItem({ todo, deleteTodo }) {
  // console.log("item todo",todo)

  return (
    <div  >
      <li className={styles.item}>
        {todo.value}
        <button
        className={styles.deletebtn}
          onClick={() => {
            deleteTodo(todo.id);

          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default TodoItem;
