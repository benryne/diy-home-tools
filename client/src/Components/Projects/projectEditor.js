import React, {useState,useEffect,useContext} from 'react';
import {UserContext} from '../Context/userContext'
import SelectedTools from '../Tools/SelectedTools';
import UnselectedTools from '../Tools/UnselectedTools'
import { Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    toolEditorContainer: {
        borderColor: theme.palette.primary.lightGrey,
        borderWidth: 1,
        borderStyle: 'solid',
        position: 'relative',
        borderRadius: 10,
        marginBottom: 50
    },
    projectName: {
        color: theme.palette.primary.white,
        fontSize: 50,
        fontWeight: 700,
        display: 'inline-block',
        height: 100,
        lineHeight: '100px'
    },
    saveButton: {
        backgroundColor: theme.palette.primary.purple,
        color: theme.palette.primary.white,
        fontSize: 18,
        fontWeight: 700,
        position: 'absolute',
        width: 150,
        height: 40,
        right: 30,
        top: 30,
        border: 'none',
        borderRadius: 5
    },
    switchButton: {
        backgroundColor: theme.palette.primary.purple,
        color: theme.palette.primary.white,
        fontSize: 18,
        fontWeight: 700,
        position: 'absolute',
        width: 150,
        height: 40,
        right: 200,
        top: 30,
        border: 'none',
        borderRadius: 5
    }
}));


function ProjectEditor() {

    const { editingProject, componentDisplayString } = useContext(UserContext)
    const [projectName,setProjectName] = useState('')
    const [toolsSelected,setToolsSelected] = useState([])
    const [toolsUnselected,setToolsUnselected] = useState([])
    const [display,setDisplay] = componentDisplayString;
    const [loading,setLoading] = useState(false)
    const [projectID,setProjectID] = editingProject;
    const [selectedToolsStatus,setSelectedToolsStatus] = useState(true)
    const classes = useStyles()

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
            if(tool._id == toolsL[i]._id) {
                console.log("here")
                toolsL.splice(i,1)
            }
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
                    <Container className={classes.toolEditorContainer} maxWidth='lg'>
                        <div className={classes.projectName}>{projectName}</div>
                        <Button class={classes.switchButton} onClick={switchSelectedToolsStatus}>Add Tools</Button>
                        <Button class={classes.saveButton} onClick={returnToProjectList}>Save</Button>
                    </Container>
                    <Container className={classes.toolEditorContainer} maxWidth='lg'>
                        <SelectedTools unselectToolFunction={unselectTool} tools={toolsSelected}></SelectedTools>
                    </Container>
                </div>
            )
        }
        else {
            return(
                <div>
                    <Container className={classes.toolEditorContainer} maxWidth='lg'>
                        <div className={classes.projectName}>{projectName}</div>
                        <Button class={classes.switchButton} onClick={switchSelectedToolsStatus}>Remove Tools</Button>
                        <Button class={classes.saveButton} onClick={returnToProjectList}>Save</Button>
                    </Container>
                    <Container className={classes.toolEditorContainer} maxWidth='lg'>
                        <UnselectedTools selectToolFunction={selectTool} tools={toolsUnselected}></UnselectedTools>
                    </Container>
                </div>
            )
        }
    }
    else {
        return(null)
    }
}

export default ProjectEditor;