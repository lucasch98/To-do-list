import { useState } from "react";
import "../styles/InputTask.css";

const InputTask = ({addTask}) =>{
  const [task, setTask] = useState("");

//Update state task
const handleInput = (event) =>{
  setTask(event.target.value);
}

//Send new task to TableTaks with function "addTask"
const handleNewTask = (event) => {
  event.preventDefault();
  if(task !== ""){
    addTask(task);
    setTask("");
  }else{
    alert("Type a valid task");
    if(task === ""){
      setTask('');
    }
  }
}

  return(
    <>
    <form id="formTask" onSubmit={handleNewTask}>
      <div className="rowTask">
        <input 
          type="text" 
          className="InputTaskText"
          placeholder="Insert task..."
          onChange={handleInput}
          value={task}
        />
        <button className="buttonAddTask">Add</button>
      </div>
      <div id="success-message" className="success-message">¡New task added successfully!</div>
    </form>
      <div id="delete-message" className="delete-message">¡Task deleted successfully!</div>
    </>
  );
}

export default InputTask;