import React, { useState } from "react";

const ProjectUpdate = ({ project, handleUpdate, closeEdit }) => {
  //state value that holds the data of each edited project
  const [editProject, setEditProject] = useState({
    title: project.title,
    description: project.description,
  });

  //any changes to a project is handled by the handleChange function
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
    <form onSubmit={handleEditSubmit} className="form-box update">
      <div>
        <label className="form-field">
          Title:{" "}
          <input
            type="text"
            name="title"
            value={editProject.title}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label className="form-field">
          Description:{" "}
          <input
            type="text"
            name="description"
            value={editProject.description}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={closeEdit}>
        Cancel
      </button>
    </form>
  );
};

export default ProjectUpdate;
