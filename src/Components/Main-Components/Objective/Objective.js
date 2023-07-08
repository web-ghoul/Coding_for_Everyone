//Libraries
import React,{useState,useEffect,useRef} from 'react';
import week_data from '../../../data/weeks.js'

//Styles Files
import styles from "../../../Framework/CSS/Framework.modulus.css"
import style from "./Objective.modulus.css"

const  Objectives = (props) =>{
    const [weekData,setWeekData] = useState(week_data) 
    const [week,setWeek] = useState(props.week)
    useEffect(()=>{
        setWeekData(()=> week_data)
        setWeek(()=>props.week)
    },[week_data , props])
    return (
        <article className='objective grid start'>
            <div className="title">Objectives</div>
            <ul className='grid start'>
                {
                    Object.keys(weekData).map((key,index)=>{
                        if(key === week){
                            return(
                                Object.keys(weekData[key].objectives).map((k,i)=>{
                                    return (
                                        <a key={i} href={'#'+k.split(' ')[0]+i}>
                                            <li key={i}>{k}</li>
                                        </a>
                                    )
                                })
                            )
                        }
                    })
                }
            </ul>
        </article>
    );
}
export default Objectives;
