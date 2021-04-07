import React, {useState,useEffect, useContext } from 'react';
import {UserContext} from '../Context/userContext'
import { makeStyles } from '@material-ui/styles';
import { Container,Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    projectCard: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.white,
        display: 'inline-block',
        height: 150,
        width: 500,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 77.33,
        borderRadius: 10,
        borderColor: theme.palette.primary.lightGrey,
        borderWidth: 1,
        borderStyle: 'solid',
        position: 'relative'
    },
    deleteButton: {
        backgroundColor: theme.palette.primary.purple,
        color: theme.palette.primary.white,
        position: 'absolute',
        right: 10, 
        bottom: 10,
        width: 80,
        height: 30,
        textAlign: 'center',
        fontWeight: 700
    },
    title: {
        color: theme.palette.primary.white,
        fontSize: 30,
        fontWeight: 700,
        left: 10,
        top: 10,
        width: 300,
        height: 50,
        overflow: 'hidden',
        position: 'absolute',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    description: {
        position: 'absolute',
        left: 10,
        bottom: 10,
        height: 70,
        width: 300,
        overflow: 'hidden',
        position: 'absolute',
        textOverflow: 'ellipsis',
        textAlign: 'justify'
    },
    projectPhoto: {
        position: 'absolute',
        right: 10,
        top: 10,
        height: 80,
        width: 80,
        borderRadius: 10
    }
}));

function Project(props) {

    const {projects, userId} = useContext(UserContext)
    const [projectList,setProjectList] = projects
    const [id,setId] = userId;
    const [name,setName] = useState('')
    const [projectId,setProjectId] = useState(props.id)
    const [ display, setDisplay ] = useState(true)
    const classes = useStyles()
 
    useEffect(() => {
        setProjectId(props.id)
        const apiURL = `http://localhost:5000/projects/project-by-id?projectid=${projectId}`
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data) 
                setName(data.name);
            })
    },[props.id])

    const projectOnClick = () => {
        props.projectOnClick(projectId)
    }

    const deleteProject = () => {
        const apiURL = `http://localhost:5000/projects/delete-project?projectid=${projectId}`
        fetch(apiURL)
            .then((response) => {
                if(response.ok)
                    return response.json()
                else 
                    return null;
            })
            .then((data) => {
                console.log(data) 
                const deleteProjectFromUserApiURL = `http://localhost:5000/user/delete-project?projectid=${projectId}&userid=${id}`
                fetch(deleteProjectFromUserApiURL)
                    .then((response) => response.json())
                    .then((data) => {
                        const tempProjectList = projectList;
                        const deletedProjectIndex = tempProjectList.indexOf(projectId);
                        console.log(projectId + " " + deletedProjectIndex + " " + tempProjectList)
                        tempProjectList.splice(deletedProjectIndex,1)
                        console.log(tempProjectList)
                        setProjectList(tempProjectList);
                        setDisplay(false)
                    })
            })
    }

    if(display) {
        return(
            <div className={classes.projectCard} onClick={projectOnClick} >
                <div className={classes.title}>{name}</div>
                <Button className={classes.deleteButton} onClick={deleteProject}>Delete</Button>
                <div className={classes.description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie ex quis mauris orci luctus et ultrices posuere cubilia curae</div>
                <img src="logo192.png" className={classes.projectPhoto}/>
            </div>
        )
    } else {
        return null;
    }

}

export default Project;