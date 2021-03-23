import React, {useState,createContext} from 'react'

export const UserContext = createContext()

export const UserProvider = props => {

    const [username,setUserName] = useState('')
    const [userId,setUserId] = useState('')
    const [loggedIn,setLoggedIn] = useState(false)
    const [projects,setProjects] = useState([])
    const [editingProject,setEditingProject] = useState('')
    const [componentDisplayString,setComponentDisplayString] = useState('login')

    return(
        <UserContext.Provider value={{ username: [username,setUserName], userId: [userId,setUserId], loggedIn: [loggedIn,setLoggedIn], 
            projects: [projects,setProjects], editingProject: [editingProject,setEditingProject], componentDisplayString: [componentDisplayString,setComponentDisplayString] }}>
            {props.children}
        </UserContext.Provider>
    )
} 