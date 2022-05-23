import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import TodoApp from './components/TodoApp';

function App() {
  const [toggle,setToggle] = useState(false)
  return (
    <div className="App">
      <button onClick={()=> setToggle(!toggle)} >Toggle</button>
      {toggle ? <Counter/> : <TodoApp/> }
    </div>
  );
}

export default App;
