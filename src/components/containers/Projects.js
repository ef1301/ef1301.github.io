import React, { useState } from "react";
import SingleProject from "./Project";
import allProjects from "../utils/projects-list";

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
      <label for="projects-filter">Filter: </label>
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

      <div className="container">
        {currentProjects ? (
          currentProjects.map((proj) => (
            <SingleProject key={proj.name} proj={proj} />
          ))
        ) : (
          <>No Projects.</>
        )}
      </div>
    </div>
  );
};

export default Projects;
