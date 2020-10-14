import React, {useState,useEffect} from 'react';


function Project(props) {

    const [name,setName] = useState('')
    const [id,setId] = useState(props.id)
    const [tools,setTools] = useState('')

    useEffect(() => {
        setId(props.id)
        const apiURL = `http://localhost:5000/project-by-id?projectid=${id}`
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data) 
                let info = data[0];
                setName(data.name);
            })
    })


    return(
        <div>{name}</div>
    )

}

export default Project;