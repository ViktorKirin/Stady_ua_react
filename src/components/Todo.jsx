
import React from "react";
import "./index.css";
import { useState, useEffect } from 'react';

function ToDo({todo, toggleTask, removeTask}) {
   return (<>
   <div key={todo.id} className="itemToDo">
    <input type="checkbox" id="checkbox" class="taskCheckbox" name="checkbox"/>
        <div 
            className={todo.complete ? "itemText strike" : "itemText"}
            onClick={()=> toggleTask(todo.id)}
        >
            {todo.task}
        </div>
        <button className="removeTaskBtn" onClick={() => removeTask(todo.id)}>-</button>
    </div>
   </>

   )
}

export default ToDo
