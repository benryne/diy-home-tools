import React, {useState,useEffect} from 'react';

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
    if(name == undefined) {
        return(
            <div>
                kinda empty in here
            </div>
        )
    }
    return(
        projects.map((p) => <div>{p}</div>)
            
    )
}

export default ProjectList;

// 5f7f73df031c600ff23a7be6 5f7f73ec031c600ff23a7be7