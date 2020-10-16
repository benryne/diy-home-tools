import React, {useState} from 'react'

function Login(props) {

    const [loggedIn,setLoggedIn] = useState(false)
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newUsername, setNewUsername] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const [loading,setLoading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        const apiURL = `http://localhost:5000/user?name=${username}&password=${password}`
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if(data.length === 0){
                    setErrorMessage('username or password does not match')
                } else {
                    let info = data[0];
                    props.provideUserInfo({name: username, id: info._id, projects: info.projects})
                    setLoggedIn(true)
                }
            })
        setUsername('')
        setPassword('')
        setLoading(false)

    }

    const handleUsernameChange = event => setUsername(event.target.value)

    const handlePasswordChange = event => setPassword(event.target.value)

    const handleNewUsernameChange = event => setNewUsername(event.target.value)

    const handleNewPasswordChange = event => setNewPassword(event.target.value)


    const handleNewSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        const apiURL = `http://localhost:5000/create-user?name=${newUsername}&password=${newPassword}`
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data) 
                props.provideUserInfo({name: newUsername, id: data._id, projects: []})
                setLoggedIn(true)
            })
        setNewUsername('')
        setNewPassword('')
        setLoading(false)

    }
    

    if(loggedIn === true) {
        return(null)
    }
    else {
        if(loading) {
            return(
                <div>loading...</div>
            )
        }
        else {
            return(
                <div>
                    <div>Login</div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Username:
                            <input type="text" value={username} onChange={handleUsernameChange} />
                        </label>
                        <label>
                            Password:
                            <input type="text" value={password} onChange={handlePasswordChange} />
                        </label>
                            <input type="submit" value="Submit" />
                    </form>
                    <div>{errorMessage}</div>
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
                </div>
           )
        }
    }
}

export default Login;