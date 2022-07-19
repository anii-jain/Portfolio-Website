import "./portfolio.scss"
import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
  const [selected, setSelected] = useState("about_me");
  const list = [
    {
      id: "about_me",
      title: "About Me",
    },
    {
      id: "programming",
      title: "Programming",
    },
    {
      id: "web_development",
      title: "Web Devlopment",
    },
    {
      id: "designing",
      title: "Designing",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://t3.ftcdn.net/jpg/05/13/85/64/360_F_513856499_iugivAys6M9y7wPwq0w9MxSEXxotDlw8.jpg" alt="" />
        </div>
        <div className="item">
          <img src="https://t3.ftcdn.net/jpg/05/13/85/64/360_F_513856499_iugivAys6M9y7wPwq0w9MxSEXxotDlw8.jpg" alt="" />
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
