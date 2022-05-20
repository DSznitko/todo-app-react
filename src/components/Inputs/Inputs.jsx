import React from "react";
import "./Inputs.css";
import {} from "react-icons/fa";

const Inputs = () => {
  return (
    <div className="inputs">
      <div className="task-input">
        <input
          type="text"
          placeholder="Write your task"
          className="task-value"
        />
        <button className="add-task">Add task</button>
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
