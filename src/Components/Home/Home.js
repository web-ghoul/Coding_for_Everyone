// Libraries
import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

//Json File
import data from '../../data/weeks'

//Style Files
import styles from "../../Framework/CSS/Framework.modulus.css"
import style from "./Home.modulus.css"

//Images 
import rocketImg from "../../Images/rocket.svg"
import recentImg from "../../Images/photo (1).jfif"
import winnerImg from "../../Images/winnerWeek0.jfif"

//Components
import Head from "../Main-Components/Head/Head"
import Photo from "../Main-Components/Photo/Photo"

const Home = () => {
    const [weekData, setWeekData] = useState(data)
    const [weeks, setWeeks] = useState([])
    const progLine = useRef();
    useEffect(() => {
        let weeksNumber = [];
        for (const key in weekData) {
            if (Object.hasOwnProperty.call(weekData, key) && weekData[key].recent) {
                weeksNumber.push(key)
            }
        }
        setWeeks(() => weeksNumber)
    }, [weekData])
    return (
        <section className='home'>
            <div className="container">
                <div className="winner pow">
                    <div className="contain flex start">
                        <Photo img={winnerImg} desc={"winnerImg"} />
                        <div className="info grid start">
                            <span className="prog-of-week">
                                Programmer of week zero : <span className="name">{weekData["week 0"]["prog_of_week"]}</span>
                            </span>
                            <span className="week">
                                Week 0
                            </span>
                        </div>
                    </div>
                </div>
                <div className="pow hide">
                    <div className="contain flex start">
                        <Photo img={rocketImg} desc={"rocketImg"} />
                        <div className="info grid start">
                            <span className="name">In Progress...</span>
                            <span className="week">
                                {weeks}
                            </span>
                        </div>
                        <div className="progress-line" ref={progLine}></div>
                    </div>
                </div>
                <div className="recent-week">
                    <div className="contain grid start">
                        <Head headImg={recentImg} headTitle="Recent Week" />
                        <div className="boxes grid stretch">
                            {
                                weeks.map(w => {
                                    return (
                                        <div key={weekData[w].id} className="week grid stretch">
                                            <Link to={`topics/${weekData[w].link}`} >
                                                <Photo img={require(`../../Images/${weekData[w].urlImg}`)} class={"icon"} desc={weekData[w].icon} width={'100%'} />
                                                <article className='grid start'>
                                                    <div className="week-name">{weekData[w].name}</div>
                                                    <div className="week-num">{w}</div>
                                                    <div className="winner-week">{weekData[w].prog_of_week}</div>
                                                </article>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Home;
