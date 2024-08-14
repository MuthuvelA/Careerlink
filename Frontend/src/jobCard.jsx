import './jobCard.css';
import { useNavigate } from 'react-router-dom';
function jobCard(props){
    const navigate = useNavigate();

    function handleButton(){
        const args = props.obj;
        console.log(args);
        navigate('/viewDetail',{state:{args}});
       
    }
    return(
        <>
            <div class="card">
                <div class="imgDiv">
                <img  class="profile" src="https://th.bing.com/th/id/R.35f46556e6a966341dd9a6a83544d845?rik=G2wKhJcSvb0adg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_118986.png&ehk=kYbTWHGZsQi4UXjan8rDJVWiKXioRc%2bk%2bMlZMO%2fhTqA%3d&risl=&pid=ImgRaw&r=0" alt="profile" /><br />
                <h4 class="position">{props.obj.title}</h4>
                </div>
                <div class="userDetail">
                <h2>{props.obj.name}</h2>
                <h4>{props.obj.company}</h4>
                </div>
                <div class="discription">
                    <ul>
                        <li>Salary : {props.obj.salary} /month</li>
                        <li>Deadline : {props.obj.deadline}</li>
                    </ul>
                    <button class="cardButton" onClick={handleButton}>view Details</button>
                </div>
               
            </div>
        </>
    ); 
}

export default jobCard;