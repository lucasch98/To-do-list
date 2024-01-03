import "../styles/ListTasks.css";
import { MdDelete } from "react-icons/md";
import Table from 'react-bootstrap/Table';

const ListTasks = ({tasks, deleteTask}) =>{
  return(
    <div className="list-container">
      <Table striped bordered hover size="sm" variant="info" className="listTasks">
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.map((task, index) => ( //Chequeo que el array esta inicializado
          <>
            <tr key={index}>
              <td>{task}</td>
              <td>
                <MdDelete className="deleteIcon" onClick={() => deleteTask(index)}/>
              </td>
            </tr>
          </>
          ))}
        </tbody>
      </Table>
    </div>

    /*<Table striped bordered hover className="listTasks">
      <thead>
        <tr>
          <th>Task</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks && tasks.map((task, index) => ( //Chequeo que el array esta inicializado
        <>
          <tr key={index}>
            <td>{task}</td>
            <td>
              <MdDelete className="deleteIcon" onClick={() => deleteTask(index)}/>
            </td>
          </tr>
        </>
        ))}
      </tbody>
    </Table>*/
    );
}

export default ListTasks;