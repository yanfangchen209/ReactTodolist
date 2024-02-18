import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState}from 'react'
import Editform from './Editform';
import './Todoitem.css';

export const Todoitem = ({id, task, onDelete, onEdit}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const deleteHandler = () => {
    onDelete(id);
  }
  const editClickHandler = () => {
    setIsEditing(true);
  }

  //pass to EditForm, onSave
  const editSaveHandler = (newData) => {
    onEdit(id, newData);
    setIsEditing(false);
  }

  //pass to EditForm, onCancel
  const editCancelHandler = () => {
    setIsEditing(false);
  }

  const toggleCompleted = () => {
      setIsComplete(!isComplete);
  }

/**  React itself doesn't have a direct method like event.target.classList.toggle() because 
 * React encourages a different approach for managing component state and styles.
 * ev.target.classList.toggle('checked');
 * */
  return (

    <div className='todo'>
      {isEditing ? <Editform id={id} task={task} onCancel={editCancelHandler} onSave={editSaveHandler}/>
      :
      <div className={`todoitem ${isComplete ? "complete" : ""}`}>
          <h4 className="tasktext" onClick={toggleCompleted}>{task}</h4>
          <FontAwesomeIcon icon={faPencil} onClick={editClickHandler}/>
          <FontAwesomeIcon icon={faTrash} onClick={deleteHandler}/> 
      </div>   
      }
    </div>
  )
  }
  

export default Todoitem;
