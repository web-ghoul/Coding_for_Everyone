//Libraries
import React ,{useRef,useEffect}from 'react';
import { Outlet, Link } from "react-router-dom";

//Style Files
import styles from '../../Framework/CSS/Framework.modulus.css'
import style from "./Error.modulus.css"

//Images
import errorImg from "../../Images/error.svg"

//Icons
import {BiErrorAlt} from "react-icons/bi"

//Components
import Photo from "../Main-Components/Photo/Photo"
import Title from "../Main-Components/Title/Title"
const  Header = () => {
    return (
        <section className="error">
            <div className="container flex center">
                <Title icon={BiErrorAlt} title={"404"}  bold={800}/>
                <Photo img={errorImg} desc={"error"}/>
            </div>
        </section>
    );
}
export default Header;
