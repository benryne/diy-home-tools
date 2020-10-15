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
  const [displayProjectList,setDisplayProjectList] = useState(true)


  const provideUserInfo = (user) => {
    console.log(user)
    setUser(user);
  }

  const projectForEditor = (project) => {
    setProject(project)
    console.log('here')
  }

  return(
    <div>
      <Login provideUserInfo={provideUserInfo}></Login>
      <User user={user}></User>
      {/* <ProjectSearch></ProjectSearch> */}
      <ProjectList user={user} projectForEditor={projectForEditor} display={displayProjectList}></ProjectList>
      {/* <NewProject createNewProject={createNewProject}></NewProject> */}
      <ProjectEditor project={project}></ProjectEditor>
    </div>
  )
}

export default App;
