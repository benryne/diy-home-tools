import React, {useState,useEffect} from 'react'


function Tool(props) {

    const [tool,setTool] = useState(props.tool)

    const changeToolStatus = () => {
        props.changeToolStatus(tool)
    }

    useEffect(() => {
        setTool(props.tool)
    })

    return(
        <div>
            <div>{tool.name}</div>
            <button onClick={changeToolStatus}>change</button>
        </div>
    )

}

export default Tool; 
