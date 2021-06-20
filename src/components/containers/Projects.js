import React, {useState} from "react";

const Projects = () => {
    const project_types = ["All", "Coding", "Design", "Art", "Crafting", "Building", "Photography"];
    const allProjects = require("../utils/projects-list");
    const [filter,setFilter] = useState("All");
    const [currentProjects, setCurrentProjects] = useState(allProjects);
    const handleFilter = (e) => {
        setFilter(e.target.value);
        if(e.target.value === "All") setCurrentProjects(allProjects);
        else setCurrentProjects(allProjects.filter(obj => obj.type === e.target.value));
    };
    return (
        <div id="projects">
            <select value={filter} onChange={handleFilter}>
                {project_types.map((type) => <option value={type}>{type}</option>)}
            </select>
            <div className="container">
                {currentProjects.map((proj) => <p>{proj.name}</p>)}
            </div>
        </div>
    );
}

export default Projects;