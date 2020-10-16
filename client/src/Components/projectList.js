import React, {useState,useEffect} from 'react';
import Project from './project'


function ProjectList(props) {

    const [name,setName] = useState(props.user.name)
    const [id,setId] =useState(props.user.id)
    const [projects,setProjects] = useState(props.user.projects)
    const [display,setDisplay] = useState(false)

    useEffect(() => {
        setName(props.user.name)
        setId(props.user.id)
        setProjects(props.user.projects)
        setDisplay(props.display)
    })


    const projectOnClick = (project) => {
        console.log('clicked')
        setDisplay(false)
        props.projectForEditor(project)
    }
    

    if(display === false) {
        return null;
    }
    if(name == undefined || projects.length == 0) {
        return(
            <div>
                kinda empty in here
            </div>
        )
    } else {
        return(
            projects.map((p) => <Project id={p} projectOnClick={projectOnClick}></Project>)     
        )
    }
}

export default ProjectList;
