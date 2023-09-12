import React from "react";
import {AiFillFileAdd} from "react-icons/ai";
import '../style-sheets/FormTask.css';

function formTask(){
  return(
    <form className="form-task">
      <div>
        <input 
          className="input-task"
          type="text"
          placeholder="Task..."
          name="textInput"
        />
          <AiFillFileAdd className="button-add-task"/>
      </div>
    </form>
  )
}