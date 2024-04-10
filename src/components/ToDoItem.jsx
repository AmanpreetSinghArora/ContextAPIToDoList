import { useState } from "react"
import { useToDo } from "../contexts";

export default function ToDoItem({toDoObj}){

    // console.log(toDoObj);

    const[isEditable, setIsEditable] = useState(false);

    const[toDoText, setToDoText] = useState(toDoObj.toDoMsg);
     
    const {updateToDo,deleteToDo,toggleComplete} = useToDo()

    const editToDo = ()=>{
        updateToDo({toDoMsg:toDoText,...toDoObj},toDoObj.id)
        setIsEditable(false);
    }

    const toggleCompleted = ()=>{
        toggleComplete(toDoObj.id);
    }

    return(
        <>
            <div className={`toDo-item w-full ${toDoObj.complete ? "bg-green-400" : "bg-slate-300" } flex justify-evenly`}>
                <input type="checkbox" 
                    checked={toDoObj.complete}
                    onChange={toggleCompleted}
                />

                <input type="text"
                    readOnly={!isEditable}
                    className={`border outline-none w-full bg-transparent rounded-lg ${
                        isEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${toDoObj.complete ? "line-through" : ""}`}
                    value = {toDoText}
                    onChange={(e)=>{setToDoText(e.target.value)}}
                 />

                <div className="buttons">
                    <div className="btn1"> 
                        <button type="button" className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50" onClick={(e)=>{

                            if(toDoObj.complete) return;
                            
                            if(isEditable){
                                editToDo()
                            }else{
                                setIsEditable((prev)=>!prev)
                            }

                        }} disabled ={toDoObj.complete}> {isEditable ? "📁" : "✏️"}</button>
                    </div>
                </div>

            </div>
        </>
    )
}