import React ,{ useContext, useState } from 'react';
import {UserContext} from '../Context/userContext';
import { makeStyles } from '@material-ui/styles';
import { Container,Button } from '@material-ui/core';
import NewProjectModal from './newProjectModal';

const useStyles = makeStyles((theme) => ({
    createProjectButton: {
        backgroundColor: theme.palette.primary.purple,
        color: theme.palette.primary.white,
        borderRadius: 5,
        width: 200,
        height: 40,
        fontSize: 16,
        fontWeight: 700,
        textAlign: "center",
        lineHeight: "40px",
        marginTop: 50
    }
}));

function NewProject() {

    const { componentDisplayString, userId, editingProject, projects } = useContext(UserContext)
    const [display, setDisplay] = componentDisplayString;
    const [user,setUser] = userId;
    const [createdProject,setCreatedProject] = editingProject;
    const [projectList,setProjectList] = projects;
    const [modalOpen,setModalOpen] = useState(false)

    const classes = useStyles();

    const closeModal = () => {
        setModalOpen(false)
    }

    const createNewProject = (newProjectName) => {

        // creates new project in mongodb
        const apiURL = `http://localhost:5000/projects/create-project?name=${newProjectName}`
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data) 
                const projectId = data._id;
                const addProjectApiURL = `http://localhost:5000/user/add-project?userid=${user}&projectid=${projectId}`
                // adds that project to list of user projects
                fetch(addProjectApiURL)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                        setCreatedProject(projectId)
                        const newProjectList = projectList.concat(projectId);
                        setProjectList(newProjectList);
                        setModalOpen(false)
                        setDisplay('editor')
                    })
            })
    }


    if(display === 'projects') {
        return(
            <Container maxWidth="xl">
                <Button className={classes.createProjectButton} onClick={() => setModalOpen(true)}>Create Project</Button>
                {modalOpen ? <NewProjectModal createNewProject={createNewProject} closeModal={closeModal} ></NewProjectModal> : null}
            </Container>
        )
    } else {
        return null;
    }
}

export default NewProject;