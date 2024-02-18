import React from 'react'
import Todoitem from './Todoitem';


export const Todolist = ({todolists, onDelete, onEdit}) => {
   

  return (
    <div className='to do lists'>
        {todolists.map(item => <Todoitem key={item.id} task={item.task} id={item.id} onDelete={onDelete} onEdit={onEdit}/>)}
    </div>
  )
}

export default Todolist;
