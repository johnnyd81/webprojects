import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects, onDelete, onUpdate }) => {
  const renderedProjects = projects.map((project) => {
    return (
      <ProjectItem
        key={project.id}
        project={project}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    );
  });
  return <div className="project-box">{renderedProjects}</div>;
};

export default ProjectList;
