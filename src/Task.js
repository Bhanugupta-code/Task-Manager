import React, { useState, useEffect } from 'react';
import './App.css';
import { FaPlus, FaArrowRight, FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import { MdPendingActions, MdTask } from 'react-icons/md';
import { LuListTodo } from 'react-icons/lu';

const Task = ({ sectionTitle, localStorageKey }) => {

  //   To fetch the data from local Storage.
  const getData = () => {
    const list = localStorage.getItem(localStorageKey);
    return list ? JSON.parse(list) : [];
  };

  const [selectedOption, setSelectedOption] = useState("");           //useState Hook for radio button value.  
  const [togg, setTogg] = useState(true);                             //useState Hook for toggle Add task button.
  const [data, setData] = useState('');                               //useState Hook for change data dynamically.
  const [description, setDescription] = useState('');                 //useState Hook for change description dynamically.
  const [dataModify, setDataModify] = useState('');                   //useState Hook for modify variable in modifyItem().
  const [dataList, setDataList] = useState(getData());                //useState Hook for List of task.
  const [toggle, setToggle] = useState(true);                         //useState Hook for toggle input buttin icon in modifying item.

  // Use for toggle Add task button.
  const addTask = () => {
    setTogg(!togg);
    document.getElementById(`${sectionTitle}-Add`).style.display = togg ? 'flex' : 'none';
    document.getElementById(`${sectionTitle}-Task`).innerHTML = togg ? "Cancel Task" : "Add Task";
  };

  // Use for Adding tasks to datalist.
  const addItem = () => {
    // To check input field is empty or not.
    if (!data) {
      alert('Please enter task name');
      return;
    }
    // To fill the input field during modifying data.
    if (!toggle) {
      setDataList(
        dataList.map((curelem) => {
          if (curelem.id === dataModify) {
            return { ...curelem, name: data, priority: selectedOption, descript: description };
          }
          return curelem;
        })
      );
      console.log(dataList);
    } else {
      const newTask = {
        id: new Date().getTime().toString(),
        name: data,
        priority: selectedOption,
        descript: description,
      };
      setDataList([...dataList, newTask]);
      console.log(dataList);
    }

    setData("");
    setDescription("");
    setToggle(true);
  };

  // To delete selected Task.
  const deleteItem = (curelem) => {
    const newList = dataList.filter((item) => item.id !== curelem.id);
    setDataList(newList);
  };

  // To get value for radio button.
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // To modify or edit selected Task.
  const modifyItem = (curelem) => {
    setData(curelem.name);
    setDescription(curelem.descript);
    setToggle(false);
    setDataModify(curelem.id);
    addTask();
  };

  // This is important because this is responsible to move task from 'Todolist --> in progress' and  'in progress --> Completed'
  const onClickHandler = (curelem) => {
    const selectedData = dataList.find((item) => item.id === curelem.id);

    // To select task.
    if (selectedData) {
      // Move from 'Todolist --> in progress'
      if (localStorageKey === "todoList") {
        const listed = JSON.parse(localStorage.getItem("inProgressList") || "[]");
        const updatedList = [...listed, selectedData];
        localStorage.setItem("inProgressList", JSON.stringify(updatedList));
        const newList = dataList.filter((item) => item.id !== curelem.id);
        setDataList(newList);
        alert("Task moved to 'In Progress'. Refresh to see changes.");
      }

      // move from 'in progress --> Completed'
      if (localStorageKey === "inProgressList") {
        const listed = JSON.parse(localStorage.getItem("CompletedList") || "[]");
        const updatedList = [...listed, selectedData];
        localStorage.setItem("CompletedList", JSON.stringify(updatedList));
        const newList = dataList.filter((item) => item.id !== curelem.id);
        setDataList(newList);
        alert("Task moved to 'Completed List'. Refresh to see changes.");
      }
      console.log("dhd");
    } else {
      console.error("Task not found!");
    }
  };


  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(dataList));
  }, [dataList, localStorageKey]);

  return (
    <div className="div">
      <h3>  {sectionTitle} {sectionTitle === "In Progress" 
      ?sectionTitle === "To Do" ?<LuListTodo  className='s'/> :  <MdPendingActions  className='s'/>
      :sectionTitle === "To Do" ?<LuListTodo className='s'/> :  <MdTask  className='s'/>}</h3>
      {dataList.map((curelem) => (
        <div className="task_manage" key={curelem.id}>
          {console.log(curelem)}
          <div className="Task_title">
            <h2>{curelem.name}</h2>
            <p>{curelem.descript}</p>
            <p id='p'>{curelem.priority}</p>
            <p></p>
          </div>
          <div className="task_button_group">
            <button className="task_button">
              <FaEdit onClick={() => modifyItem(curelem)} />
            </button>
            <button className="task_button">
              <FaTrash onClick={() => deleteItem(curelem)} />
            </button>
            <button className="task_button">
              <FaArrowRight onClick={() => onClickHandler(curelem)} />
            </button>
          </div>
        </div>
      ))}

      {/* For Adding the new task. */}
      <div className="Add_task">
        <div id={`${sectionTitle}-Add`} className="search Add">
          <div className="bs">
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} className="search_input Add_input" placeholder="Add task..."
            />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="search_input Add_input"
              placeholder="Description (optional)"
            />
            <label className='label'>
              <input type="radio" name="priority" value="High" checked={selectedOption === "High"} onChange={handleChange} />
              High
            </label>
            <label className='label'>
              <input type="radio" name="priority" value="Medium" checked={selectedOption === "Medium"} onChange={handleChange} />
              Medium
            </label>
            <label className='label'>
              <input type="radio" name="priority" value="Low" checked={selectedOption === "Low"} onChange={handleChange} />
              Low
            </label>
          </div>
          <div className="cs">
            {toggle ? (
              <FaPlus onClick={addItem} color="grey" size={45} className="icon center" />
            ) : (
              <FaEdit onClick={addItem} color="grey" size={45} className="icon center" />
            )}
          </div>
        </div>
        <button id={`${sectionTitle}-Task`} className="button" onClick={addTask}>
          Add task
        </button>
      </div>
    </div>
  );
};

export default Task;
