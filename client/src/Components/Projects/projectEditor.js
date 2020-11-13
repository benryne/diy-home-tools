import React, {useState,useEffect,useContext} from 'react';
import {UserContext} from '../Context/userContext'

function ProjectEditor() {

    const { editingProject, componentDisplayString } = useContext(UserContext)
    const [projectName,setProjectName] = useState('')
    const [toolsSelected,setToolsSelected] = useState([])
    const [toolsLeft,setToolsLeft] = useState([])
    const [display,setDisplay] = componentDisplayString;
    const [loading,setLoading] = useState(false)
    const [projectID,setProjectID] = editingProject;

    const returnToProjectList = () => {
        let toolIDs = [];
        toolsSelected.forEach((tool) => {
            toolIDs.push(tool._id)
        })

        console.log('here')

        fetch(`http://localhost:5000/projects/project-update?projectid=${projectID}&toolids=${toolIDs}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setDisplay('projects')
            setToolsLeft([])
            setToolsSelected([])
        })
    }

    const selectTool = (tool) => {
        console.log(tool)
        let toolsL = toolsLeft;
        console.log(toolsL)
        for(var i = 0; i < toolsL.length; i++ ) {
            if(tool === toolsL[i])
                toolsL.splice(i,1)
        }
        console.log(toolsL)
        setToolsLeft(toolsL)
        setToolsSelected(toolsSelected.concat(tool))
    }

    const unSelectTool = (tool) => {
        console.log(tool)
        let toolsS = toolsSelected;
        console.log(toolsS)
        for(var i = 0; i < toolsS.length; i++ ) {
            if(tool === toolsS[i])
                toolsS.splice(i,1)
        }
        console.log(toolsS)
        setToolsSelected(toolsS)
        setToolsLeft(toolsLeft.concat(tool))
    }

    useEffect(() => {
        console.log(projectID)
        const apiURL = `http://localhost:5000/projects/project-by-id?projectid=${projectID}`

        console.log(toolsLeft[0] + ' ' + toolsSelected[0])

        const fetchToolInfo = (toolIDs) => {
            console.log(toolIDs)
            toolIDs.forEach(async (id) => {
                console.log(id)
                fetch(`http://localhost:5000/tools/tools-by-id?toolids=${toolIDs}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setToolsSelected(toolsSelected.concat(data))
                    setLoading(false)
                })

            })

            if(toolIDs.length === 0) {
                setToolsSelected([])
                fetch(`http://localhost:5000/tools`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setToolsLeft(toolsSelected.concat(data))
                    setLoading(false)
                })
            } else(
                fetch(`http://localhost:5000/tools/tools-not-by-id?toolids=${toolIDs}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setToolsLeft(toolsLeft.concat(data))
                    setLoading(false)
                    // setDisplay('editor')
                })
            )

        }

        const fetchProjectInfo = async () => {

            fetch(apiURL)
                .then(request => request.json())
                .then(data => {

                    setProjectName(data.name)
                    fetchToolInfo(data.tools)
                })
        }
        
        if(display === 'editor')
            fetchProjectInfo()

    },[projectID,display])


    if(display === 'editor') {
        if(loading === true) {
            return(
                <div>
                    loading...
                </div>
            )
        }
        else {
            return(
                <div>
                    <div>{projectName} </div>
                    <div>tools selected:</div>
                    <div>
                        {toolsSelected.map((tool) => <div key={tool._id} onClick={() => unSelectTool(tool)}>{tool.name}</div>)}
                    </div>
                    <div>other tools:</div>
                    <div>
                        {toolsLeft.map((tool) => <div key={tool._id} onClick={() => selectTool(tool)}>{tool.name}</div>)}
                    </div>
                    <button onClick={returnToProjectList}>save</button>
                </div>
            )
        }
    }
    else {
        return(null)
    }



}

export default ProjectEditor;