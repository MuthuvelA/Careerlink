import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import api from "./repositories/api";
import { useNavigate } from "react-router-dom";

import './login.css'

function signup(){
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [username,setUsername] = useState();
    const navigate = useNavigate();
    
    async function handleSubmit(event){
       
        event.preventDefault();
        const response = await axios.post(api+"/signup",{"username":username,"email":email,"password":password});
        console.log(response);
        if(response.data.status){
            alert(response.data.message);
            navigate('/login');
            
        }else{
            alert(response.data.message);
        }
    }

    return(
        <>
        <h1>Signup Page</h1>
        <div class="loginContainer">
        <div class="loginDiv">
        <form onSubmit={handleSubmit} class="loginForm">
            <input class="loginInput" type="text" placeholder="User Name" onChange={(event)=>{
                   setUsername(event.target.value);
            }}/> <br />
                <input class="loginInput" type="email" required placeholder="Your mail ID" onChange={(event)=>{
                    setEmail(event.target.value);
                }}/><br />
                <input class="loginInput" type="password" required placeholder="Your Password"  onChange={(event)=>{
                    setPassword(event.target.value);
                }} /><br />
                <button type='submit' class="loginButton">Signup</button>
            </form>
            <br />
            <h2>Already have account?</h2> <Link to="/login" class="loginLink">Login</Link>
            </div>
        </div>
        </>
    );
}


export default signup