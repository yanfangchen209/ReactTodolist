import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

//parent component
export const Newform = ({onAdd}) => {
    const [task, setTask] = useState("");
    const changeHandler = (e) => {
        setTask(e.target.value);
    }
    const addHandler = (e) => {
        e.preventDefault();
        const newData = {id: uuidv4(), task: task};
        onAdd(newData);
        setTask("");
    }
  return (
    <form className='add-form' onSubmit={addHandler}>
        <input type="text" value={task} placeholder='enter your task' onChange={changeHandler}></input>
        <button>Add Task</button>
    </form>
  )
}

export default Newform;
