// Libraries
import React, { useState, useEffect, useRef } from 'react';
import data from '../../../data/weeks.js'

//Styles Files
import styles from "../../../Framework/CSS/Framework.modulus.css"

//Components
import Head from '../../Main-Components/Head/Head';
import Objective from "../../Main-Components/Objective/Objective"
import Tutorial from "../../Main-Components/Tutorial/Tutorial"
import Content from "../../Main-Components/Content/Content"

const Scratch = () => {
    return (
        <section className="topic">
            <div className="container">
                <Head headImg={require(`../../../Images/${data["week 2"].urlImg}`)} headTitle={data["week 2"].name} />
                <Objective week="week 2" />
                <Tutorial week="week 2" ext={data["week 2"].extension} />
                <Content pdf="https://drive.google.com/drive/folders/11B8fCfHfUbVeA5-zs0iN_eMGAUIYgk6g" excel="https://docs.google.com/presentation/d/1vX7WWzj2QxxRIOQ-5A6-uZAe9m331ALe/edit#slide=id.p1" />
            </div>
        </section>
    );
}
export default Scratch;