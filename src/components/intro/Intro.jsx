import "./intro.scss"
// import { init } from 'ityped';
// import { useEffect, useRef } from "react";
import Animations from "./animations/Animations";

export default function Intro() {

  // const textRef = useRef();

  // useEffect(()=>{
  //   init(textRef.current,
  //      { showCursor: true,
  //       backDelay: 1500,
  //       backSpeed:60,
  //       strings: ["Programmer", "Web Developer", "Graphic Designer", "Orator"], });
  // },[]);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/FNNNN.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Animesh Jain</h1>
          <h3>
            <span><Animations /></span>
          </h3>
          <a href="#contact">
            <button className="button">Contact Me</button>
          </a>
        </div>
        <a href="#portfolio" className="change">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
