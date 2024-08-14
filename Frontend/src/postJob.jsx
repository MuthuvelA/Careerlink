import { useState } from "react"
import './postJob.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function postJob(){
    const [title,setTitle] = useState();
    const [domain,setDomain] = useState();
    const [salary,setSalary]= useState();
    const [email,setEmail]= useState();
    const [company,setCompany]= useState();
    const [description,setDiscription]= useState();
    const [category,setCatagory]= useState("Full Time");
    const [vacancy,setVacancy]= useState();
    const [deadline,setDeadLine]= useState();
    const [name,setName] = useState();
    const navigate = useNavigate();
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
        "Others"
    ];
    const catagoryArr = [
        "Full Time",
        "Part Time",
        "Intern",
        "Contract"
    ];

   async function handleSubmit(event){
        event.preventDefault();
        var obj = {
            title,
            domain,
            salary,
            company,
            description,
            vacancy,
            deadline,
            category,
            email,
            name
        }
        const result = await axios.post("http://localhost:3000/addJob",obj);
        if(result.data.status){
            alert(result.data.message);
            navigate('/');

        }else{
            alert(result.data.message);
        }
    }
    return (
        <>
        <div>
            <h1>Enter Job Details</h1>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text"  class="jobInput" placeholder="Enter Your name" onChange={(value)=>{
                    setName(value.target.value);
                 }}/><br />
                 <input type="text"  class="jobInput" placeholder="Enter job Title" onChange={(value)=>{
                    setTitle(value.target.value);
                 }}/><br />
                 <select class="jobInput" onChange={(value)=>{
                    setDomain(value.target.value);
                 }}>
                    {jobs.map((value)=>(
                        <option value={value}>{value}</option>
                    ))}
                 </select><br />
                 <input type="number" required class="jobInput" placeholder="Enter job Salary" onChange={(value)=>{
                    setSalary(value.target.value);
                 }}/><br />
                 <input type="email"required  class="jobInput" placeholder="Enter Contact Email" onChange={(value)=>{
                    setEmail(value.target.value);
                 }}/><br />
                 <input type="text" required class="jobInput" placeholder="Enter Company Name" onChange={(value)=>{
                    setCompany(value.target.value);
                 }}/><br />
                 <textarea required class="jobInput" rows={5} cols={20} placeholder="Enter Job Description" onChange={(value)=>{
                    setDiscription(value.target.value);
                 }}/><br />
                 <select class="jobInput" onChange={(value)=>{
                    setCatagory(value.target.value);
                 }} >
                    {catagoryArr.map((val)=>(
                        <option value={val}>{val}</option>
                    ))}
                 </select><br />
                 <input required class="jobInput"  type="number" placeholder="Enter job vacancy" onChange={(value)=>{
                    setVacancy(value.target.value);
                 }}/><br />
                 <input required class="jobInput" type="date" placeholder="Enter Application deadline" onChange={(value)=>{
                    setDeadLine(value.target.value);
                 }}/><br />
                 <button class="jobButton" type="submit">POST</button>


            </form>
        </div>
        </>
    );
}

export default postJob;