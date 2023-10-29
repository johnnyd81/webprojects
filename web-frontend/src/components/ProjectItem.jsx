import { useState } from "react";
import ProjectUpdate from "./ProjectUpdate";

const ProjectItem = ({ project, onDelete, onUpdate }) => {
  const [openUpdate, setOpenUpdate] = useState(false);

  const handleEditClick = () => {
    setOpenUpdate(true);
  };

  const handleEditClose = () => {
    setOpenUpdate(false);
  };

  const updateProject = (id, editedProject) => {
    onUpdate(id, editedProject);
    setOpenUpdate(false);
  };

  let content = (
    <div>
      <div className="item-field">
        <label style={{ fontWeight: "700" }}>
          Title:{" "}
          <span style={{ fontWeight: "400" }}>
            {project.title &&
              project.title[0].toUpperCase() + project.title.slice(1)}
          </span>
        </label>
      </div>
      <div className="item-field">
        <label style={{ fontWeight: "700" }}>
          Description:{" "}
          <span style={{ fontWeight: "400" }}>
            {project.description &&
              project.description[0].toUpperCase() +
                project.description.slice(1)}
          </span>
        </label>
      </div>
      <div className="actions">
        <i
          className="bx bxs-trash-alt delete"
          onClick={() => onDelete(project.id)}
        ></i>
        <i className="bx bxs-edit-alt edit" onClick={handleEditClick}></i>
      </div>
    </div>
  );

  if (openUpdate) {
    content = (
      <ProjectUpdate
        project={project}
        handleUpdate={updateProject}
        closeEdit={handleEditClose}
      />
    );
  }

  return <div className="project-item">{content}</div>;
};

export default ProjectItem;
