import React, {useState,useContext} from 'react'
import CreateUser from './createUser'
import LoginExistingUser from './loginExistingUser';
import { UserContext } from '../userContext';

function Login() {

    const {loggedIn} = useContext(UserContext)
    const [loggedInValue,setLoggedInValue] = loggedIn;

    const divStyle = {
        display: 'none'
    }

    return(
        <div>
            { 
                loggedInValue ?  
                <div style={divStyle}>         
                    <LoginExistingUser/>
                    <CreateUser/> 
                </div> 
                : 
                <div>         
                    <LoginExistingUser/>
                    <CreateUser/> 
                </div> 
            }
        </div>
    )
}

export default Login;