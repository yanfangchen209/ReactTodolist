import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './Newform.css'

//parent component
export const Newform = ({onAdd}) => {
    const [task, setTask] = useState("");
    const [taskIsValid, setTaskIsValid] =  useState(true);


    const changeHandler = (e) => {
      if(e.target.value.trim().length > 0){
        setTaskIsValid(true);
      }
        setTask(e.target.value);
    }
    /**
In the uuid library, v4 refers to the version 4 UUIDs. Version 4 UUIDs are randomly
 generated and have 122 bits of randomness. They are generated using random or pseudo-random 
 numbers. */
    const addHandler = (e) => {
        e.preventDefault();
        if(task.trim().length === 0){
          setTaskIsValid(false);
          return;
        }
        const newData = {id: uuidv4(), task: task};
        onAdd(newData);
        setTask("");
    }
  return (
    <form className='add-form' onSubmit={addHandler}>
        <input className={`form-input ${!taskIsValid ? "invalid": ""}`} type="text" value={task} 
               placeholder='enter your task here' onChange={changeHandler}></input>
        <button className='input-submit-button'>Add Task</button>
    </form>
  )
}

export default Newform;
