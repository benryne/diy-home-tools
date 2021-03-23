import React, {useState, useContext} from 'react';
import ProjectList from './projectList'
import ProjectEditor from './projectEditor';
import NewProject from './newProject';

function ProjectContainer() {


    return(
        <div>
            <NewProject></NewProject>
            <ProjectList></ProjectList>
            <ProjectEditor></ProjectEditor>
        </div>
    )
}

export default ProjectContainer;