import React, {useState} from 'react';
import './App.css';
import User from './Components/user';
import Login from './Components/Login/login';
import ProjectList from './Components/projectList';
// import NewProject from './Components/newProject';
import ProjectEditor from './Components/projectEditor'
import {UserProvider} from './Components/userContext';

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
      <ProjectList user={user} projectForEditor={projectForEditor} display={displayProjectList}></ProjectList>
      <ProjectEditor project={project} returnToProjectList={returnToProjectList}></ProjectEditor>
    </UserProvider>
  )
}

export default App;
