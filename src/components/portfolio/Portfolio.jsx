import "./portfolio.scss"
import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";

// export default function Portfolio() {
//   return (
//     <div className="portfolio" id="portfolio">
//       <h1>About us</h1>
//       <div className="con">

//           <div className="left">
//           <h2>Who am I?</h2>
//         <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. <br></br> <br></br>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
//           </div>

//         <div className="right">
//         <h2 className="skill">Skills Acquired:</h2>
//         <div className="items">
//           <div className="lang">
//             <h3>C</h3>
//             <h3>Cpp</h3>
//             <h3>Python</h3>
//             <h3>Figma</h3>
//             <h3>Designing</h3>
//           </div>
//           <div className="webd">
//             <h3>HTML5</h3>
//             <h3>CSS</h3>
//             <h3>Javascript</h3>
//             <h3>ReactJS</h3>
//             <h3>Django</h3>
//           </div>
//           <div className="ext">
//             <h3>Data Structures</h3>
//             <h3>Algortithms</h3>
//             <h3>OOPs</h3>
//             <h3>MySQL</h3>
//             <h3>Computer Networks</h3>
//           </div>
//         </div>
//         </div>
      
//       </div>
//       <div className="motion">
//         <a href="#intro" className="changeu">
//           <img src="assets/down.png" alt="" />
//         </a>
//         <a href="#works" className="changed">
//           <img src="assets/down.png" alt="" />
//         </a>
//       </div>
//     </div>
//   )
// }



export default function Portfolio() {
  return (  
    <div className="portfolio" id="portfolio">
      <div className="one">
      <div className="first">
        <div className="about">
          <h2>About Me</h2>
          <p>Hey, I'm a Pre final Year undergrad pursuing Electronics and Communication
            Engineering, currently focusing on Data Structures and Algorithms, Web Development and Computer Fundamentals. I'm making every effort to put all I've learned into practice. In addition to these technical abilities, I find Designing to be interesting.</p>
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
              <p>Django</p>
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
              <p>Figma</p>
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