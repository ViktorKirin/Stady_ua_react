
import React from "react";
import "./index.css";
import axios from 'axios';
import { useState, useEffect } from 'react';

function Card() {
    const [dataCard, setCardData] = useState([]);

    useEffect(() => {
        axios.get(`/articles.json`).then((response) => {            
            setCardData(response.data);
            // console.log(response)   
             console.log(response.data)                     
        }).catch((err) => {
            console.log(err);
        })
    }, [])

             console.log(dataCard)   
    return (
    <>
        {dataCard.map((el, index) => {
            return <div className="Blog" key={index}>
                <img src={el.image} className="blogImgage"></img>
                <div className="category">{el.category.title}</div>
                <div className="dateOfBlog">{el.published_at}</div>
                <h2 className="title">{el.title}</h2>
                <div className="description">{el.description}</div>
                    <div className="personeConteiner">
                        <img src={el.author.avatar} className='avatar'></img>
                        <div>
                            <p className="personeName">{el.author.name}</p>
                            <p className="personePosition">{el.author.position}</p>
                        </div>

                    </div>
            
            </div>

        }

    )}
    </>
    )
}

export default Card
