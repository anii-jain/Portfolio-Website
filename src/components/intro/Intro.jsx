import "./intro.scss"
import Animations from "./animations/Animations";

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/my3.jpg" alt="" />
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
