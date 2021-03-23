import React, {useState,useEffect} from 'react'


function ToolList(props) {

    const [name,setName] = useState(props.name)

    useEffect(() => {
        setName(props.name)
    })

    return(
        
        <div>
            <div>tools selected:</div>
            <div>
                {toolsSelected.map((tool) => <div key={tool._id} onClick={() => unSelectTool(tool)}>{tool.name}</div>)}
            </div>
            <div>other tools:</div>
            <div>
                {toolsLeft.map((tool) => <div key={tool._id} onClick={() => selectTool(tool)}>{tool.name}</div>)}
            </div>
        </div>
    )

}

export default ToolList; 