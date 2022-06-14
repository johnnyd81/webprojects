import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  //a new project is stored in the variable below and is sent to my backend json file using the POST request
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
  })
  //by using the useEffect hook I fetch my projects using the projects variable below
  const [projects, setProjects] = useState([])
  //the variable below helps me to update data by changing the functonality of the ADD and UPDATE button in my UI
  const [updateData, setUpdateData] = useState(false)
  //the variable below allows me to use the id of the chosen project to alter it's contents
  const [updatedProject, setUpdatedProject] = useState({
    id: '',
    title: '',
    description: '',
  })

  //the function below is called when the update button of the project is clicked
  const openUpdate = (id) => {
    setUpdateData(true)
    alert('Complete the input fields and click the UPDATE PROJECT button below')
    setUpdatedProject(() => {
      return {
        id: id,
      }
    })
  }
  //the function below handles the changes made in my input fields and I used destructuring to assign the name and the value
  const handleChange = (event) => {
    const { name, value } = event.target
    setNewProject((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }
  //handles my updates to a specific project
  const handleUpdate = (event) => {
    const { name, value } = event.target
    setUpdatedProject((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }
  //my new projects are sent to my backend json file using the function below.
  //the route in the fetch method is my POST route
  const addProject = (event) => {
    event.preventDefault()
    fetch('/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    })
      .then((res) => res.json())
      .then(() => alert('New project successfully added'))
      .catch((Error) => console.log('Error:', Error))
    setNewProject({ title: '', description: '' })
  }
  //the function below fetches my projects from my backend json file
  const getProjects = () => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((result) => setProjects(result.data.projects))
      .catch((Error) => console.log('Error:', Error))
  }
  //the useEffect hook helps me update my UI. I created an interval that refreshes my UI every three seconds
  useEffect(() => {
    getProjects()
    const interval = setInterval(() => {
      getProjects()
    }, 3000)

    return () => clearInterval(interval)
  }, [])
  //the function below deletes the project with the matching id
  const deleteProject = (id) => {
    fetch('/api/' + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => alert('Project deleted!'))
      .catch((Error) => console.log('Error:', Error))
  }
  //similar to the delete route the update function below updates the project that matches the id
  const updateProject = (id) => {
    fetch('/api/' + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedProject),
    })
      .then((res) => res.json())
      .then(() => alert('Project updated!'))
      .catch((Error) => console.log('Error:', Error))
    setUpdateData(false)
    setNewProject({ title: '', description: '' })
  }
  //my mapped projects are stored in the variable below to make my return statement a bit leaner
  const projectsList = projects.map((item) => (
    <li key={item.id} className="listItem">
      <span className="title">Title: {item.title}</span>
      <span className="description">Description: {item.description}</span>
      <div className="buttons">
        <button className="button1" onClick={() => deleteProject(item.id)}>
          Delete
        </button>
        <button className="button2" onClick={() => openUpdate(item.id)}>
          Update
        </button>
      </div>
    </li>
  ))

  return (
    <div className="App">
      {!updateData ? ( //I used the ternary operator to alter my UI between the ADD and UPDATE phases.
        <div className="main">
          <Header />
          <input
            type="text"
            name="title"
            placeholder="Enter the title of the project"
            className="input1"
            value={newProject.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Enter the description of the project"
            className="input2"
            value={newProject.description}
            onChange={handleChange}
          />
          <button className="button" onClick={addProject}>
            ADD NEW PROJECT
          </button>
        </div>
      ) : (
        //the segment of code below is used when the user wants to update parts of the project
        <div className="main">
          <Header />
          <input
            type="text"
            name="title"
            placeholder="Enter the title of the project"
            className="input1"
            value={updatedProject.title}
            onChange={handleUpdate}
          />
          <input
            type="text"
            name="description"
            placeholder="Enter the description of the project"
            className="input2"
            value={updatedProject.description}
            onChange={handleUpdate}
          />
          <button
            className="button3"
            onClick={() => updateProject(updatedProject.id)}
          >
            UPDATE PROJECT !!
          </button>
        </div>
      )}
      <ul className="listContainer">{projectsList}</ul>
    </div>
  )
}

export default App
