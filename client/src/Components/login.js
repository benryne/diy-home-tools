import React, {useEffect,useState} from 'react'

function Login(props) {

    const [loggedIn,setLoggedIn] = useState(false)
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [errorMessage,setErrorMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const apiURL = `http://localhost:5000/user?name=${username}&password=${password}`
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if(data.length == 0){
                    setErrorMessage('username or password does not match')
                } else {
                    let info = data[0];
                    props.provideUserInfo({name: username, id: info._id, projects: info.projects})
                    setLoggedIn(true)
                }
            })
        setUsername('')
        setPassword('')

    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    

    if(loggedIn === true) {
        return(null)
    }
    else {
        return(
            <div>
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
            </div>
       )
    }
}

export default Login;