import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Inputs from "./components/Inputs/Inputs";
import TaskList from "./components/TasksList/TaskList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [newTask, setNewTask] = useState([]);

  return (
    <div className="App">
      <Header />
      <Inputs
        inputValue={inputValue}
        newTask={newTask}
        setNewTask={setNewTask}
        setInputValue={setInputValue}
      />
      <TaskList setNewTask={setNewTask} newTask={newTask} />
    </div>
  );
}

export default App;
