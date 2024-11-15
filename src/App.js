import React, { useState } from 'react';
import './App.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Task from './Task';

const App = () => {
  const [data, setData] = useState("");
  const search = () => {
    const Todolist =  JSON.parse(localStorage.getItem("todoList") || "[]");
    const inProgressList = JSON.parse(localStorage.getItem("inProgressList") || "[]");
    const completedList = JSON.parse(localStorage.getItem("CompletedList") || "[]");

    const names = inProgressList.map((item) => item.name);
    const found = names.find(item => item === data);
    const index = names.indexOf(data);

    const names2 = completedList.map((item) => item.name);
    const found2 = names2.find(item => item === data);
    const index2 = names2.indexOf(data);

    const names3 = Todolist.map((item) => item.name);
    const found3 = names3.find(item => item === data);
    const index3 = names3.indexOf(data);

    if (found) {
      alert(`Task Found in In progress index ${index + 1}`);
    }
    else if (found2) {
      alert(`Task Found in Completed list index ${index2 + 1}`);
    }
    else if (found3) {
      alert(`Task Found in Todo list index ${index3 + 1}`);
    }
    else {
      alert("Task not Found");
    }
    setData("");
  };

  return (
    <div className="container">
      <div className="container2">

        {/*        Navbar      */}
        <nav>
          <h1 className="taskhead">Task Manager</h1>
          <div className="searchCont">
            <div className="search">
              <input type="text" onChange={(e) => setData(e.target.value)} id='search' className="search_input" value={data} placeholder="Search task..." />
              <FaMagnifyingGlass color="grey" className="icon" onClick={search} />
            </div>
          </div>
        </nav>


        <hr />

        {/*     Main container     */}

        <div className="container3">
          <div className="show_task">
            <div className="container4">
              {/* Independent To Do Section */}
              <Task sectionTitle="To Do" localStorageKey="todoList" />
              {/* Independent In Progress Section */}
              <Task sectionTitle="In Progress" localStorageKey="inProgressList" />
              {/* Independent complete Section */}
              <Task sectionTitle="Completed" localStorageKey="CompletedList" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
