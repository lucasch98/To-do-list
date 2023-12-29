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
    <form onSubmit={handleNewTask}>
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
    </form>
  );
}

export default InputTask;