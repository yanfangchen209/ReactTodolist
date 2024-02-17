import React from 'react'
import Todoitem from './Todoitem';

export const Todolist = ({todolists}) => {
   

  return (
    <div>
        {todolists.map(item => <Todoitem key={item.id} task={item.task} id={item.id}/>)}
    </div>
  )
}

export default Todolist;
