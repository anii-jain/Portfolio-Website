import "./portfolio.scss"
// import { useState } from "react";
// import PortfolioList from "../portfolioList/PortfolioList";



export default function Portfolio() {
  return (  
    <div className="portfolio" id="portfolio">
      <div className="one">
      <div className="first">
        <div className="about">
          <h2>About Me</h2>
          <p>Hey, I'm a final Year undergrad pursuing Electronics and Communication
            Engineering from the LNM Institute of Information Technology. Currently aiming to specialize in Programming and Web Development. Always ready to learn more about development and technologies. Learning new programming languages and algorithms for the betterment of my knowledge about the topic. Visioned to view challenges as opportunities, by developing a progressive mindset.</p>
        </div>
      </div>
      <div className="second">
          
      </div>
      <div className="third">
        <div className="tech">
          <h2>Technological Skills</h2>
          <div className="ts">
            <div className="ll">
              <p>C</p>
              <p>Cpp</p>
              <p>Python</p>
              <p>HTML5</p>
              <p>CSS</p>
              <p>Data Structures</p>
              
            </div>
            <div className="rr">
              <p>Javascript</p>
              <p>ReactJS</p>
              <p>NodeJS</p>
              <p>OOPs</p>
              <p>MySQL</p>
              <p>Algortithms</p>
            </div>
          </div>
        </div>
        <div className="design">
        <h2>Other Skills</h2>
        <div className="ts">
        <div className="ll">
              <p>Communication</p>
              <p>Presentation</p>
            </div>
            <div className="rr">
              <p>Leadership</p>
              <p>Designing</p>
            </div>
            </div>
        </div>
      </div>
      </div>
      <div className="motion">
         <a href="#intro" className="changeu">
           <img src="assets/down.png" alt="" />
         </a>
         <a href="#works" className="changed">
           <img src="assets/down.png" alt="" />
         </a>
       </div>
    </div>
  )
}