export function Tasks(){
    
    function onSubmit(e){
        e.preventDefault();
    }

    return(
        <>
        <h1>+ Add New Task</h1>

        <form onSubmit={onSubmit}>
            <label>Task:</label>
            <input type="text"
            placeholder="e.g. Study React component"
             />

             <br /><br />

             <label>Category:</label>
             
             <select>
                <option value="Study">Study</option>
                <option value="Health">Health</option>
                <option value="Coding">Coding</option>
             </select>

             <br /><br />

             <label>Priority:</label>

             <select>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
             </select>

             <br /><br />

             <button>Create Task</button>



        </form>
        </>
    )
}