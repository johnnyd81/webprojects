import React, { useState } from "react";

//the ProjectForm component uses the onSubmit function prop to send the newly created project up to it's parent component
const ProjectForm = ({ onSubmit }) => {
  const [project, setProject] = useState({ title: "", description: "" });
  
  //handleChange is called whenever a input is typed into by a user
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProject((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.title === "" || project.description === "") {
      alert("Please complete all the fields!!");
    } else {
      onSubmit(project);
      setProject({ title: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={project.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={project.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;
