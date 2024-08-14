import axios from 'axios';
import './jobDetailCard.css';
import { useLocation } from 'react-router-dom';
import api from './repositories/api';
import { useState } from 'react';

   
    function jobDetailCard(){
        const {state} = useLocation();
        const [posterMail,setPostermail] = useState();
        const [seekerMail,setSeekerMail] = useState();
        const [subject,setSubject] = useState();
        const [body,setBody] = useState();

        async function handleSubmit(event) {
            event.preventDefault();
            console.log(seekerMail,subject,body);
            alert("PROCESSING YOUR MAIL WAIT FOR A MINUTE...!");
            const result = await axios.post(api+"/sendMail",{posterMail,seekerMail,subject,body});
            if(result.data.status){
                alert(`mail sent to the job Poster : ${posterMail}`);
            }else{
                alert(`failed to send mail to the job Poster : ${posterMail}`);
            }
            setBody("");
            setSeekerMail("");
            setSubject("");
        }

    return(
        <>
    
            <h1 class="detailHead">JOB DETAILS</h1>
            <div class="detailCard">
                <img class="detailProfile" src="https://th.bing.com/th/id/R.35f46556e6a966341dd9a6a83544d845?rik=G2wKhJcSvb0adg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_118986.png&ehk=kYbTWHGZsQi4UXjan8rDJVWiKXioRc%2bk%2bMlZMO%2fhTqA%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div class="detailName">
                <div class="detailSumary">
                <h2 class="name pin">Position : </h2><p class="pin">{state.args.title}</p>
                </div>
                <div class="detailSumary">
                    <h4 class="name pin">company : </h4><p class="pin">{state.args.company}</p>
                </div>
            </div>
            <div class="detailName">
                <div class="detailSumary">
                    <h2 class="name pin">Job Poster :</h2> <p className="pin">{state.args.name}</p>
                </div>
                <div class="detailSumary">
                <h4 class="name pin">Email ID : </h4><p className="pin">{state.args.email}</p>
                </div>
            </div>
            <div class="detailName">
                <div className="detailSumary">
                <h2 class="name pin">Job Type : </h2><p className="pin">{state.args.category}</p>
                </div>
                <div className="detailSumary">
                <h4 class="name pin">Salary : </h4><p className="pin">{state.args.salary}</p>
                </div>               
            </div>
            </div><br /><br />
            <div class="detailCard">
                <div class="detailDisc"><h2>JOB DESCRIPTION</h2>
                <p>{state.args.description}</p>
                </div>
                <div className="detailSumary">
                    <h3>JOB SUMMARY</h3>
                    <h4>Total Vacancy : {state.args.vacancy}</h4>
                    <h4>Dead Line : {state.args.deadline}</h4>
                </div>
            </div>
            <div class="mail">
                <h1>COMPOSE MAIL TO THE JOB POSTER</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='enter your MailID' required value={seekerMail} class="jobInput" onChange={(value)=>{
                        setSeekerMail(value.target.value);
                        setPostermail(state.args.email);
                    }}/><br />
                    <input type="text" placeholder='Enter Subject of the mail' required value={subject} class="jobInput" onChange={(value)=>{
                        setSubject(value.target.value);
                    }}/><br />
                    <textarea type="text" rows={10} cols={3} placeholder='Enter Body of mail' required value={body} class="detailTextarea" onChange={(value)=>{
                        setBody(value.target.value);
                    }}/><br />
                    <button class="detailButton" type='submit'>APPLY NOW</button>
                </form>
                
            </div>
        </>
    );
}

export default  jobDetailCard;