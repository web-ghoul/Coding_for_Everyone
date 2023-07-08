// Libraries
import React,{useState,useEffect,useRef} from 'react';
import data from '../../../data/weeks.js'

//Styles Files
import styles from "../../../Framework/CSS/Framework.modulus.css"

//Components
import Head from '../../Main-Components/Head/Head';
import Objective from "../../Main-Components/Objective/Objective"
import Tutorial from "../../Main-Components/Tutorial/Tutorial"
import Content from "../../Main-Components/Content/Content"

const  Flowchart = () =>{
    return (
        <section className="topic">
            <div className="container">
                <Head headImg={require(`../../../Images/${data["week 1"].urlImg}`)} headTitle = {data["week 1"].name}/>
                <Objective week="week 1"/>
                <Tutorial week="week 1" ext={data["week 1"].extension}/>
                <Content pdf="https://drive.google.com/file/d/1rrkWM4nE5Ml55GxS7UxEzy7elvamvNSs/view?usp=sharing"  excel = "https://docs.google.com/presentation/d/1QSBU80g-h_7KKfSfx-g67jWDLME7oI15/edit?usp=sharing&ouid=110344286442961826613&rtpof=true&sd=true" />
            </div>
        </section>
    );
}
export default Flowchart;
