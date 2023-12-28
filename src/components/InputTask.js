import { useState } from "react";
import "../styles/InputTask.css"

const InputTask = props => {
  const { handleAddItem } = props;
  const [task, setNewTask] = useState("");

   const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target.value);
    
    handleAddItem({
      id: Math.floor(Math.random() * 1000),
      done: false,
      value: task
    });
    setNewTask("");
  };

  return(
    <form onSubmit={handleSubmit}>
      <div className="todo-list-input">
        <input id="InputTask" 
              type="text" 
              value={task} 
              placeholder="Insert task..."
              onChange={e => setNewTask(e.target.value)}/>
        &nbsp;
        <button type="submit" disabled={task ? "" : "disabled"} >Add Task</button> 
      </div>
    </form>
  );
}

export default InputTask;