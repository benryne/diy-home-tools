import React ,{ useContext, useState } from 'react';
import {UserContext} from '../Context/userContext'

function NewProject() {

    const { componentDisplayString, userId, editingProject, projects } = useContext(UserContext)
    const [display, setDisplay] = componentDisplayString;
    const [user,setUser] = userId;
    const [createdProject,setCreatedProject] = editingProject;
    const [projectList,setProjectList] = projects;
    const [newProjectName,setNewProjectName] = useState('')


    const createNewProjectSubmitHandler = (event) => {
        event.preventDefault();
        console.log(event);

        // creates new project in mongodb
        const apiURL = `http://localhost:5000/projects/create-project?name=${newProjectName}`
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data) 
                const projectId = data._id;
                const addProjectApiURL = `http://localhost:5000/user/add-project?userid=${user}&projectid=${projectId}`
                // adds that project to list of user projects
                fetch(addProjectApiURL)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                        setNewProjectName('')
                        setCreatedProject(projectId)
                        const newProjectList = projectList.concat(projectId);
                        setProjectList(newProjectList);
                        setDisplay('editor')
                    })
            })
    }

    const handleProjectNameChange = (event) => setNewProjectName(event.target.value);

    if(display === 'projects') {
        return(
            <div>
                Create Project
                <form onSubmit={createNewProjectSubmitHandler}>
                    <label>
                        Project Name:
                        <input type="text" value={newProjectName} onChange={handleProjectNameChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    } else {
        return null;
    }
}

export default NewProject;