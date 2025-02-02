import React, { useState } from "react";

//the ProjectForm component uses the onSubmit function prop to send the newly created project up to it's parent component
//the parent component then sends the data to the backend
const ProjectForm = ({ onSubmit }) => {
  //the stateful project object is initially empty 
  const [project, setProject] = useState({ title: "", description: "" });
  
  //handleChange is called whenever an input field is typed into by a user
  //the e parameter represents the event object that contains the target.name and target.value properties
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    //update the project state variable by taking all the existing project data and adding on the new project data
    // since the project stateful variable is an object the name acts as the key 
    setProject((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //the handleSubmit function submits the new project that will be stored in the database
  const handleSubmit = (e) => {
    //prevent the browser from refreshing itself when the project is submitted by calling the preventDefault method
    e.preventDefault();
    //the if statement makes sure that the title and description are not empty by alerting the user to complete them
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
