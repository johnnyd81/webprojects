import { useState } from "react";
import ProjectUpdate from "./ProjectUpdate";

const ProjectItem = ({ project, onDelete, onUpdate }) => {
  //openUpdate is a state variable that controls the opening and closing of the update component
  const [openUpdate, setOpenUpdate] = useState(false);
  //opens the update modal if the edit button is clicked for that specific ProjectItem
  const handleEditClick = () => {
    setOpenUpdate(true);
  };

  //the openUpdate boolean value decides whether the edit modal is rendered or not
  //if it's true the modal is visible and removed when it is false
  const handleEditClose = () => {
    setOpenUpdate(false);
  };

  //update a specific project and close the update modal by setting the value to false
  const updateProject = (id, editedProject) => {
    onUpdate(id, editedProject);
    setOpenUpdate(false);
  };

  //the content variable contains the html that is rendered 
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
