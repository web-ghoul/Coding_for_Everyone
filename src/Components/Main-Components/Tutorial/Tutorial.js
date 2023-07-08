// Libraries
import React,{useState,useEffect} from 'react';
import data from '../../../data/weeks.js'

//Style Files
import styles from "../../../Framework/CSS/Framework.modulus.css"
import style from "./Tutorial.modulus.css" 

//Icons
import {RiNumber1} from "react-icons/ri"
import {RiNumber2} from "react-icons/ri"
import {RiNumber3} from "react-icons/ri"
import {RiNumber4} from "react-icons/ri"
import {RiNumber5} from "react-icons/ri"
import {RiNumber6} from "react-icons/ri"
import {RiNumber7} from "react-icons/ri"
import {RiNumber8} from "react-icons/ri"
import {RiNumber9} from "react-icons/ri"
import {RxDotFilled} from "react-icons/rx"
import {GoPrimitiveDot} from "react-icons/go"

//Components
import Title from "../Title/Title"
import Photo from "../Photo/Photo"
import Video from "../Video/Video"
import Example from "../Example/Example"

const  Tutorial = (props) =>{
    const [weekData,setWeekData] = useState(data) 
    const [week,setWeek] = useState(props.week)
    const [objectiveNames, setObjectivesNames] = useState([])
    const [objects, setObjects] = useState([])
    const [numbersOfParts,setNumbersOfParts] = useState([])
    const handleDate = ()=>{
        setNumbersOfParts(()=>[RiNumber1,RiNumber2,RiNumber3,RiNumber4,RiNumber5,RiNumber6,RiNumber7,RiNumber8,RiNumber9]);
        setObjectivesNames(()=>[])
        setObjects(()=>[])
        Object.keys(weekData[week]["objectives"]).map((obj)=>{
            setObjectivesNames((arr)=>[...arr,obj])
            setObjects((arr)=> [...arr,weekData[week]["objectives"][obj]])
        })
    }
    useEffect(()=>{
        handleDate()
        setWeekData(()=>data)
        setWeek(()=>props.week)
    },[data,props])
    return (
        <div className="tutorial">
            <div className="contain grid start">
                {
                    objects.map((object,index)=>{
                        return(
                            <div className="parts" key={index}>
                                <div id={`${objectiveNames[index].split(' ')[0]}${index}`} className="point grid start">
                                    <div className="contain grid">
                                        <Title icon={numbersOfParts[index]} title={objectiveNames[index]} bold={800} done={true} key={index}/>
                                        {Object.keys(object).map((k,i)=>{
                                            return (
                                                <div key ={i} className="grid start">
                                                    <div className="part grid start">
                                                        <Title icon={GoPrimitiveDot} title={k} key={i} bold={700}/>
                                                        {
                                                            object[k].hasOwnProperty('imgs')?
                                                                Object.keys(object[k].imgs).map((img,i)=>{
                                                                return (
                                                                        <Photo key={i} img={require(`../../Topics/${props.ext}${object[k].imgs[img].src}`)} width={object[k].imgs[img].width ? object[k].imgs[img].width:""} desc={k}/>
                                                                    )
                                                                }):""
                                                        }{
                                                            object[k].hasOwnProperty('videos')?
                                                                Object.keys(object[k].videos).map((v,i)=>{
                                                                    return (
                                                                        <Video key={i} src={require(`../../Topics/${props.ext}${object[k].videos[v].src}`)} type="mp4"/>
                                                                    )
                                                                }):""
                                                        }
                                                        <div className="dots grid start">
                                                            {
                                                                object[k].hasOwnProperty("dots")? 
                                                                Object.keys(object[k].dots).map((dot,i)=>{
                                                                    return (
                                                                        <div key={i} className="dot grid start">
                                                                            <Title icon={RxDotFilled}  title={dot} key={i}/>
                                                                            {
                                                                                typeof(object[k].dots[dot]) == "object"?
                                                                                Object.keys(object[k].dots[dot]).map((img,i)=>{
                                                                                    return (
                                                                                        <Photo width={object[k].dots[dot][img].width ? object[k].dots[dot][img].width:""} key={i} img={require(`../../Topics/${weekData[week].extension}${object[k].dots[dot][img].src}`)}  desc={dot}/>
                                                                                    )
                                                                                }):""
                                                                            }
                                                                        </div>
                                                                    )
                                                                }):""
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="examples grid stretch">
                                                        {
                                                            k === "Hands on"?
                                                                Object.keys(object[k]).map((ex,index)=>{
                                                                    return (
                                                                        <Example key={index} ex ={ex} link={object[k][ex]}  />
                                                                    )
                                                                })
                                                            :""
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }    
            </div>
        </div>
    );
}
export default Tutorial;
