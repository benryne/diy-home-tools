import React, {useState} from 'react';
import './App.css';
import User from './Components/user';
import Login from './Components/login';
// import ProjectSearch from './Components/projectSearch';
import ProjectList from './Components/projectList';
import NewProject from './Components/newProject';
import ProjectCreator from './Components/projectEditor'

function App() {

  const [user,setUser] = useState('')
  const [loggedIn,setLoggedIn] = useState(false)
  const [projectCreatorMode,setprojectCreatorMode] = useState(false)
  const [[projectList],setProjectList] = useState([]);


  const createNewProject = () => {
    setprojectCreatorMode(true);
  }

  const provideUserInfo = (user) => {
    console.log(user)
    setUser(user);
  }

  return(
    <div>
      <Login provideUserInfo={provideUserInfo}></Login>
      <User user={user}></User>
      {/* <ProjectSearch></ProjectSearch> */}
      <ProjectList user={user}></ProjectList>
      {/* <NewProject createNewProject={createNewProject}></NewProject>
      <ProjectCreator projectCreatorMode={projectCreatorMode}></ProjectCreator> */}
    </div>
  )
}

export default App;
