import React, {useState,useEffect} from 'react';

function ProjectEditor(props) {

    const [projectName,setProjectName] = useState('')
    const [toolsSelected,setToolsSelected] = useState([])
    const [toolsLeft,setToolsLeft] = useState([])
    const [display,setDisplay] = useState(false)
    const [loading,setLoading] = useState(false)

    const returnToProjectList = () => {

        setDisplay(false)
        setProjectName('')
        setToolsSelected([])
        setToolsLeft([])
        props.returnToProjectList()
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
        if(props.project.length >= 1) {
            console.log(props.project)
            setDisplay(true)
            setLoading(true)
        }
        let projectID = props.project;
        console.log(projectID)
        const apiURL = `http://localhost:5000/project-by-id?projectid=${projectID}`

        const fetchToolInfo = (toolIDs) => {
            console.log(toolIDs)
            toolIDs.forEach(async (id) => {
                console.log(id)
                fetch(`http://localhost:5000/tools-by-id?toolids=${toolIDs}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setToolsSelected(toolsSelected.concat(data))
                    setLoading(false)
                })

            })

            if(toolIDs.length == 0) {
                setToolsSelected([])
                fetch(`http://localhost:5000/tools`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setToolsLeft(toolsSelected.concat(data))
                    setLoading(false)
                })
            }
            else(
                fetch(`http://localhost:5000/tools-not-by-id?toolids=${toolIDs}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setToolsLeft(toolsLeft.concat(data))
                    setLoading(false)
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
        
        fetchProjectInfo()

    },[props.project])


    if(display === true) {
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