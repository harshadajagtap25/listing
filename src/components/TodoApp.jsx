import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const addTodo = (newTodo)=>{
        setTodos([...todos,newTodo])
    }
  return (
    <div> 
        
        <TodoInput addTodo={addTodo} />
        <TodoList/>
    </div>
  )
}

export default TodoApp