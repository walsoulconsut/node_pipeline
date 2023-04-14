import React, { useReducer } from "react";
import uuid from "uuid";

function NewTodoForm({ task, createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: ""
    }
  );

  const handleChange = evt => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = { id: uuid(), task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="mt-4 flex flex-col">
      <label htmlFor="task" className="text-xl">New todo</label>
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
        className="border-2 border-black mb-2 px-4 py-2"
      />
      <button className="bg-green-700 text-white px-4 py-2">Add Todo</button>
      </div>
    </form>
  );
}

export default NewTodoForm;
