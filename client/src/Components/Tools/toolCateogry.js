import React, { useState, useEffect, useContext} from 'react';

import {UserContext} from '../Context/userContext';
import Tool from './tool';

function ToolCategory(props) {

    const { editingProject, componentDisplayString } = useContext(UserContext)
    const toolCategoryName = props.toolCategoryName
    const addOrRemoveString = props.addOrRemoveString
    const [projectID,setProjectID] = editingProject
    const [display,setDisplay] = componentDisplayString
    const [tools,setTools] = useState([])
    const [loading,setLoading] = useState(true)
    

    const toolOnClick = (tool) => {
        let toolsL = tools;
        console.log(toolsL)
        for(var i = 0; i < toolsL.length; i++ ) {
            if(tool === toolsL[i])
                toolsL.splice(i,1)
        }
        setTools(toolsL)
    }

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/tools/tools-by-category?toolcategory=${toolCategoryName}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let toolsInCategory = []
            console.log(props.tools)
            data.forEach(tool => { 
                props.tools.forEach(_tool => {
                    console.log(tool)
                    console.log(_tool)
                    if(_tool === tool) {
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
                    {tools.map((tool) => <Tool onClick={toolOnClick} name={tool.name}></Tool>)}
                </div>
            </div>
        )
    }

}

export default ToolCategory;