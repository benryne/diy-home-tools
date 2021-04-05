import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/userContext'
import { makeStyles } from '@material-ui/core/styles'
import { palette, fontWeight } from '@material-ui/system';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        fontSize: 30,
        paddingTop: 100,
        paddingBottom: 10,
        color: theme.palette.primary.white,
        fontWeight: 700
    },
    inputTop: {
        width: 400,
        height: 30,
        fontSize: 16,
        display: 'flex',
        margin: 'auto',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        border: 'none',
        placeholderColor: theme.palette.primary.purple
    },
    inputBottom: {
        width: 400,
        height: 30,
        fontSize: 16,
        display: 'flex',
        margin: 'auto',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        border: 'none',
        color: theme.palette.primary.purple,
        borderTop: '1px solid #303030'
    },
    signInButton: {
        width: 408,
        margin: 46,
        height: 40,
        textAlign: 'center',
        backgroundColor: theme.palette.primary.purple,
        color: theme.palette.primary.white,
        fontSize: 16,
        border: 'none',
        borderRadius: 5,
        fontWeight: 700,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    switchLoginTypeText: {
        textAlign: 'center',
        fontSize: 16,
        paddingBottom: 50,
        fontWeight: 500
    },
    switchLoginTypeButton: {
        color: theme.palette.primary.purple,
        display: 'inline',
        '&:hover': {
            cursor: 'pointer'
        }
    }

}));

function LoginExistingUser(props) {

    const classes = useStyles();

    const {username, loggedIn, userId, projects, componentDisplayString} = useContext(UserContext)
    const [display,setDisplay] = componentDisplayString;
    const [usernameValue,setUsernameValue] = username;
    const [loggedInValue,setLoggedInValue] = loggedIn
    const [idValue,setIdValue] = userId;
    const [projectsValue,setProjectsValue] = projects;
    const [newUsername,setNewUsername] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [errorMessage,setErrorMessage] = useState('')

    const handleNewUsernameChange = event => setNewUsername(event.target.value)
    const handleNewPasswordChange = event => setNewPassword(event.target.value)

    const handleNewSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        const apiURL = `http://localhost:5000/user/login?name=${newUsername}&password=${newPassword}`
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                if(data.length === 0){
                    setErrorMessage('username or password does not match')
                }
                else{
                    console.log(data) 
                    setLoggedInValue(true)
                    setUsernameValue(data.name)
                    setIdValue(data._id)
                    setLoading(false)
                    setProjectsValue(data.projects)
                    setDisplay('projects')
                }
            })
        setNewUsername('')
        setNewPassword('')
    }

    if(loading) {
        return(
            <div>loading...</div>
        )
    }
    else {
        return(
            <div>
                <div className={classes.title}>Sign in to your account</div>
                <div className={classes.switchLoginTypeText}>or   <div className={classes.switchLoginTypeButton} onClick={() => props.switchUser(false)}>Create an account</div></div>
                <form onSubmit={handleNewSubmit}>
                    <input className={classes.inputTop} type="text" placeholder="Username" value={newUsername} onChange={handleNewUsernameChange} />
                    <input className={classes.inputBottom} id="password" placeholder="Password" type="text" value={newPassword} onChange={handleNewPasswordChange} />
                    <input className={classes.signInButton} type="submit" value="Sign In" />
                </form>
                <div>{errorMessage}</div>
            </div>
        )
    }
}

export default LoginExistingUser;