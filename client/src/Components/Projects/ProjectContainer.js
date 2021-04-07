import React, {useState, useContext} from 'react';
import ProjectList from './projectList'
import ProjectEditor from './projectEditor';
import NewProject from './newProject';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    projectContainer: {
        backgroundColor: theme.palette.primary.main,
        minHeight: '100vh'
    }
}));


function ProjectContainer() {

    const classes = useStyles()

    return(
        <div className={classes.projectContainer}>
            <NewProject></NewProject>
            <ProjectList></ProjectList>
            <ProjectEditor></ProjectEditor>
        </div>
    )
}

export default ProjectContainer;