import { useState, useEffect } from "react";
import Header from "./Header";
import "../App.css";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const ProjectUI = () => {
  //by using the useEffect hook I fetch my projects using the projects variable below
  const [projects, setProjects] = useState([]);

  //the useEffect hook helps me update my UI.
  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch("http://localhost:8080/api/projects");
      const json = await response.json();

      if (response.ok) {
        setProjects(json.data.projects);
        console.log(json);
      } else {
        console.log("Error in fetching project data!!");
      }
    };
    getProjects();
  }, []);

  //my new projects are sent to my backend json file using the function below.
  //the route in the fetch method is my POST route
  const addProject = (newProject) => {
    fetch("http://localhost:8080/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("New project successfully added");
        setProjects((prev) => [...prev, json.newProject]);
      })
      .catch((Error) => console.log("Error:", Error));
  };

  //the function below deletes the project with the matching id
  const deleteProject = (id) => {
    fetch("http://localhost:8080/api/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Project deleted!");
        let newProjects = projects.filter((project) => project.id !== id);
        setProjects(newProjects);
      })
      .catch((Error) => console.log("Error:", Error));
  };

  //similar to the delete route the update function below updates the project that matches the id
  const updateProject = (id, editedProject) => {
    fetch("http://localhost:8080/api/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(editedProject),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Project updated!");
        let newProjects = projects.map((project) => {
          if (project.id === json.updatedProject.id) {
            return {
              ...json.updatedProject,
            };
          } else {
            return project;
          }
        });
        setProjects(newProjects);
      })
      .catch((Error) => console.log("Error:", Error));
  };

  return (
    <div className="App">
      <Header />
      <ProjectForm onSubmit={addProject} />
      <ProjectList
        projects={projects}
        onDelete={deleteProject}
        onUpdate={updateProject}
      />
    </div>
  );
};

export default ProjectUI;
