import React from "react";
import "./TaskList.css";
import NewTask from "../NewTask/NewTask";

const TaskList = ({ newTask, setNewTask }) => {
  return (
    <div>
      <ul className="tasks-list">
        {newTask.map((task) => (
          <NewTask
            task={task}
            setNewTask={setNewTask}
            newTask={newTask}
            text={task.text}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
