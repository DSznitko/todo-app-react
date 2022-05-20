import "./App.css";
import Header from "./components/Header/Header";
import Inputs from "./components/Inputs/Inputs";
import TaskList from "./components/TasksList/TaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <Inputs />
      <TaskList />
    </div>
  );
}

export default App;
