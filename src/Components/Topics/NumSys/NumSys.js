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

const  NumSys = () =>{
    return (
        <section className="topic">
            <div className="container">
                <Head headImg={require(`../../../Images/${data["week 0"].urlImg}`)} headTitle = {data["week 0"].name}/>
                <Objective week="week 0"/>
                <Tutorial week="week 0" ext={data["week 0"].extension}/>
                <Content pdf="https://drive.google.com/file/d/1bH7aggXM-CAr-uVO7v_g9Th3rKYDP3Bd/view?usp=sharing"  excel="https://docs.google.com/presentation/d/1UEktfjFUi2ruJHt4LZxJwyEvqF0A8gnU/edit?usp=sharing&ouid=110344286442961826613&rtpof=true&sd=true"/>
            </div>
        </section>
    );
}
export default NumSys;
