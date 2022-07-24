import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/SV.png",
      title: "Sorting visualizer",
      desc:
        "A online application called Sorting Visualizer allows users to see a variety of sorting algorithms, including Bubble Sort, Merge Sort, Quick Sort, and Heap Sort. ",
      img:
        "./assets/visn.png",
      code: "https://github.com/anii-jain",
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
