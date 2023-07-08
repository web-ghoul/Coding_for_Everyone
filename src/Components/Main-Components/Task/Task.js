// Libraries
import React,{useState,useEffect,useRef} from 'react';

//Styles Files
import styles from "../../../Framework/CSS/Framework.modulus.css"
import style from "./Task.modulus.css"

//Json Files
import tasks from "../../../data/tasks"

//Icons 
import {BsCalendar4Week} from "react-icons/bs"
import {AiOutlineApartment} from "react-icons/ai"
import {AiOutlineFileDone} from "react-icons/ai"

//Components
import Photo from "../Photo/Photo"

const  Task = (props) =>{
    const [part , setPart] = useState(tasks[props.week][props.part])
    useEffect(()=>{
        setPart(()=>tasks[props.week][props.part])
    },[part])
    return (
        <div key={props.key ? props.key:1}  className="task" >
            <a  href={part.link}  className="contain grid stretch" target="_blank">
                <div className="photo">
                    <Photo img={require(`../../../Images/${part.img}`)} desc={props.week+props.part}/>
                </div>
                <div className="content grid start">
                    <div className="quiz flex start">
                        <span>Quiz Link : </span>
                        <a href={part.link} target="_blank">
                            {`Click here for Quiz about ${props.part}`}
                        </a>
                    </div>
                    <div className="info grid start">
                        <div className="deadline flex start">
                            <i>
                                <AiOutlineFileDone/>
                            </i>
                            <span>{`Deadline : ${part.deadline}`}</span>
                        </div>
                        <div className="week flex start">
                            <i>
                                <BsCalendar4Week/>
                            </i>
                            <span>{props.week}</span>
                        </div>
                        <div className="part flex start">
                            <i>
                                <AiOutlineApartment/>
                            </i>
                            <span>{props.part}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>  
    );
}
export default Task;
