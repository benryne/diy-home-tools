import React, {useState,useContext} from 'react';
import {UserContext} from '../Context/userContext'

function CreateUser() {

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
                <div>Create Username</div>
                <form onSubmit={handleNewUserSubmit}>
                    <label>
                        Username:
                        <input type="text" value={newUsername} onChange={handleNewUsernameChange} />
                    </label>
                    <label>
                        Password:
                        <input type="text" value={newPassword} onChange={handleNewPasswordChange} />
                    </label>
                        <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default  CreateUser;