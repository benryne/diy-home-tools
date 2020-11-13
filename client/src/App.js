import React, {useState} from 'react';
import './App.css';
import User from './Components/user';
import Login from './Components/Login/login';
import ProjectList from './Components/Projects/projectList';
// import NewProject from './Components/newProject';
import ProjectEditor from './Components/Projects/projectEditor'
import {UserProvider} from './Components/Context/userContext';
import ProjectContainer from './Components/Projects/ProjectContainer';

function App() {

  const [user,setUser] = useState('')
  const [project,setProject] = useState('')
  const [displayProjectList,setDisplayProjectList] = useState(false)


  const provideUserInfo = user => {
    console.log(user)
    setUser(user);
    setDisplayProjectList(true)
  }

  const projectForEditor = project => {
    setProject(project)
    setDisplayProjectList(false)
    console.log('here')
  }

  const returnToProjectList = () => {
    setProject('')
    setDisplayProjectList(true)
  }

  return(
    <UserProvider>
      <Login provideUserInfo={provideUserInfo}></Login>
      <User user={user}></User>
      <ProjectContainer></ProjectContainer>
    </UserProvider>
  )
}

export default App;
