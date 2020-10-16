import React, {useState} from 'react';
import './App.css';
import User from './Components/user';
import Login from './Components/login';
import ProjectList from './Components/projectList';
import NewProject from './Components/newProject';
import ProjectEditor from './Components/projectEditor'

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
    <div>
      <Login provideUserInfo={provideUserInfo}></Login>
      <User user={user}></User>
      {/* <ProjectSearch></ProjectSearch> */}
      <ProjectList user={user} projectForEditor={projectForEditor} display={displayProjectList}></ProjectList>
      {/* <NewProject createNewProject={createNewProject}></NewProject> */}
      <ProjectEditor project={project} returnToProjectList={returnToProjectList}></ProjectEditor>
    </div>
  )
}

export default App;
