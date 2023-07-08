//Libraries
import React,{useState,useEffect,useRef} from 'react';

//Styles Files
import styles from "../../../Framework/CSS/Framework.modulus.css"

//Icons
import {ImFilePdf} from "react-icons/im"
import {ImFileExcel} from "react-icons/im"
import {HiOutlineNewspaper} from "react-icons/hi"
//Components
import Title from "../Title/Title"

const  Content = (props) =>{
    return (
        <div className="content grid start">
            <Title icon={HiOutlineNewspaper} title="Content in Papers" done={true} fontW={600} fontSize = {28}/>
            <div className="btns grid start">
                <a href={props.pdf}  target="_blank">
                    <button className='flex center'>
                        <i>
                            <ImFilePdf/>
                        </i>
                        <span>PDF File</span>
                    </button>
                </a>
                <a href={props.excel}  target="_blank">
                    <button className='flex center'>
                        <i>
                            <ImFileExcel/>
                        </i>
                        <span>Excel File</span>
                    </button>
                </a>
            </div>
        </div> 
    );
}
export default Content;
