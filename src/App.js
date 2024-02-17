import React, {useState} from 'react';
import Newform from './components/Newform';
import Todolist from './components/Todolist';

function App() {
  const [data, setData] = useState([{id: "e1", task: "swimming"}, {id: "e2", task: "reading"}]);
  const addHandler = (newData) => {
    setData(prevData => [newData, ...prevData]);
  }

  return (
    <div>
      <Newform onAdd={addHandler} />
      <Todolist todolists={data}/>

    </div>
  );
}

export default App;
