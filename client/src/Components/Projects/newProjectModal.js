import React ,{ useContext, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Modal } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        height: 150,
        width: 500,
        borderRadius: 25,
        backgroundColor: theme.palette.primary.main
    },
    title: {
        marginLeft: 33.33,
        fontSize: 24,
        paddingTop: 25,
        paddingBottom: 10,
        color: theme.palette.primary.white,
        fontWeight: 700
    },
    input: {
        width: 250,
        height: 30,
        fontSize: 16,
        display: 'inline',
        marginLeft: 33.33,
        marginTop: 25,
        borderRadius: 5,
        padding: 0,
        border: 'none',
    },
    signInButton: {
        width: 150,
        marginLeft: 33.33,
        marginTop: 25,
        height: 30,
        textAlign: 'center',
        display: 'inline',
        backgroundColor: theme.palette.primary.purple,
        color: theme.palette.primary.white,
        fontSize: 16,
        border: 'none',
        borderRadius: 5,
        fontWeight: 700,
        '&:hover': {
            cursor: 'pointer'
        }
    }
}))

function NewProjectModal(props) {
    
    const [newProjectName,setNewProjectName] = useState('')
    const [open, setOpen] = useState(true);
    const classes = useStyles()

    const createNewProjectSubmitHandler = (event) => {
        event.preventDefault()
        console.log(event)

        props.createNewProject(newProjectName)

    }

    const handleProjectNameChange = (event) => setNewProjectName(event.target.value);
    
    const closeModal = () => {
        props.closeModal()
    }

    return(
        <Modal
            open={open}
            onClose={closeModal}
            className={classes.modal}
        >
            <div className={classes.modalContent}>
                <div className={classes.title}>New Project:</div> 
                <form onSubmit={createNewProjectSubmitHandler}>
                    <input className={classes.input} placeholder="Project Name" type="text" value={newProjectName} onChange={handleProjectNameChange} />
                    <input className={classes.signInButton} type="submit" value="Submit" />
                </form>
            </div>
        </Modal>
    )
}
  
export default NewProjectModal;