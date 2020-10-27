import React, {useState,useContext} from 'react'
import CreateUser from './createUser'
import LoginExistingUser from './loginExistingUser';
import { UserContext } from '../Context/userContext';

function Login() {

    const {loggedIn,componentDisplayString} = useContext(UserContext)
    const [loggedInValue,setLoggedInValue] = loggedIn;
    const [display,setDisplay] = componentDisplayString;

    const divStyle = {
        display: 'none'
    }
    console.log(componentDisplayString)

    if(display === 'login') {
        return(
            <div>         
                <LoginExistingUser/>
                <CreateUser/> 
            </div> 
        )
    }
    else {
        return null;
    }

}

export default Login;