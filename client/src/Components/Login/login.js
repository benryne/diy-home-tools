import React, {useState,useContext} from 'react'
import CreateUser from './createUser'
import LoginExistingUser from './loginExistingUser';
import LogoutUser from './logoutUser';
import { UserContext } from '../Context/userContext';

function Login() {

    const {loggedIn,componentDisplayString} = useContext(UserContext)
    const [loggedInValue,setLoggedInValue] = loggedIn;
    const [display,setDisplay] = componentDisplayString;

    if(loggedInValue  === false) {
        return(
            <div>         
                <LoginExistingUser/>
                <CreateUser/> 
            </div> 
        )
    }
    else {
        return(
            <LogoutUser/>
        )
    }

}

export default Login;