import { useState } from 'react';
import './login.css'
import { Link ,Navigate} from 'react-router-dom';
import axios from 'axios';
import api  from './repositories/api';
import { useNavigate } from 'react-router-dom';


function login(){
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
    async function handleSubmit(event){
        event.preventDefault();
        var response = await axios.post(api+"/login",{email,password});
        if(response.data.status){
            alert(response.data.message);
            navigate('/',{state:{"isLogin":true,"username":response.data.user}});
            
        }else{
            alert(response.data.message);
        }

    }
    return (
        <>
        <h1>Login Page</h1>
        <div class="loginContainer">
        <div class="loginDiv">
             <form onSubmit={handleSubmit} class="loginForm">
                <input class="loginInput" type="email" required placeholder="Your mail ID"id="email" onChange={(event)=>{
                    setEmail(event.target.value.toLocaleLowerCase());
                }}/><br />
                <input type="password" class="loginInput" required placeholder="Your Password" id="password" onChange={(event)=>{
                    setPassword(event.target.value);
                }} /><br />
                <button type='submit' class="loginButton">Login</button>
            </form>
            <br />

            <h2>Don't have account?</h2> <Link to="/signup" class="loginLink">signup</Link>

        </div>
        </div>
        
        
        </>
    );
}


export default login;