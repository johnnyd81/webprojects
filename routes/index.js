const express = require("express");
const router = express.Router();
//the file system module is built into node.js
const fs = require("fs");

//the line below converts the json format into a javascript object
const projects = JSON.parse(fs.readFileSync("./projects.json"));

//the function below creates a random id for each project that is created
const createId = () => {
  return Math.floor(Math.random() * Date.now());
};

router.get("/api/projects", (req, res) => {
  res
    .status(200)
    .json({ status: "success", result: projects.length, data: { projects } });
});

router.post("/api/create", (req, res) => {
  const newId = createId();
  //the line below creates a new object
  const newProject = Object.assign({ id: newId }, req.body);
  //the line below adds the new project to the projects array i.e the projects.json file
  projects.push(newProject);
  //the fs.writeFile method writes the new array to the projects.json file
  fs.writeFile("projects.json", JSON.stringify(projects), (err) => {
    if (err) res.send("Something went wrong.");
    res.json({ message: "File created", newProject });
  });
});

router.delete("/api/:id", (req, res) => {
  const project = req.params.id * 1; //by multiplying by 1 the id is converted to a number
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === project) {
      projects.splice(i, 1);
    }
  }
  //the fs.writeFile method writes the new array to the projects.json file
  fs.writeFile("projects.json", JSON.stringify(projects), (err) => {
    if (err) throw err;
    res.send({ message: "project deleted", data: { projects } });
  });
});

router.put("/api/:id", (req, res) => {
  const projectId = req.params.id * 1;
  const updatedProject = Object.assign({ id: projectId }, req.body);
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === projectId) {
      projects[i] = updatedProject;
    }
  }
  fs.writeFile("projects.json", JSON.stringify(projects), (err) => {
    if (err) throw err;
    res.json({ message: "project updated", updatedProject });
  });
});
//the declaration below exports the router module
module.exports = router;
