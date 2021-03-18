import React, {useState,useEffect,useContext} from 'react';
import {UserContext} from '../Context/userContext'
import SelectedTools from '../Tools/SelectedTools';
import UnselectedTools from '../Tools/UnselectedTools'

function ProjectEditor() {

    const { editingProject, componentDisplayString } = useContext(UserContext)
    const [projectName,setProjectName] = useState('')
    const [toolsSelected,setToolsSelected] = useState([])
    const [toolsUnselected,setToolsUnselected] = useState([])
    const [display,setDisplay] = componentDisplayString;
    const [loading,setLoading] = useState(false)
    const [projectID,setProjectID] = editingProject;
    const [selectedToolsStatus,setSelectedToolsStatus] = useState(true)

    const switchSelectedToolsStatus = () => {
        setSelectedToolsStatus(!selectedToolsStatus)
    }

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
            setToolsUnselected([])
            setToolsSelected([])
        })
    }

    const selectTool = (tool) => {
        console.log(tool)
        let toolsL = toolsUnselected;
        console.log(toolsL)
        for(var i = 0; i < toolsL.length; i++ ) {
            if(tool === toolsL[i])
                toolsL.splice(i,1)
        }
        console.log(toolsL)
        setToolsUnselected(toolsL)
        setToolsSelected(toolsSelected.concat(tool))
    }

    const unselectTool = (tool) => {
        console.log(tool)
        let toolsS = toolsSelected;
        console.log(toolsS)
        for(var i = 0; i < toolsS.length; i++ ) {
            if(tool === toolsS[i])
                toolsS.splice(i,1)
        }
        console.log(toolsS)
        setToolsSelected(toolsS)
        setToolsUnselected(toolsUnselected.concat(tool))
    }

    useEffect(() => {
        console.log(projectID)
        const apiURL = `http://localhost:5000/projects/project-by-id?projectid=${projectID}`

        console.log(toolsUnselected[0] + ' ' + toolsSelected[0])

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
                    setToolsUnselected(toolsSelected.concat(data))
                    setLoading(false)
                })
            } else(
                fetch(`http://localhost:5000/tools/tools-not-by-id?toolids=${toolIDs}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setToolsUnselected(toolsUnselected.concat(data))
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
        else if(selectedToolsStatus === true) {
            return(
                <div>
                    <div>{projectName}</div>
                    <SelectedTools unselectToolFunction={unselectTool} tools={toolsSelected}></SelectedTools>
                    <button onClick={switchSelectedToolsStatus}>Add Tools</button>
                    <button onClick={returnToProjectList}>save</button>
                </div>
            )
        }
        else {
            return(
                <div>
                    <div>{projectName}</div>
                    <UnselectedTools selectToolFunction={selectTool} tools={toolsUnselected}></UnselectedTools>
                    <button onClick={switchSelectedToolsStatus}>Remove Tools</button>
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