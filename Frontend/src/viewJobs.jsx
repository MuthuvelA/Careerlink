import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./jobCard";
import './viewJobs.css'

function viewJobs(){
    const [domain,setDomain] = useState("software engineer");
    const [jobs,setJobs] = useState([]);
    const jobList = [
        "software engineer",
        "marketing manager",
        "data analyst",
        "graphic designer",
        "sales representative",
        "human resources specialist",
        "financial analyst",
        "customer service representative",
        "operations manager",
        "product manager",
        "content writer",
        "accountant",
        "business development manager",
        "ux/ui designer",
        "project manager",
        "legal assistant",
        "it support specialist",
        "social media manager",
        "research scientist",
        "medical doctor",
        "others"
    ];

   async function handleSearch(){
        const result = await axios.post("http://localhost:3000/getJob",{"domain":[domain]});
        if(result.data.status){
            setJobs(result.data.message);
        }else{
            alert(result.data.message);
        } 

    }
    async function handleSearchAll(){
        const result = await axios.post("http://localhost:3000/getJob",{"domain":jobList});
        if(result.data.status){
            setJobs(result.data.message);
        }else{
            alert(result.data.message);
        } 

    }
    return (
        <>
        <div class ="viewDiv">
            <h1>POSTED JOBS</h1>
            <select class="viewSelect"onChange={(value)=>{
                    setDomain(value.target.value.toLowerCase());
            }}>
                <option value="">SELECT PARTICULAR DOMAIN</option>
                {jobList.map((value,index)=>(
                    <option value={value} key={index}>{value}</option>
                ))}
            </select>
            <button onClick={handleSearch} class="searchButton">SEARCH</button>
            <button onClick={handleSearchAll} class="searchButton">SEARCH ALL</button><br /><br />
        </div>
        <div class="viewCardDiv">
            {jobs.map((value,index)=>(
                <JobCard obj={value} key={index}/>
            ))}
        </div>
        </>
    );
}


export default viewJobs;