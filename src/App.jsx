import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ToDoProvider} from "./contexts"
import {ToDoItem,InputToDo} from "./components"
import { useEffect } from 'react'

function App() {

const [allToDo,setAllToDo] = useState([]);

const addToDo = (toDo)=>{
  setAllToDo((prevAllToDO)=>([{id:Date.now(),...toDo},...prevAllToDO]));
 // console.log(toDo);
}


const updateToDo = (toDo,id)=>{
  setAllToDo((prevAllToDO) => prevAllToDO.map((ToDoObj) => (ToDoObj.id === id ? toDo : ToDoObj )))
  //console.log(toDo);
}

const deleteToDo = (id)=>{
  setAllToDo((prevAllToDO) => prevAllToDO.filter((toDoObj) => toDoObj.id !== id ));
}

const toggleComplete = (id)=>{
    setAllToDo((prevAllToDO)=>(prevAllToDO).map((toDoObj)=> toDoObj.id === id ? {...toDoObj,complete: !toDoObj.complete } : toDoObj))
}
  
  return (
    <ToDoProvider value ={{allToDo,addToDo,updateToDo,deleteToDo, toggleComplete}}>

    <div className="container h-full w-full bg-purple-400 flex flex-col gap-2 items-center md:w-dvw">
      <div className="input-form w-2/5 mt-5">
        <InputToDo/>
      </div>
      <div className="toDo-items w-2/6">
      {allToDo.map((toDoObj) => (         
                          <div key={toDoObj.id}
                          className='w-full'
                          >
                            <ToDoItem toDoObj={toDoObj} />
                          </div>
                        ))}
      </div>
    </div>

  </ToDoProvider>
  )
}

export default App
