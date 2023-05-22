import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/iconshow.png",
      title: "ThinkPad",
      desc:
        "ThinkPad is a platform where you can store you Notes or other important details. This platform stores you notes and gives you an upperhand to access them from anywhere by loggin into your account. ",
      img:
        "./assets/visn.png",
      code: "https://github.com/anii-jain/ThinkPad_frontend",
    },
    {
      id: "3",
      icon: "./assets/logo.png",
      title: "Text Transform",
      desc:
        "A website consist of features which can transform text in different forms and gives a better overview. ",
      img:
        "./assets/visn.png",
      code: "https://github.com/anii-jain/Text-Transform",
    },
    {
      id: "4",
      icon: "./assets/chat.png",
      title: "Messaging App",
      desc:
        "A fully responsive website providing us feature to chat with other person on same portal with a selected username. I integrated Socket.IO with NodeJs to make it and still trying to make it more efficient by bringing new features to it. ",
      img:
        "./assets/visn.png",
      code: "https://github.com/anii-jain/Messaging-App",
    },
    {
      id: "2",
      icon: "./assets/tcfnn.png",
      title: "Temperature Controlled Fan",
      desc:
        " A device which automatically changes it's speed (speed of the fan) according to the surrounding temperature in real time.",
      img:
        "./assets/fanfinal.png",
      code: "https://github.com/anii-jain/Temperature-Controlled-Fan",
    },
    // {
    //   id: "3",
    //   icon: "Coming Soon",
    //   title: "",
    //   desc:
    //     "",
    //   img:
    //     "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    //   code: "",
    // },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href={d.code} target="_blank">Click here for source code !!</a></span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arroww.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arroww.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
      <div className="motion">
        <a href="#portfolio" className="changeu">
          <img src="assets/down.png" alt="" />
        </a>
        <a href="#nar" className="changed">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
