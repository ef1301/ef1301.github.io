import { projectImages } from "../assets/Projects";
//console.log(projectImages)
const allProjects = [
  {
    name: "Dot Politics",
    type: "Coding",
    link: "https://github.com/ef1301/DotPolitics",
    description:
      "DotPolitics is a useful tool to look up elected representatives across the United States based on location. We provide basic information and links to each representative's social media(s) and contact information, using the Google Civics Information API.",
    tags: [
      "Hunter College",
      "React",
      "NodeJS",
      "Bootstrap",
      "Google Civics Information API",
      "Github Pages",
    ],
    images: projectImages.dotpolitics,
  },
  {
    name: "TheWegMenu",
    type: "Coding",
    link: "https://github.com/jzaia18/TheWegMenu",
    description:
      "TheWegMenu is a Flask app that utilizes the Wegmans and Edamam APIs to create a weekly meal planner that can accomodate for dietary restrictions by highlighting ingredients that do not fit said restrictions and suggesting alternatives.",
    tags: ["Flask", "Wegman API", "Edamam API", "HTML", "CSS", "JavaScript"],
    images: projectImages.thewegmenu,
  },
  {
    name: "Byte Me",
    type: "Coding",
    link: "https://github.com/ef1301/restaurant-frontend",
    description:
      "Byte Me is a React application that utilizes React Redux, Express, NodeJS, Postgres, and Twilio to simulate the e-commerce experience when it comes to restaurant deliveries and orders online",
    tags: [
      "CUNY TTP",
      "CUNY 2X",
      "React Redux",
      "NodeJS",
      "Postgres",
      "Heroku",
      "Twilio",
    ],
    images: projectImages.byteme,
  },
  {
    name: "Daedalus Logo",
    type: "Design",
    link: "",
    description: "In an effort to update the Hunter College Daedalus Honors Logo, this logo was designed to encapsulate the Greek origins and inspirations from the original.",
    tags: ["Hunter Collge", "Daedalus Honors", "Krita"],
    images: [projectImages.daedalus]
  },
  {
    name: "Birthday Gift",
    type: "Crafting",
    link: "",
    description:
      "For a really good friend of mine, I made a smaller verson of the wooden watercolor books with hand-drawings. The pages included various art pieces with song lyrics that reminded me of our relationship together.",
    tags: ["Laser Cutting", "Book Binding", "Watercolor", "Ink", "Hand-drawn"],
    images: projectImages.bdaygift,
  },
  {
    name: "Wooden Watercolor Books",
    type: "Crafting",
    link: "",
    description:
      "Laser cut, engraved, and painted book covers and spines with a hand-sewn and hand-glued paper block using cold-pressed watercolor paper.",
    tags: ["Laser Cutting", "Book Binding"],
    images: [],
  },
  {
    name: "Flatpack Stool & Table",
    type: "Building",
    link: "https://drive.google.com/file/d/1HsbzGccLF8i6ugOmccayKQsiXXQWCRja/view?usp=sharing",
    description: "",
    tags: ["Woodworking", "AutoCAD", "Drafting & Design", "Sewing"],
    images: [],
  },
  {
    name: "Breadbox Desktop Organizer",
    type: "Building",
    link: "https://drive.google.com/file/d/1fDoT90kC1r7hwUNjRNn8WQzV8AJViIsr/view?usp=sharing",
    description:
      "A desktop organizer inspired and based around breadbox functionalities to allow for easy access and a beautiful treasure chest-like design. With the intentions of sparking joy without the expense of convenience and wasted desk space.",
    tags: ["Woodworking", "AutoCAD", "Drafting & Design"],
    images: projectImages.breadbox,
  },
  {
    name: "Alexithymia",
    type: "Photography",
    link: "",
    description:
      "While on a stroll along Brooklyn's Caesar's Bay, I came across this beautiful sunset blended into soft clouds. At the same time, a fisherman was looking out into the same view as I was. Without knowing this person, I felt that we were connected by this one view. A warm but indescribable feeling.",
    tags: ["Photography"],
      images: [projectImages.alexithymia],
  },
];

//module.exports = allProjects;
export default allProjects;
