import React, {useState,useEffect, useContext } from 'react';
import {UserContext} from '../Context/userContext'

function Project(props) {

    const {projects, userId} = useContext(UserContext)
    const [projectList,setProjectList] = projects
    const [id,setId] = userId;
    const [name,setName] = useState('')
    const [projectId,setProjectId] = useState(props.id)
    const [ display, setDisplay ] = useState(true)
 
    useEffect(() => {
        setProjectId(props.id)
        const apiURL = `http://localhost:5000/projects/project-by-id?projectid=${projectId}`
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data) 
                setName(data.name);
            })
    },[props.id])

    const projectOnClick = () => {
        props.projectOnClick(projectId)
    }

    const deleteProject = () => {
        const apiURL = `http://localhost:5000/projects/delete-project?projectid=${projectId}`
        fetch(apiURL)
            .then((response) => {
                if(response.ok)
                    return response.json()
                else 
                    return null;
            })
            .then((data) => {
                console.log(data) 
                const deleteProjectFromUserApiURL = `http://localhost:5000/user/delete-project?projectid=${projectId}&userid=${id}`
                fetch(deleteProjectFromUserApiURL)
                    .then((response) => response.json())
                    .then((data) => {
                        const tempProjectList = projectList;
                        const deletedProjectIndex = tempProjectList.indexOf(projectId);
                        console.log(projectId + " " + deletedProjectIndex + " " + tempProjectList)
                        tempProjectList.splice(deletedProjectIndex,1)
                        console.log(tempProjectList)
                        setProjectList(tempProjectList);
                        setDisplay(false)
                    })
            })
    }
    if(display) {
        return(
            <div>
                <div onClick={projectOnClick}>{name}</div>
                <button onClick={deleteProject}>x</button>
            </div>
        )
    } else {
        return null;
    }

}

export default Project;