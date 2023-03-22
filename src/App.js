
import './App.css';
import React from "react";
import LeftSide from './components/left_side/leftSide';
import RightSide from './components/right_side/inputs/rightSide';



function App() {
     return (
      <div className='container'>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </div>

     )
   }

export default App
