//Libraries
import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

//Style Files
import styles from '../../../Framework/CSS/Framework.modulus.css'
import style from "./Header.modulus.css"

//Images
import imgLogo from "../../../Images/logo.png"

//Icons
import { FaList } from "react-icons/fa"

//Components
import Photo from "../Photo/Photo"

const Header = () => {
  const list = useRef();
  const listBtn = useRef();
  const header = useRef();
  const toggle = () => {
    list.current.classList.toggle("toggle");
  }

  const handleWindowSize = () => {
    if (window.innerWidth >= 992) {
      list.current.classList.remove("toggle");
    }
    window.onresize = function () {
      if (window.innerWidth >= 992) {
        list.current.classList.remove("toggle");
      }
    }
  }

  useEffect(() => {
    handleWindowSize()
  }, [window.innerWidth])
  return (
    <header ref={header}>
      <div className="container flex between">
        <div className="logo flex center">
          <Link to="/" className='flex center'>
            <Photo img={imgLogo} desc={"Logo image"} />
            <span>Coding for Everyone</span>
          </Link>
        </div>
        <nav ref={list} className="">
          <ul className='flex center'>
            <li onClick={() => toggle()}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => toggle()}>
              <Link to="/topics">Topics</Link>
            </li>
            <li onClick={() => toggle()}>
              <Link to="/tasks">Tasks</Link>
            </li>
          </ul>
        </nav>
        <div className="list flex end" onClick={() => toggle()} ref={listBtn}>
          <i>
            <FaList />
          </i>
        </div>
      </div>
    </header>
  );
}
export default Header;
