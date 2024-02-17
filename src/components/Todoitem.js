import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState}from 'react'
import Editform from './Editform';

export const Todoitem = ({id, task, onDelete, onEdit}) => {

  const [isEditing, setIsEditing] = useState(false);

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


  return (
    <div className='todo'>
      {isEditing ? <Editform id={id} task={task} onCancel={editCancelHandler} onSave={editSaveHandler}/>:
      <div>
          <span>{task}</span>
          <FontAwesomeIcon icon={faPencil} onClick={editClickHandler}/>
          <FontAwesomeIcon icon={faTrash} onClick={deleteHandler}/> 
      </div>
              
    }

 
    </div>

  )
}

export default Todoitem;
