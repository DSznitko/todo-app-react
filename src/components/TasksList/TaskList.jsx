import React from "react";
import "./TaskList.css";
import NewTask from "../NewTask/NewTask";

const TaskList = ({ newTask, setNewTask, filterTasks }) => {
  return (
    <div>
      <ul className="tasks-list">
        {filterTasks.map((task) => (
          <NewTask
            setNewTask={setNewTask}
            newTask={newTask}
            task={task}
            key={task.id}
            text={task.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
