import React from "react";

import { AddTask } from "./components";

import "./assets/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="tasksApp">
          <AddTask />
        </div>
      </header>
    </div>
  );
}

export default App;
