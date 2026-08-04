import tasksData from "../data/db";
import { useState } from "react";

export function Handler(){
    const [ tasks, setTasks ] = useState(tasksData);
    function Handler(){
        
    }
   

    return(
        <>
        <div>
        <h3>Task Dashboard</h3>
        {tasks.map((items)=>(
            <>
            <p>{tasks.category}</p>
            <p>{tasks.priority}</p>
            </>
        ))}
        </div>

        </>
    );
}