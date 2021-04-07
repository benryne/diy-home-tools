import React, {useState,useContext} from 'react'
import LoginUser from './loginUser'
import LogoutUser from './logoutUser';
import { UserContext } from '../Context/userContext';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles'

function Login() {

    const {loggedIn,componentDisplayString} = useContext(UserContext)
    const [loggedInValue,setLoggedInValue] = loggedIn;
    const [display,setDisplay] = componentDisplayString;

    return(
        <AppBar position="static">
            <Toolbar>
                {loggedInValue ? <LogoutUser/> : <LoginUser/>}
            </Toolbar>
        </AppBar>
    )

}

export default Login;