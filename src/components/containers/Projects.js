import React, { useState } from "react";
import SingleProject from "./Project";
import allProjects from "../utils/projects-list";
import "../../styles/projects.scss";

const Projects = () => {
  const project_types = [
    "All",
    "Coding",
    "Design",
    "Art",
    "Crafting",
    "Building",
    "Photography",
  ];
  //const allProjects = require("../utils/projects-list");
  const [filter, setFilter] = useState("All");
  const [currentProjects, setCurrentProjects] = useState(allProjects);
  const handleFilter = (e) => {
    setFilter(e.target.value);
    if (e.target.value === "All") setCurrentProjects(allProjects);
    else {
      setCurrentProjects(
        allProjects.filter((obj) => obj.type === e.target.value)
      );
    }
  };

  return (
    <div id="projects">
      <div id="project-header">
        <div className="filter">
          <label htmlFor="projects-filter">Filter: </label>
          <select
            id="projects-filter"
            name="projects_filter"
            value={filter}
            onChange={handleFilter}
          >
            {project_types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="container">
        {currentProjects &&
          (currentProjects.length > 0 ? (
            currentProjects.map((proj) => (
              <SingleProject key={proj.name} proj={proj} />
            ))
          ) : (
            <section>
              <h2>
                Sorry! There appears to be no projects under the '{filter}'
                filter.
              </h2>
            </section>
          ))}
      </div>
    </div>
  );
};

export default Projects;
