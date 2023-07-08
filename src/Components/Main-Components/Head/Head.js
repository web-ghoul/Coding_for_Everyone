// Libraries
import React from 'react';

//Style Files
import styles from "../../../Framework/CSS/Framework.modulus.css"
import style from "./Head.modulus.css"

const  Head = (props) =>{
    return(
        <div className="head flex start">
            <picture className='flex start'>
                <img src = {props.headImg} alt = "Head" />
            </picture>
            <span className='flex start'>{props.headTitle}</span>
        </div>
    )
}
export default Head;
