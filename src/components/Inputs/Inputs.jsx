import React from "react";
import "./Inputs.css";
import {} from "react-icons/fa";

const Inputs = ({
  setInputValue,
  inputValue,
  newTask,
  setNewTask,
  taskStatus,
  setTaskStatus,
}) => {
  const taskStatusHandler = (e) => {
    setTaskStatus(e.target.value);
  };

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const newTaskHandler = () => {
    if (inputValue === "") {
      return;
    } else {
      setNewTask([
        ...newTask,
        { text: inputValue, completed: false, id: Math.random() * 1000 },
      ]);
    }

    setInputValue("");
  };

  return (
    <div className="inputs">
      <div className="task-input">
        <input
          onChange={inputValueHandler}
          type="text"
          value={inputValue}
          placeholder="Write your task"
          className="task-value"
        />
        <button onClick={newTaskHandler} className="add-task">
          Add task
        </button>
      </div>
      <select onChange={taskStatusHandler} className="select-category">
        <option value="all" className="category">
          All
        </option>
        <option value="uncompleted" className="category">
          Uncompleted
        </option>
      </select>
    </div>
  );
};

export default Inputs;
