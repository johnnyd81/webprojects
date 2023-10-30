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
    <form onSubmit={handleSubmit} className="form-box">
      <div>
        <label className="form-field">
          Title:{" "}
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChange}
            placeholder="project title"
          />
        </label>
      </div>
      <div>
        <label className="form-field">
          Description:{" "}
          <input
            type="text"
            name="description"
            value={project.description}
            onChange={handleChange}
            placeholder="short project description"
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;
