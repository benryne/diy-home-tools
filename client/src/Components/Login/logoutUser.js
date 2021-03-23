import React, {useState,useContext} from 'react'
import CreateUser from './createUser'
import LoginExistingUser from './loginExistingUser';
import { UserContext } from '../Context/userContext';

function LogoutUser() {

    const {loggedIn,username,userId,projects,componentDisplayString} = useContext(UserContext)
    const [loggedInValue,setLoggedInValue] = loggedIn;
    const [usernameValue,setUsernameValue] = username;
    const [userIdValue,setUserIdValue] = userId;
    const [projectsValue,setProjectsValue] = projects;
    const [display,setDisplay] = componentDisplayString;

    const handUserLogout = () => {
        setLoggedInValue(false)
        setUsernameValue('')
        setUserIdValue('')
        setProjectsValue([])
        setDisplay('login')
    }

    return(
        <button onClick={handUserLogout}>Logout</button>
    )

}

export default LogoutUser;