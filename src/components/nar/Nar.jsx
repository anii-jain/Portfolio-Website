import "./nar.scss"

export default function Nar() {
  const data = [
    {
      id: 4,
      name: "TECHNICAL ASSISTANT",
      title: "LNMIIT",
      subt: "Data structures and Algorithms Lab",
      img:
        "assets/lnmiitLogo.png",
      // icon: "assets/twitter.png",
      desc:"Managing the work under the society and contributing towards the managment, at LNMIIT",
    },
    {
      id: 1,
      name: "CREATIVE TEAM LEAD",
      title: "ENTREPRENEURSHIP CELL",
      // subt: "and",
      t2: "SANKALP CLUB",
      // clg: "LNMIIT",
      img:
        "assets/ecellLogo.jpeg",
      icon: "assets/sankalpLogo.jpg",
      desc:
        "Continually developing talents and inspiring the club members to be innovative, at LNMIIT",
    },
    {
      id: 2,
      name: "COORDINATOR",
      title: "C-CSPD",
      subt: "Centre of communication, soft skills, and  personality development",
      // clg: "LNMIIT",
      img:
        "assets/ccspdLogo.jpeg",
      // icon: "assets/outube.png",
      desc:
        "Consistently working on development of communication skills of our college by organizing various events, at LNMIIT",
      featured: true,
    },
    {
      id: 3,
      name: "PROBLEM SETTER",
      title: "GDSC LNMIIT",
      subt: "Google Developers Student Club",
      img:
        "assets/gdscLogo.png",
      // icon: "assets/linkedin.png",
      desc:
        "Organized and managed intra-college coding competitions and events, at LNMIIT",
    }
  ];
  return (
    <div className="nar" id="nar">
      <h1>Non Academic Responsibilities</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id} /* unique ID */ >
            <div className="top">
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
              <h5>{d.subt}</h5>
              <h4>{d.t2}</h4>
            </div>
            <div className="bottom">
              {d.desc}
            </div>
          </div>
        ))}
      </div>
      <div className="motion">
        <a href="#works" className="changeu">
          <img src="assets/down.png" alt="" />
        </a>
        <a href="#contact" className="changed">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
