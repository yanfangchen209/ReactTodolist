import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export const Todoitem = ({id, task}) => {
  return (
    <div className='todo'>
        <span>{task}</span>
            <FontAwesomeIcon icon={faPencil}/>
            <FontAwesomeIcon icon={faTrash} />     
    </div>

  )
}

export default Todoitem;
