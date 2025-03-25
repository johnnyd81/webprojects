import React from "react";
import ProjectItem from "./ProjectItem"; // import the ProjectItem module

//the ProjectList component contains all the individual ProjectItem components that are available in the database
//the props object contains the delete and edit methods as well as the data for each project
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
