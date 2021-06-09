import React from "react";
import pfp from "../assets/pfp.png";
import "../../styles/about.scss";

const About = React.forwardRef((props, ref) => {
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
    <div id="about" ref={ref}>
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
            {courses.map(course => <li>{course}</li>)}
          </ul>
        </details>
      </div>

      <div id="cs-journey">
        <h3>Why I chose CS</h3>
        <section>
          <h4>My Life Before</h4>
          Growing up, I was always "that one art kid." I was always very quiet
          and kept to myself. Much of my time before highschool consisted of
          going with the flow and not being particularly interested or happy
          about anything I did. <br />
          In elementary school, I was forced to participate in chorus and by
          middle school, I went to I.S. 239 Mark Twain for the Gifted and
          Talented for their Art Talent program. In short, I was a heavy liberal
          arts kid. At the time, I didn't believe that I was worthy or capable
          of doing anything other than the arts because it was forcefully
          instilled in me by the people around me. <br />
          Although I loved science and technology, I was often shut down by the
          people around me. They would tell me that I wasn't "good enough" or
          "smart enough" pursue anything STEM related, so I never did for the
          longest time...
        </section>

        <section>
          <h4>The Start of it All</h4>
          <p>
            Personally, I have always been interested in technology and creating
            things since a young age but it wasn't until I pursued an Industrial
            Design major (for 2 years) at Brooklyn Technical High School that I
            was about to manifest this interest into my reality. By this time,
            the judgements decreased and I could finally make decisions without
            the fear and helplessness I had when I was younger. <br />
            Under the Industrial Design major, I was required to learn how to
            design, draft, and produce physical products during that time, but
            it wasn't until my senior year that I had any exposure to coding.
            The coding that I did in my senior year consisted of operating
            milling machines and robotic arms and basic Vex Robotics in my
            computer-integrated manufacturing class (CIM). <br />
            The time I spent in CIM really opened my eyes to this new form of
            creation that I was never exposed to until now so when college
            applications came around, I knew where I wanted to go and there was
            no going back for me after my first year in CS at college.
          </p>
        </section>

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
});

export default About;
