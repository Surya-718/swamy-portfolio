import React from "react";
import "./Projects.css";
import projects from "../../assets/mywork_data";

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <h1 className="section-title">My Projects</h1>
      <div className="projects-container">
        {projects.slice(0, 3).map((project) => (
          <div className="card dark-card" key={project.w_no}>
            <img src={project.w_img} className="card-img-top" alt={project.w_name} />
            <div className="card-body text-bg-dark">
              <h5 className="card-title">{project.w_name}</h5>
              <p className="card-text">{project.w_des}</p>
              <a href={project.w_link} className="btn btn-primary" target="_blank" >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
