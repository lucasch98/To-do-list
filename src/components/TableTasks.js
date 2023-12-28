import { useState } from "react";
import InputTask from "./InputTask.js"
import ListTask from "./ListTasks.js"

const TableTasks = () => {
  const [listTasks, setNewListTask] = useState([]);

  const handleAddItem = newItem =>{
    setNewListTask([...listTasks, newItem]);
  };

  return (
    <>
      <InputTask handleAddItem={handleAddItem}/>
      <ListTask listTasks={listTasks} setNewListTask={setNewListTask} />
    </>
  );
};

export default TableTasks;