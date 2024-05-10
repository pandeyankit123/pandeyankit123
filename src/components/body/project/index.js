import React from "react";
import Separator from "../../../common/separator";
import { ProjectData } from "../../Data/project";
import "./project.css";
import ProjectCard from "./projectcard";

function Project() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project, index) => {
          return <ProjectCard project={project} index={index} />;
        })}
      </div>
    </div>
  );
}

export default Project;