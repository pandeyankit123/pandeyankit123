import React from "react";
import "./projectcard.css";
function ProjectCard({ project, index }) {
  
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i className="fi fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i className="devicon-github-original colored"></i>Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <div id={`carouselExampleIndicators${index}`}  className="carousel slide main" data-ride="carousel">
        <div className="carousel-inner" style={{zIndex: -1}}>
          {project.image.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img className="d-block w-100 project-photo" src={image} />
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href={`#carouselExampleIndicators${index}`} role="button" data-slide="prev">
          <span className="carousel-control-prev-icon bg-secondary" style={{borderRadius:"25px"}} aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href={`#carouselExampleIndicators${index}`} role="button" data-slide="next">
          <span className="carousel-control-next-icon bg-secondary" style={{borderRadius:"25px"}} aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;