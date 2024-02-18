import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './Editform.css';

export const Editform = ({id, task, onSave, onCancel}) => {
    const [editedTask, setEditedTask] = useState(task);
    const [editedTaskIsValid, setEditedTaskIsValid] =  useState(true);


    const editChangeHandler = (e) => {
      if(e.target.value.trim().length > 0){
        setEditedTaskIsValid(true);
      }
        setEditedTask(e.target.value);
    }
    /**
In the uuid library, v4 refers to the version 4 UUIDs. Version 4 UUIDs are randomly
 generated and have 122 bits of randomness. They are generated using random or pseudo-random 
 numbers. */
    const saveHandler = (e) => {
        e.preventDefault();
        if(editedTask.trim().length === 0){
          setEditedTaskIsValid(false);
          return;
        }
        onSave({id: uuidv4(), task: editedTask});
    }
  return (
    <form className='edit-form' onSubmit={saveHandler}>
        <input className={`edit-form-input ${!editedTaskIsValid ? "invalid": ""}`} type="text" value={editedTask} 
                onChange={editChangeHandler}></input>
        <button className='edit-save-button'>Save</button>
        <button className='edit-cancel-button' onClick={onCancel}>Cancel</button>
    </form>
  )
}

export default Editform;