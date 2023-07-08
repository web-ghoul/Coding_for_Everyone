// Libraries
import React, { useRef } from 'react';

//Style Files
import styles from "../../../Framework/CSS/Framework.modulus.css"
import style from "./SliderUp.modulus.css"

//Icons
import { IoMdArrowRoundUp } from "react-icons/io"
const SliderUp = () => {
    const scrollIcon = useRef();
    const slideUp = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    window.onscroll = function (e) {
        if (window.scrollY > 200) {
            scrollIcon.current.classList.add("show")
        } else {
            scrollIcon.current.classList.remove("show")
        }
    }
    return (
        <div className="slider-up flex center" ref={scrollIcon} onClick={() => slideUp()}>
            <i className='flex center'>
                <IoMdArrowRoundUp />
            </i>
        </div>
    );
}
export default SliderUp;
