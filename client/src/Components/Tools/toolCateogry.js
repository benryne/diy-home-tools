import React, { useState, useEffect} from 'react';
import Tool from './tool';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    toolCategoryContainer: {
        borderColor: theme.palette.primary.white,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
    },
    toolCategoryName: {
        color: theme.palette.primary.white,
        fontSize: 30,
        fontWeight: 700,
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        borderBottomColor: theme.palette.primary.lightGrey,
        borderBottomStyle: 'solid',
        borderBottomWidth: 2,
        dislay: 'flex'
    }
}));

function ToolCategory(props) {

    const toolCategoryName = props.toolCategoryName
    const [tools,setTools] = useState(props.tools)
    const [toolsStatus,settoolsStatus] = useState(props.toolsStatus)
    const [loading,setLoading] = useState(true)
    const classes = useStyles()
    
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
            <div classname={classes.toolCategoryContainer}>
                <div className={classes.toolCategoryName}>{toolCategoryName}</div>
                <div>
                    {tools.map((tool) => <Tool toolStatus={toolsStatus} changeToolStatus={changeToolStatus} tool={tool}></Tool>)}
                </div>
            </div>
        )
    }

}

export default ToolCategory;