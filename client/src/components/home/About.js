import React from "react";
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from "react-bootstrap";
import "../../css/About.css";
import aboutUs from "../../assets/images/1banner.jpg";

const About = () => {
  return (
    <section id="about" className="aboutContainer">
      <Fade top duration={1500}>
      <div className="aboutTitle">
        <h1>
          Abou<span className="title-span gradient">t D</span>ev.Fit
        </h1>
        <p>
          “Motivation is what gets you started. Habit is what keeps you going.”
        </p>
      </div>
      <div className="aboutContent">
        <img src={aboutUs} alt="aboutImg" width="450rem" />
        <div className="aboutSection">
          <p>
            Developing the body is difficult but the hardest part of this
            journey is developing the mind. The mind is a powerful place. You
            look at people like David Goggins, Calum Vonmoger, and Marcus
            Latrel. They all have dominion over their mind which allows them to
            superseed 90% of the nation. Studies show that doing something 23
            times forms a habit. Once its a habit there is a mental connection
            in your brain that forces compulsive need to do it.
          </p>
          <p>Form a healthy habit through DEV.FIT.</p>
          <p>
            Welcome to DEV.FIT. <br />
            <span className="slogan">Develop Yourself, Develop Your Fit</span>
          </p>
        </div>
      </div>
      <div className="aboutCards">
        <h2>Learn More About Us</h2>
        <Container className="cardContainer">
          <Row>
            <Col className="card">
              <h3>
                Why DEV.FIT?{" "}
                <img
                  src="https://img.icons8.com/ios-glyphs/30/fa314a/long-arrow-right.png"
                  alt="right_arrow"
                />
              </h3>
              <p>
                DEV.FIT is revolutionary App that allows you to track and log
                every aspect of your weight loss journey and see it and an easy
                to understand dashboard showing your progress and the nexts
                steps to further your success.
              </p>
            </Col>
            <Col className="card">
              <h3>
                Customer Service / FAQS{" "}
                <img
                  src="https://img.icons8.com/ios-glyphs/30/fa314a/long-arrow-right.png"
                  alt="right_arrow"
                />
              </h3>
              <p>
                Having trouble with the App? no problem feel free to reach out
                to our team in the contact section below we would be happy to
                assist you.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="card">
              <h3>
                DEV.FIT Personal Development{" "}
                <img
                  src="https://img.icons8.com/ios-glyphs/30/fa314a/long-arrow-right.png"
                  alt="right_arrow"
                />
              </h3>
              <p>
                Everyones weight loss and health goals are different. Whether
                your training for a show, your next big game, or just want to
                lose the last 15 pounds you've been holding onto DEV.FIT can
                help you achieve the body and mind you've always wanted.
              </p>
            </Col>
            <Col className="card">
              <h3>
                The DEV.FIT Mobile App{" "}
                <img
                  src="https://img.icons8.com/ios-glyphs/30/fa314a/long-arrow-right.png"
                  alt="right_arrow"
                />
              </h3>
              <p>
                The same great App you've used on desktop not in the palm of
                your hand.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      </Fade>
    </section>
  );
};

export default About;
