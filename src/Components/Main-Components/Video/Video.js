//Libraries
import React from 'react';
import { Outlet, Link } from "react-router-dom";

//Styles Files
import styles from "../../../Framework/CSS/Framework.modulus.css"
import style from "./Video.modulus.css"

const  Video = (props) => {
  return (
      <div className="video" style={{transform :props.move ?`translateX(${props.move}px)`:""}}>
          <video  controls muted loop>
              <source src={props.src} type={`video/${props.type}`} />
          </video>
      </div>
  );
}
export default Video;
