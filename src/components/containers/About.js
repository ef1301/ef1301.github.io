import React, { useState } from "react";
import pfp from "../assets/pfp.png";
import "../../styles/about.scss";

import AboutText from './AboutText';
import AboutAnimation from './AboutAnimation';

const About = () => {
  const [animation, setAnimation] = useState(true);

  const toggleAnimation= () => setAnimation(animation ? false : true);
  const courses = [
    "Advanced Programming Languages",
    "Computer Architecture",
    "Computer Theory",
    "Data Structures and Algorithms",
    "Database Management",
    "Digital Product Development",
    "Discrete Structures",
    "Introduction to Blockchain",
    "Operating Systems",
    "Practical Web Development",
    "Relational Databases & SQL Programming",
    "Software Analysis & Design",
  ];

  return (
    <div id="about" >
      <div id="about-bio">
        <img id="pfp" src={pfp} alt="Emily Fang"></img>
        <div id="bio">
          <h2>About Me, Emily Fang.</h2>
          My name is Emily Fang and I am an undergraduate attending Hunter
          College. I major in Computer Science and minor in Mathematics. I
          specialize in front-end and UX/UI development. I hope to utilize this
          web app for more than portfolio use and have it reflect my interests,
          my mindset, and more.
          <details>
            <summary>I am...</summary>
            <ul>
              <li>An Aspiring Vegan</li>
              <li>An Asexual 🏳️‍🌈 </li>
              <li>A Lover of the Arts</li>
              <li>An Animal Enthusiast</li>
            </ul>
          </details>
        </div>

        <details>
          <summary>My Coursework</summary>
          <ul>
            {courses.map((course, index) => (
              <li key={`coursework${index}`}>{course}</li>
            ))}
          </ul>
        </details>
      </div>

      <div id="cs-journey">
        <div id="animate">
          Animate
          <br />
          <label className="switch">
            <input type="checkbox" />
            <span className="slider" onClick={toggleAnimation}></span>
          </label>
          {animation ? <AboutAnimation/> : <AboutText/> }
        </div>
        
        <section>
          <h3>What I love about CS</h3>
          <ul>
            <li>
              Problem Solving + The Satisfaction When You Finally Figure it Out
            </li>
            <li>Limitless Potential</li>
            <li>Its Intersection with Logic and Creativity</li>
            <li>How Interesting it is</li>
            <li>How There is Always Something New to Learn</li>
          </ul>
        </section>
      </div>

      <h2>Other Nonsensical Details</h2>
      <ul>
        <li>ENFP</li>
        <li></li>
      </ul>
    </div>
  );
};

export default About;
