// Libraries
import React,{useState,useEffect,useRef} from 'react';

//Styles Files
import styles from "../../../Framework/CSS/Framework.modulus.css"
const  Example = (props) =>{
    return (
        <a href={props.link} key={props.key ? props.key : 1} target="_blank">
            <div className="example grid stretch" style={{transform: props.move? `translateX(${props.move}px)`:""}}>
                <span>{props.ex}</span>
                <div className="ex-link flex start">
                    <a href={props.link} target="_blank">{props.link}</a>
                </div>
            </div>
        </a>
    );
}
export default Example;
