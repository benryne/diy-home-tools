import React, { useState, useEffect} from 'react';

import Tool from './tool';

function ToolCategory(props) {

    const toolCategoryName = props.toolCategoryName
    const [tools,setTools] = useState(props.tools)
    const [loading,setLoading] = useState(true)
    
    const changeToolStatus = (tool) => {
        let toolsL = tools;
        console.log(toolsL)
        console.log(tool)
        for(var i = 0; i < toolsL.length; i++ ) {
            if(tool === toolsL[i])
                toolsL.splice(i,1)
        }
        console.log(toolsL)
        setTools(toolsL)
        props.changeToolStatus(tool)
    }

    useEffect(() => {
        console.log(props.tools)
        setLoading(true)
        fetch(`http://localhost:5000/tools/tools-by-category?toolcategory=${toolCategoryName}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(tools)
            let toolsInCategory = []
            data.forEach(tool => { 
                props.tools.forEach(_tool => {
                    if(_tool._id == tool._id) {
                        toolsInCategory.push(tool)
                    }
                })
                
            })
            console.log(toolsInCategory)
            setTools(toolsInCategory)
            setLoading(false)
        })
    },[props.tools])

    if(loading) {
        return(
            <div>loading...</div>
        )       
    } else {
        return(
            <div>
                <div>{toolCategoryName}</div>
                <div>
                    {tools.map((tool) => <Tool changeToolStatus={changeToolStatus} tool={tool}></Tool>)}
                </div>
            </div>
        )
    }

}

export default ToolCategory;