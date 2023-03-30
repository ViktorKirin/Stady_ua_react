import React from "react";
import "./index.css";
import { useState, useEffect } from 'react';

function ToDoForm({addTask}) {
    const [userInput, setUserInput]= useState('')

    function handleChange(e) {
        setUserInput(e.currentTarget.value)
    } 
    
    function handelSumbit(e) {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    } 

    function handleKeyPress(e) {
        if(e.key === "Enter") {
            handelSumbit(e)
        }
    } 


   return (
    <form onSubmit={handelSumbit}>
        <input
            className="input"
            value={userInput}
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="add Task"
        />
        <button className="addTaskBtn">+</button>
    </form>
   )
}

export default ToDoForm
