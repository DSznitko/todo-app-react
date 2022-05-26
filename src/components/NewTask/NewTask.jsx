import React from "react";
import "./NewTask.css";
import { FaCheck, FaTrash } from "react-icons/fa";

const NewTask = ({ text, task, newTask, setNewTask }) => {
  const deleteTaskHandler = () => {
    setNewTask(newTask.filter((el) => el.id !== task.id));
  };

  const checkTaskHandler = () => {
    setNewTask(
      newTask.map((item) => {
        if (item.id === task.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="task-container">
      <div className="new-task">
        <li className={`task-name ${task.completed && "completed"}`}>{text}</li>
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
