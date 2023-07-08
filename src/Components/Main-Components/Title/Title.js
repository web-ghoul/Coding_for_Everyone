// Library
import React from 'react';

//Styles Files
import styles from "../../../Framework/CSS/Framework.modulus.css"

const  Title = (props) =>{
    return(
        <div className= {props.done ? "title flex start done" :"title flex start"} key={props.key ? props.key : 1}>
            <i className ="flex center">
                <props.icon/>
            </i>
            <span style= {{fontWeight:`${props.bold?props.bold:"normal"}`}}>{props.title}</span>
        </div>
    )
}
export default Title;
