import React, {useState,useEffect} from 'react';
import ToolCategory from '../Tools/toolCateogry';

function SelectedTools(props) {

    const [tools,setTools] = useState([])
    const [loading,setLoading] = useState(false)
    
    const unselectTool = (tool) => {
        props.unselectToolFunction(tool)
        removeTool(tool)
    }

    const removeTool = (tool) => {
        setTools(tools.filter(item => item !== tool))
    }

    useEffect(() => {
        setTools(props.tools)
        console.log(props.tools)
    },[props.tools])

    if(loading) {
        return(
            <div>loading...</div>
        )       
    } else {
        return(
            <div>
                <ToolCategory toolsStatus='selected' changeToolStatus={unselectTool} toolCategoryName={"tool-category"} tools={tools}></ToolCategory>
                <ToolCategory toolsStatus='selected' changeToolStatus={unselectTool} toolCategoryName={"catogory2"} tools={tools}></ToolCategory>
            </div>
        )
    }

}

export default SelectedTools;