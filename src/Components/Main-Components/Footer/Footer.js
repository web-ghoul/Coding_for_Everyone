//Libraries
import React from 'react';

//Styles Files
import style from "./Footer.modulus.css"
import styles from "../../../Framework/CSS/Framework.modulus.css"

//Icons
import {SlSocialFacebook} from "react-icons/sl"
import {SlSocialInstagram} from "react-icons/sl"
import {SlSocialTwitter} from "react-icons/sl"
import {SlSocialLinkedin} from "react-icons/sl"
import {AiOutlineWhatsApp} from "react-icons/ai"
const  Footer = () =>{
    return(
        <footer>
            <div className="container flex between">
                <span>Contact Me</span>
                <div className="icons flex end">
                    <a href="https://www.facebook.com/mahmoud.gogoo.5/">
                        <div className="icon flex center">
                        <SlSocialFacebook/>
                        </div>
                    </a>
                    <a href="https://wtsi.me/2001009344881">
                        <div className="icon flex center">
                            <AiOutlineWhatsApp/>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/mahmoud-salama-23b627211/">
                        <div className="icon flex center">
                            <SlSocialLinkedin/>
                        </div>
                    </a>
                    <a href="https://twitter.com/mah_wg2021">
                        <div className="icon flex center">
                            <SlSocialTwitter/>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/mahmoudsalama_01/">
                        <div className="icon flex center">
                            <SlSocialInstagram/>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
