import React, {useState,useEffect} from 'react'


function Tool(props) {

    const [name,setName] = useState(props.name)

    useEffect(() => {
        setName(props.name)
    })

    return(
        <div>{name}</div>
    )

}

export default Tool; 
