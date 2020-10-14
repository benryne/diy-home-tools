import React, {useState,useEffect} from 'react';
import Project from './project'


function ProjectList(props) {

    const [name,setName] = useState(props.user.name)
    const [id,setId] =useState(props.user.id)
    const [projects,setProjects] = useState(props.user.projects)

    useEffect(() => {
        console.log(name)
        setName(props.user.name)
        setId(props.user.id)
        setProjects(props.user.projects)
    })
    if(name == undefined || projects.length == 0) {
        return(
            <div>
                kinda empty in here
            </div>
        )
    }
    return(
        projects.map((p) => <Project id={p} display></Project>)
            
    )
}

export default ProjectList;

// 5f7f73df031c600ff23a7be6 5f7f73ec031c600ff23a7be7