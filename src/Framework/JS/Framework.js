// Libraries
import React,{useState,useEffect,useRef} from 'react';

const  Example = (props) =>{
    return (
        <a href={props.link}>
            <div className="example grid stretch" style={{transform: props.move? `translateX(${props.move}px)`:""}}>
                <span>{props.ex}</span>
                <div className="ex-link flex start">
                    <a href={props.link}>{props.link}</a>
                </div>
            </div>
        </a>
    );
}
export default Example;
