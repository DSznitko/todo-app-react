import React from "react";
import "./NewTask.css";
import { FaCheck, FaTrash } from "react-icons/fa";

const NewTask = ({ text, setNewTask, task, newTask }) => {
  const deleteTaskHandler = () => {
    setNewTask(newTask.filter((el) => el.id !== task.id));
  };

  const checkTaskHandler = () => {
    setNewTask(
      newTask.map((el) => {
        if (el.id === task.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <div className="task-container">
      <div className="new-task">
        <li className={`task-name ${task.completed ? "completed" : ""}`}>
          {text}
        </li>
        <div className="buttons">
          <button onClick={checkTaskHandler} className="check">
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
