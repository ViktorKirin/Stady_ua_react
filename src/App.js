
import './App.css';
import React from "react";
import { useState, useEffect } from 'react';
import ToDo from './components/Todo';
import ToDoForm from './components/TodoForm';




function App() {
  const [todos, setTodos] = useState([])


function addTask (userInput) {
  if(userInput) {
    const newItem = {
      id: Math.random(),
      task: userInput,
      complete: false,
    }
    setTodos([newItem,...todos])
  }
}

function removeTask (id) {
  setTodos([...todos.filter((todo) => todo.id !== id)]);
}

function handleToggle (id) {
  setTodos([
    ...todos.map((task) =>
      task.id === id ? { ...task, complete: !task.complete } : { ...task }
    )
  ]);
}

     return (
      <div className='container'>
        <>
        <h1 className='topic'> ToDo List </h1>
      <ToDoForm addTask={addTask}/>
      {todos.map((todo) => {
        return (
          <ToDo
          todo={todo}
          key={todo.id}
          toggleTask={handleToggle}
          removeTask={removeTask}
          />
        )

      })}
        </>
      </div>

     )
   }

export default App
