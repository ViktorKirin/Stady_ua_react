import Card from './components/Card';
import './App.css';
import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';



function App() {

    const [NavMenu, setNavMenu] = useState([]);
    const [categoriesID, setCategoriesID] = useState ([])
    console.log(categoriesID)

    function filterCategori (el) {
        return setCategoriesID(el.id)
    }
    console.log(categoriesID)

    useEffect(() => {
        axios.get(`/categories.json`).then((response) => {            
            setNavMenu(response.data);
            // console.log(response)   
            //  console.log(response.data)                     
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
          <a href='/'>All</a>
              {NavMenu.map((el, index) => {
                   return (
                    <li>
                    <a 
                       href='/' key={index} 
                       value={el.title} 
                       onClick={filterCategori} 
                       >
                        {el.title}
                    </a>
                    </li>
                   )
        })}


        </div>
 
        <div className='BlogCard'>
        <Card categoriesID={categoriesID}/>
        </div>
      </div>
     
      </>
     )
   }

export default App




//https://codesandbox.io/s/r5x4i?file=/services/services.js