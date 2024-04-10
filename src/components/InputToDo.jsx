import { useState } from "react"
import { useToDo } from "../contexts"


export default function InputToDo(){

    const [taskToDo, setTaskToDO] = useState("");  //text enter in input form

    const {addToDo}  = useToDo()  //context use 

    const submitForm = (e)=>{
        e.preventDefault()
        addToDo({toDoMsg:taskToDo,complete:false });
        setTaskToDO("");
    }

    return(
        <>
            <div className="addInput">
                <form className="flex gap-5">
                    <input type="text"
                        name="task" 
                        placeholder="Enter task"
                        onChange={(e)=>(setTaskToDO(e.target.value))}
                        className="w-full bg-white p-2"
                        value={taskToDo}
                    />
                    <button type="button" onClick={submitForm} className="bg-gray-400 w-auto h-auto p-2 rounded-lg">
                        AddToDO
                    </button>
                </form>
            </div>
        </>
    )
}