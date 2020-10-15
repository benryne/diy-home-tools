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

// 5f7f643253fe4b0ed3d889a3 5f7f645a53fe4b0ed3d889a4