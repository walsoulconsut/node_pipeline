import React, { useState } from "react";

function Todo({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleClick = evt => {
    remove(evt.target.id);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = evt => {
    evt.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = evt => {
    setTask(evt.target.value);
  };
  const toggleCompleted = evt => {
    toggleComplete(evt.target.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="">
        <form className="flex gap-2" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" className="flex-grow-0 p-2 border-2 border-black" />
          <button className="px-4 py-2 bg-green-900 text-white rounded-xl ">Save Text</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="flex items-center gap-10 mt-5">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={"text-2xl"}
        >
          {todo.task}
        </li>
        <div className="flex gap-5">
          <button onClick={toggleFrom} className="px-4 py-2 bg-blue-900 text-white rounded-xl">
           Edit
          </button>
          <button id={todo.id} onClick={handleClick} className="px-4 py-2 bg-red-900 text-white rounded-xl">
            Delete
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default Todo;
