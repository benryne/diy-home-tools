import React, {useState,useEffect} from 'react';
import ToolCategory from '../Tools/toolCateogry';

function UnselectedTools(props) {

    const [tools,setTools] = useState(props.tools)
    const [loading,setLoading] = useState(false)
    
    const selectTool = (tool) => {
        props.selectToolFunction(tool)
        removeTool(tool)
    }

    const removeTool = (tool) => {
        setTools(tools.filter(item => item !== tool))
    }

    useEffect(() => {
        setTools(props.tools)
        console.log("unselected")
    },[props.tools])

    if(loading) {
        return(
            <div>loading...</div>
        )       
    } else {
        return(
            <div>
                <ToolCategory changeToolStatus={selectTool} toolCategoryName={"tool-category"} tools={tools} ></ToolCategory>
                <ToolCategory changeToolStatus={selectTool} toolCategoryName={"catogory2"} tools={tools}></ToolCategory>
            </div>
        )
    }

}

export default UnselectedTools;