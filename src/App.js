import React, {useState} from 'react';
import Newform from './components/Newform';
import Todolist from './components/Todolist';
import './App.css';

function App() {
  const [data, setData] = useState([{id: "e1", task: "swimming"}, {id: "e2", task: "reading"}]);
  const addHandler = (newData) => {
    setData(prevData => [newData, ...prevData]);
  }

  const deleteHandler = (id) => {
    const deleteConfirmation = window.confirm("Are you sure to delete this item?");
    if(deleteConfirmation){
      setData(prevData => prevData.filter(item => id !== item.id))};
    }
     //if cancel, do nothing.
  const editHandler = (id, newData) => {
    setData(prevData => prevData.map(item => item.id === id ? {...item, ...newData}  : item))
  }

  return (
    <div>
      <Newform onAdd={addHandler} />
      <Todolist todolists={data} onDelete={deleteHandler} onEdit={editHandler}/>

    </div>
  );
}

export default App;
