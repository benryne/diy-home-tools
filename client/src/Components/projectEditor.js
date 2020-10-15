import React, {useState,useEffect} from 'react';

function ProjectEditor(props) {

    const [projectName,setProjectName] = useState('')
    const [toolsSelected,setToolsSelected] = useState([])
    const [toolsLeft,setToolsLeft] = useState([])
    const [display,setDisplay] = useState(false)
    const [loading,setLoading] = useState(false)



    useEffect(() => {
        setLoading(true)
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

        }

        const fetchProjectInfo = async () => {

            fetch(apiURL)
                .then(request => request.json())
                .then(data => {
                    setProjectName(data.name)
                    fetchToolInfo(data.tools)
                })
        }
        

        const data = fetchProjectInfo()

    },[props.project])


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
                <div>
                    {toolsSelected.map((tool) => <div>{tool.name}</div>)}
                </div>
            </div>

        )
    }
    // else {
    //     return(null)
    // }



}

export default ProjectEditor;