import React, {useEffect,useContext} from 'react';
import Project from './project'
import {UserContext} from '../Context/userContext'


function ProjectList() {

    const {username, projects, editingProject, componentDisplayString } = useContext(UserContext)
    const [projectsValue,setProjectsValue] = projects;
    const [usernameValue,setUsernameValue] = username;
    const [editingProjectValue,setEditingProjectValue] = editingProject;
    const [display,setDisplay] = componentDisplayString

    // console.log(projectsValue)

    const projectOnClick = (project) => {
        console.log('clicked')
        setDisplay('editor')
        setEditingProjectValue(project)
    }
    
    useEffect(() => {
        console.log(projectsValue)
    }, [projects])

    if(display === 'projects') {
        // no projects
        if(usernameValue === undefined || projectsValue.length === 0) {
            return(
                <div>
                    kinda empty in here
                </div>
            )
        } else { // Map of projects
            return(projectsValue.map((value) => <Project id={value} projectOnClick={projectOnClick}></Project>))
        }
    }
    else {
        return(null)
    }
}

export default ProjectList;
