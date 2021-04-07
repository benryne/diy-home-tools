import React, {useState,useContext} from 'react';
import {UserContext} from '../Context/userContext'
import { makeStyles } from '@material-ui/core/styles'

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
        width: 390,
        height: 30,
        fontSize: 16,
        display: 'flex',
        margin: 'auto',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.lightGrey,
        borderColor: theme.palette.primary.lightGrey,
        borderWidth: 1,
        borderStyle: "solid",
        borderBottomWidth: 0,
        paddingLeft: 10
    },
    inputBottom: {
        width: 390,
        height: 30,
        fontSize: 16,
        display: 'flex',
        margin: 'auto',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.lightGrey,
        borderColor: theme.palette.primary.lightGrey,
        borderWidth: 1,
        borderStyle: "solid",
        paddingLeft: 10
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

function CreateUser(props) {

    const classes = useStyles();
    const {username, loggedIn, userId, componentDisplayString} = useContext(UserContext)
    const [display,setDisplay] = componentDisplayString;
    const [usernameValue,setUsernameValue] = username;
    const [loggedInValue,setLoggedInValue] = loggedIn
    const [idValue,setIdValue] = userId;
    const [newUsername,setNewUsername] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [loading,setLoading] = useState(false)

    const handleNewUsernameChange = event => setNewUsername(event.target.value)
    const handleNewPasswordChange = event => setNewPassword(event.target.value)

    const handleNewUserSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        const apiURL = `http://localhost:5000/user/create-user?name=${newUsername}&password=${newPassword}`
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                    console.log(data) 
                    setLoggedInValue(true)
                    setUsernameValue(data.name)
                    setIdValue(data._id)
                    setLoading(false)
                    setDisplay('projects')
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
                <div className={classes.title}>Create Your Account</div>
                <div className={classes.switchLoginTypeText}>or   <div className={classes.switchLoginTypeButton} onClick={() => props.switchUser(true)}>Already have an account</div></div>
                <form onSubmit={handleNewUserSubmit}>
                    <input className={classes.inputTop} type="text" placeholder="Username" value={newUsername} onChange={handleNewUsernameChange} />
                    <input className={classes.inputBottom} type="text" value={newPassword} placeholder="Password" onChange={handleNewPasswordChange} />
                    <input className={classes.signInButton} type="submit" value="Create account" />
                </form>
            </div>
        )
    }
}

export default  CreateUser;