
import React from "react";
import "./index.css";
import axios from 'axios';
import { useState, useEffect } from 'react';

function Card({categoriesID}) {
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

            const aktuelleDate = new Date (el.published_at).toLocaleDateString();

            return <div className="Blog" key={index}>
                <img src={el.image} className="blogImgage"></img>
                <div className="category">{el.category.title}</div>
                <div className="dateOfBlog"> {aktuelleDate}</div>
                <h2 className="title">{el.title}</h2>
                <div className="description">{el.description}</div>
                    <div className="personeConteiner">
                        <img src={el.author.avatar} className='avatar'></img>
                        <div className="personeName">
                            <p className="Name">{el.author.name}</p>
                            <p className="position">{el.author.position}</p>
                        </div>

                    </div>
            
            </div>

        }

    )}
    </>
    )
}

export default Card
