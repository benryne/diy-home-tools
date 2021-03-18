import React, {useState,useEffect} from 'react';
import ToolCategory from '../Tools/toolCateogry';

function UnselectedTools(props) {

    const [tools,setTools] = useState(props.tools)
    const [loading,setLoading] = useState(false)
    
    const selectTool = (tool) => {
        removeTool(tool)
        props.unSelectToolFunction(tool)
    }

    const removeTool = (tool) => {
        setTools(tools.filter(item => item !== tool))
    }

    useEffect(() => {
        setTools(props.tools)
    },[props.tools])

    if(loading) {
        return(
            <div>loading...</div>
        )       
    } else {
        return(
            <div>
                <ToolCategory changeToolStatusFunction={selectTool} toolCategoryName={"tool-category"} tools={tools} ></ToolCategory>
                <ToolCategory changeToolStatusFunction={selectTool} toolCategoryName={"catogory2"} tools={tools}></ToolCategory>
            </div>
        )
    }

}

export default UnselectedTools;