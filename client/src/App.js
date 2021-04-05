import React, {useState} from 'react';
import './App.css';
import User from './Components/user';
import Login from './Components/Login/login';
import ProjectList from './Components/Projects/projectList';
// import NewProject from './Components/newProject';
import ProjectEditor from './Components/Projects/projectEditor'
import {UserProvider} from './Components/Context/userContext';
import ProjectContainer from './Components/Projects/ProjectContainer';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
      blue: '#177e89',
      white: '#FFFFFF',
      purple: '#6320ee',
      lightBlue: '#00e8fc'
    },
    secondary: {
      main: '#E7D2CC',
    },
  },
});

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
      <ThemeProvider theme={theme}>
        <Login provideUserInfo={provideUserInfo}></Login>
        <User user={user}></User>
        <ProjectContainer></ProjectContainer>
      </ThemeProvider>
    </UserProvider>
  )
}

export default App;
