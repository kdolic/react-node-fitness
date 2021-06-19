import React from "react";
import Fade from "react-reveal/Fade";
import "../../css/Team.css";
import KD from "../../assets/images/KD1.jpg";
import DW from "../../assets/images/DW1.jpg";
import BS from "../../assets/images/BS1.jpg";

const Team = () => {
  return (
    <section id="team" className="teamContainer">
      <Fade top duration={1500}>
        <div className="team-top">
          <h1>
            Meet <span className="team-span gradient">The</span> Team
          </h1>
          <p>The Developers of Dev.Fit</p>
        </div>
        <div className="team-content">
          <div className="team-card">
            <img src={KD} alt="Kenan" />
            <h3>Kenan Dolic</h3>
            <p>Full Stack Developer</p>
            <a href="https://www.linkedin.com/in/kenan-dolic/" target="blank">
              <button className="team-btn">LinkedIn</button>
            </a>
          </div>
          <div className="team-card">
            <img src={DW} alt="Daniel" />
            <h3>Daniel Wright</h3>
            <p>Front End Developer</p>
            <a
              href="https://www.linkedin.com/in/daniel-wright-1207/"
              target="blank"
            >
              <button className="team-btn">LinkedIn</button>
            </a>
          </div>
          <div className="team-card">
            <img src={BS} alt="Brandon" />
            <h3>Brandon Santos</h3>
            <p>Front End Developer</p>
            <a
              href="https://www.linkedin.com/in/brandon-santosx1123/"
              target="blank"
            >
              <button className="team-btn">LinkedIn</button>
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Team;
