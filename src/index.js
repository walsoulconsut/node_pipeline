import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList.js";
import './index.css';

function App() {
  return (
    <div className="flex items-center justify-center mt-72">
      <TodoList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
