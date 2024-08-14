import { Link } from "react-router-dom";
import './home.css'
import JobCard from "./jobCard";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function home(){
     const [value,setValue] = useState([]);
     const [domain,setDomain] = useState("");
     const {state} = useLocation();
      
    const jobs = [
        "choose Job Domain",
        "Software Engineer",
        "Marketing Manager",
        "Data Analyst",
        "Graphic Designer",
        "Sales Representative",
        "Human Resources Specialist",
        "Financial Analyst",
        "Customer Service Representative",
        "Operations Manager",
        "Product Manager",
        "Content Writer",
        "Accountant",
        "Business Development Manager",
        "UX/UI Designer",
        "Project Manager",
        "Legal Assistant",
        "IT Support Specialist",
        "Social Media Manager",
        "Research Scientist",
        "Medical Doctor",
        "Other"
    ];
   
    async function handleSearch(){
        const result = await axios.post("http://localhost:3000/getJob",{"domain":[domain]});
        if(result.data.status){
            console.log(result.data.message);
            setValue(result.data.message);
        }else{
            alert(result.data.message);
        } 
    }
    return(
    <>
    <header>
        <nav>
            <div className="homeNav"><h1>Job Portal</h1></div>
            <div class="dashboard">
                <Link to="/" class="link">HOME</Link>
                <Link to="/postJob" class="link">POST JOBS</Link>
                <Link to="/viewJob" class="link">VIEW JOBS</Link>
                <Link to="/" class="link">PROFILE</Link>
            </div>
            <div class="homeLogin" >{state==null?(<><Link to="/login" class="link">Login</Link>
            <Link to="/signup" class="link">signup</Link></>):(<div className="username"><h3>Welcome Back, {state.username}</h3></div>)}
            </div>
        </nav>
        </header>
        <div class="homeContainer">
        <div class="search">
            <p class="heading">To choose <span>Right Jobs</span></p>
            
            <h3>5000 peoples are use this webpage everyday and post upto 200 jobs</h3>
            <select class="select" onChange={(value)=>{
                    setDomain(value.target.value.toLowerCase());
            }}>
                {jobs.map((value,index)=>(
                    <option value={value} key={index}>{value}</option>
                ))}
            </select>
            <button onClick={handleSearch} class="searchButton">SEARCH</button><br /><br />
            <h4>Referene : full developer | backend developer | forntend developer</h4>
        </div>
            <img class="homeImg" src="https://media.istockphoto.com/id/1252679603/vector/job-search-vector-concept-flat-style-design-illustration.jpg?s=612x612&w=0&k=20&c=raq_7dNUZ-yDXLBDNp9tegUg4cwTbaX7a6chziU5SpE=" alt="" />
        
        </div>
        <div class="jobCard">
        {value.map((value,index)=>(
           <JobCard obj={value} key={index}/>
        ))}
        </div>
    
    </>
    );
}


export default home;