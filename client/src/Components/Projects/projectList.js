import React, {useEffect,useContext} from 'react';
import Project from './project'
import {UserContext} from '../Context/userContext'
import { Container,Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    projectContainer: {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.lightGrey,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        paddingTop: 20
    }
}));


function ProjectList() {

    const {username, projects, editingProject, componentDisplayString } = useContext(UserContext)
    const [projectsValue,setProjectsValue] = projects;
    const [usernameValue,setUsernameValue] = username;
    const [editingProjectValue,setEditingProjectValue] = editingProject;
    const [display,setDisplay] = componentDisplayString
    const classes = useStyles()

    // console.log(projectsValue)

    const projectOnClick = (project) => {
        console.log('clicked')
        setDisplay('editor')
        setEditingProjectValue(project)
    }
    
    useEffect(() => {
        console.log(projectsValue)
    }, [projects])

    if(display === 'projects') {
        // no projects
        if(usernameValue === undefined || projectsValue.length === 0) {
            return(
                <div>
                    kinda empty in here
                </div>
            )
        } else { // Map of projects
            return(
                <Container className={classes.projectContainer} maxWidth="lg">
                        {projectsValue.map((value) => <Project id={value} projectOnClick={projectOnClick}></Project>)}
                </Container>
            )
        }
    }
    else {
        return(null)
    }
}

export default ProjectList;
