import React ,{ useContext } from 'react';
import {UserContext} from '../Context/userContext'

function NewProject() {

    const { componentDisplayString } = useContext(UserContext)
    const [display, setdisplay] = componentDisplayString;

    if(display === 'projects') {
        return(
            <div>
                newProject
            </div>
        )
    } else {
        return null;
    }
}

export default NewProject;