import "../styles/ListTasks.css";
import { MdDelete } from "react-icons/md";

const ListTasks = ({tasks, deleteTask}) =>{
  return(
    <div className="listTasks">
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.map((task, index) => ( //Chequeo que el array esta inicializado
            <tr key={index}>
              <td>{task}</td>
              <tr>
                <MdDelete className="deleteIcon" onClick={() => deleteTask(index)}/>
              </tr>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
}

export default ListTasks;