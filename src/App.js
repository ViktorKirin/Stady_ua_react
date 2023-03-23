import Card from './components/Card';
import './App.css';
import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {
    const [NavMenu, setNavMenu] = useState([]);


    useEffect(() => {
        axios.get(`/categories.json`).then((response) => {            
            setNavMenu(response.data);
            // console.log(response)   
             console.log(response.data)                     
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    
    // console.log(NavMenu)

     return (
      <>
            <div className='container'>
          <h1>Popular topics</h1>
          <div className='NavMenu'>
          <p>All</p>
              {NavMenu.map((el, index) => {
                   return <li key={index}>{el.title}</li>
        })}
        </div>
 


        <div className='BlogCard'>
        <Card />
        </div>
      </div>
     
      </>
     )
   }

export default App


