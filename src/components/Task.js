import React from 'react';
import '../style-sheets/Task.css';
import {AiFillCheckCircle} from "react-icons/ai";

function Task({ task, finished }){
    return (
      <div className={finished ? 'task-finished' : 'task-pending'}>
        <div className='task-text'>
          {'task'}
        </div>
          <AiFillCheckCircle className='task-icon'/>
      </div>
    )
}

export default Task;