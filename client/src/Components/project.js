import React, {useState,useEffect} from 'react';


function Project(props) {

    const [name,setName] = useState('')
    const [id,setId] = useState(props.id)

    useEffect(() => {
        setId(props.id)
        const apiURL = `http://localhost:5000/project-by-id?projectid=${id}`
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data) 
                setName(data.name);
            })
    },[props.id])

    const projectOnClick = () => {
        props.projectOnClick(id)
    }

    return(
        <div onClick={projectOnClick}>{name}</div>
    )

}

export default Project;