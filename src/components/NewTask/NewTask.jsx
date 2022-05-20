import React from "react";
import "./NewTask.css";
import { FaCheck, FaTrash } from "react-icons/fa";

const NewTask = ({ text, setNewTask, task, newTask }) => {
  const deleteTaskHandler = () => {
    setNewTask(newTask.filter((el) => el.id !== task.id));
  };

  return (
    <div className="task-container">
      <div className="new-task">
        <li className="task-name">{text}</li>
        <div className="buttons">
          <button className="check">
            <FaCheck />
          </button>
          <button onClick={deleteTaskHandler} className="delete">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
