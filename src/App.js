import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import TodoApp from "./components/TodoApp";
import CardApp from "./components/CardApp";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      {/* toggle todo and counter app */}
      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? <Counter /> : <TodoApp />} */}

      {/* <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide Todo App" : "Show Counter App"}
      </button>
      {toggle ? <Counter /> : <TodoApp/>} */}

      {/* Card app */}
      <CardApp className="card"/>

    </div>
  );
}

export default App;
