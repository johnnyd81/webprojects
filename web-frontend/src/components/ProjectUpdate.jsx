import React, { useState } from "react";

const ProjectUpdate = ({ project, handleUpdate, closeEdit }) => {
  const [editProject, setEditProject] = useState({
    title: project.title,
    description: project.description,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEditProject((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editProject.title === "" || editProject.description === "") {
      alert("Please complete all the fields!!");
    } else {
      handleUpdate(project.id, editProject);
    }
  };

  return (
    <form onSubmit={handleEditSubmit}>
      <div>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={editProject.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={editProject.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={closeEdit}>
        Cancel
      </button>
    </form>
  );
};

export default ProjectUpdate;
