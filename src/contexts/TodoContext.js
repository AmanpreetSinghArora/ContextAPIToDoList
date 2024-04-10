import { useContext } from "react";
import { createContext } from "react";

export const ToDoContext = createContext({
    allToDo:[
        {
            id:1,
            toDoMsg:"Msg",
            complete:false
        }
    ],
    addToDo:(toDo)=>{},
    updateToDo:(toDo,id)=>{},
    deleteToDo:(id)=>{},
    toggleComplete:()=>{}
});

export const ToDoProvider = ToDoContext.Provider;

export const useToDo = ()=>{
    return useContext(ToDoContext);
}