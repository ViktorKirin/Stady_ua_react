import React from "react";
import "./index.css";
import Button from "../buttons/buttons";
import { useState } from 'react'

function RightSide() {
    const [text, setText] =useState ('');

    const [email, setEmail] =useState ('');

    const [password, setPassword] =useState ('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('name:', text);
        console.log('email:', email);
        console.log('password:', password);
      }

      function validateName(text) {
        if(text.length === 0){
            return false;
        }
        if((text.length <=2 ) || /[0-9]/.test(text)) {
            // console.log(text)
            return true;
        } 
        else {
            return false;
        }
    }


    function validateEmail(email) {
        if(email.length === 0){
            return false;
        }
        if(email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
            // console.log(email)
            return false;
        } 
        else {
            return true;
        }
    }

    function validatePassword(password) {
        if(password.length === 0){
            return false;
        }
        if(password.length <= 8) {
            // console.log(password)
            return true;
    } else {
        return false;
    }
}

        return (
           <div className="rightContainer">
                <h2 className="createAccount">Create an account</h2>
                <p className="informationForTrial">Let’s get started with your 30 days free trial</p>

                <form className="form" onSubmit={handleSubmit}>

                    <label htmlFor="name">Name</label><br />
                    <input  
                    type="text" 
                    id="name" 
                    className={`"name" ${validateName(text) && 'invalid'}`} 
                    onChange={(e) => setText(e.target.value)}/><br/>
                    
                    {validateName(text) && (<p style={{color:"red"}}>Error: Name must not contain numbers</p>)}<br/>

                    <label htmlFor="email">Email</label><br />
                    <input 
                    type="email" 
                    id="email" 
                    className={`"email" ${validateEmail(email) && 'invalid'}`} 
                    onChange={(e) => {setEmail(e.target.value)}} /><br/>

                    {validateEmail(email) && (<p style={{color:"red"}}>Error: Email is invalid</p>)}<br/>


                    <label htmlFor="Password">Password</label><br />
                    <input 
                    type="password" 
                    id="Password" 
                    className={`"password" ${validatePassword(password) && 'invalid'}`} 
                    onChange={(e) => {setPassword(e.target.value)}}/>

                    {validatePassword(password) && (<p style={{color:"red"}}>Error: password not shorter than 7 characters</p>)}


                <Button className='createAccountBtn' type="submit" onSubmit={handleSubmit}>Create Account</Button>
                <Button className='singBtn' >Sign up with Google</Button>
                </form>



                <p className="haveAccount">Already have an account?<a href="/">Sign in</a></p>
           </div>
       )
   }

export default RightSide;
