
import React from "react";
import "./index.css";
import { useState, useEffect } from 'react';

function ToDo({todo, toggleTask, removeTask}) {
   return (<>
   <div key={todo.id} className="itemToDo">
        <div 
            className={todo.complete ? "itemText strike" : "itemText"}
            onClick={()=> toggleTask(todo.id)}
        >
            {todo.task}
        </div>
        <button onClick={() => removeTask(todo.id)}>-</button>
    </div>
   </>

   )
}

export default ToDo
