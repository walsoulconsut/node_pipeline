import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm"

function TodoList() {
  const [todos, setTodos] = useState([
  ]);

  const create = newTodo => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const remove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const update = (id, updtedTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos.map(todo => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <div className="flex items-center justify-center">
      <div> 
      <h1 className="text-4xl mb-4 flex justify-center">
        Todo List
      </h1>
     
      <ul>{todosList}</ul>
       
      
    <NewTodoForm createTodo={create} />
   </div>
    </div>
  );
}

export default TodoList;
