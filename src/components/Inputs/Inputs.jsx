import React from "react";
import "./Inputs.css";
import {} from "react-icons/fa";

const Inputs = ({ setInputValue, newTask, setNewTask, inputValue }) => {
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const newTaskHandler = () => {
    setNewTask([
      ...newTask,
      {
        text: inputValue,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputValue("");
  };

  return (
    <div className="inputs">
      <div className="task-input">
        <input
          value={inputValue}
          onChange={inputHandler}
          type="text"
          placeholder="Write your task"
          className="task-value"
        />
        <button onClick={newTaskHandler} className="add-task">
          Add task
        </button>
      </div>
      <select className="select-category">
        <option value="All" className="category">
          All
        </option>
        <option value="Completed" className="category">
          Completed
        </option>
        <option value="Uncompleted" className="category">
          Uncompleted
        </option>
      </select>
    </div>
  );
};

export default Inputs;
