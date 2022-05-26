import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Inputs from "./components/Inputs/Inputs";
import TaskList from "./components/TasksList/TaskList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [newTask, setNewTask] = useState([]);
  const [taskStatus, setTaskStatus] = useState("all");
  const [filterTasks, setFilterTasks] = useState([]);

  const filterTaskHandler = () => {
    if (taskStatus === "uncompleted") {
      setFilterTasks(newTask.filter((task) => task.completed === false));
    } else {
      setFilterTasks(newTask);
    }
  };

  useEffect(() => {
    filterTaskHandler();
  }, [newTask, taskStatus]);

  return (
    <div className="App">
      <Header />
      <Inputs
        taskStatus={taskStatus}
        setTaskStatus={setTaskStatus}
        newTask={newTask}
        setNewTask={setNewTask}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <TaskList
        filterTasks={filterTasks}
        setNewTask={setNewTask}
        newTask={newTask}
      />
    </div>
  );
}

export default App;
