import React, { useState } from "react";

const ProjectUpdate = ({ project, handleUpdate, closeEdit }) => {
  //stateful value that holds the data of each edited project. It is an object
  const [editProject, setEditProject] = useState({
    title: project.title,
    description: project.description,
  });

  //any changes to a specific project is handled by the handleChange function
  //name refers to the field being altered and the value is what the user types in the field
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    //update the editProject variable which is an object
    setEditProject((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleEditSubmit = (e) => {
    //prevents the browser from refreshing itself when the form is submitted
    e.preventDefault();
    if (editProject.title === "" || editProject.description === "") {
      //the alert message will be shown if the title or the description is empty
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
