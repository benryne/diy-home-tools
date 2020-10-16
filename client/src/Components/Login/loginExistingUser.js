import React, {useState,useContext} from 'react';
import {UserContext} from '../userContext'

function LoginExistingUser() {

    const {username, loggedIn, userId} = useContext(UserContext)
    const [usernameValue,setUsernameValue] = username;
    const [loggedInValue,setLoggedInValue] = loggedIn
    const [idValue,setIdValue] = userId;
    const [newUsername,setNewUsername] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [errorMessage,setErrorMessage] = useState('')

    const handleNewUsernameChange = event => setNewUsername(event.target.value)

    const handleNewPasswordChange = event => setNewPassword(event.target.value)

    const handleNewSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        const apiURL = `http://localhost:5000/user?name=${newUsername}&password=${newPassword}`
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                if(data.length === 0){
                    setErrorMessage('username or password does not match')
                }
                else{
                    console.log(data) 
                    setLoggedInValue(true)
                    setUsernameValue(data[0].name)
                    setIdValue(data[0]._id)
                    setLoading(false)
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
                <div>Create Username</div>
                <form onSubmit={handleNewSubmit}>
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
                <div>{errorMessage}</div>
            </div>
        )
    }
}

export default LoginExistingUser;