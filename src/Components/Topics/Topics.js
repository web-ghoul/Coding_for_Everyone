// Libraries
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

//Json File
import data from '../../data/weeks.js'

//Components
import Head from "../Main-Components/Head/Head"
import Photo from "../Main-Components/Photo/Photo"

//Style Files
import style from "./Topics.modulus.css"
import styles from "../../Framework/CSS/Framework.modulus.css"

//Images
import topicImg from "../../Images/topics.jfif"
const Topics = () => {
    const [weekData, useWeekData] = useState(data)
    const [weeks, setWeeks] = useState([])
    useEffect(() => {
        let weeksNumber = [];
        for (const key in weekData) {
            if (Object.hasOwnProperty.call(weekData, key)) {
                weeksNumber.push(key)
            }
        }
        setWeeks(() => weeksNumber)
    }, [weekData])
    return (
        <section className="topics">
            <div className="container grid stretch">
                <Head headImg={topicImg} headTitle="Topics" />
                <div className="boxes grid stretch start">
                    {
                        weeks.map(w => {
                            return (
                                <div key={weekData[w].id} className="week grid stretch">
                                    <Link to={weekData[w].link} >
                                        <Photo img={require(`../../Images/${weekData[w].urlImg}`)} class={'icon'} desc="Week Image" />
                                        <article className='grid start'>
                                            <div className="week-name">{weekData[w].name}</div>
                                            <div className="week-num">{w}</div>
                                            <div className="winner-week">Programmer of The Week : <span className={weekData[w].prog_of_week === 'in Progress....' ? '' : 'pow'}>{weekData[w].prog_of_week}</span></div>
                                        </article>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default Topics;
