import { useState } from "react";
import InputTask from "./InputTask.js"
import ListTasks from "./ListTasks.js"
import "../styles/TableTasks.css";  

const TableTasks = () =>{
  const [tasks, setTasks] = useState([]);

  //Add new task to listTasks
  const addTask = (task) =>{
    setTasks([...tasks, task]);
    console.log(tasks);
  }

  /*const updateTask = () => {
    
  }*/

  //Delete task in the index of array
  const deleteTask = (indexTask) => {
    //if(alert("Are you sure to delete this task?")) 
     //   setTasks(tasks.splice(1, indexTask));
    // MOSTRAR MENSAJE DE ESTAS SEGURO DE QUE QUERES BORRAR ESTA TAREA?
    if(window.confirm("Are you sure to delete this task?")){
      const newTasks = [...tasks]
      newTasks.splice(indexTask, 1)
      setTasks(newTasks)
    }
    
  }

  return(
    <div className="conteinerMain">
      <InputTask addTask={addTask}/>
      <ListTasks tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default TableTasks;