import React from "react";
import Fade from 'react-reveal/Fade';
import "../../css/Feature.css";

const Feature = () => {
  return (
    <section id="features" className="featContainer">
      <Fade top duration={1500}>
      <div className="title">
        <h1>
          Fea<span className="title-span gradient">tu</span>res
        </h1>
      </div>
      <div className="features">
        <div className="feature">
          <img
            src="https://img.icons8.com/ios/80/fa314a/strength.png"
            alt="exercise"
          />
          <h3>Exercises</h3>
          <p>
            Customize your workout plan to suit your body and your goals. Log
            your workouts, track your progress, and see your results.
          </p>
        </div>
        <div className="feature">
          <img
            src="https://img.icons8.com/dotty/80/fa314a/meal.png"
            alt="fasting"
          />
          <h3>Fasting</h3>
          <p>
            Track your fasting protocol and see what phase of fat burning you're
            in. Track your previous fasts and the progress you've made.
          </p>
        </div>
        <div className="feature">
          <img
            src="https://img.icons8.com/pastel-glyph/80/fa314a/define-location--v1.png"
            alt="goals"
          />
          <h3>Goals</h3>
          <p>
            Set goals for your week, month, year. See them on your Dashboard to
            remind you every day of your next step.
          </p>
        </div>
        <div className="feature">
          <img
            src="https://img.icons8.com/carbon-copy/80/fa314a/calendar--v1.png"
            alt="streak"
          />
          <h3>Streaks</h3>
          <p>
            See how consistent you've been with your progress and developement.
            Nothing like a little extra motivation to see how far you've come.
          </p>
        </div>
      </div>
      </Fade>
    </section>
  );
};

export default Feature;
