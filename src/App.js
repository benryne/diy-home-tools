import React from 'react';
import './App.css';
import Path from './Path/path';
import Header from './Header/header';
import TileList from './tileList';
import Container from '@material-ui/core/Container';
import TileGenerator from './tileGenerator';
import { async } from 'q';

class App extends React.Component {
  
  constructor() {
    super(); 
    this.state = {  
      categories: ['Floor','Bath','Wall','Outdoor','Kitchen','Roof','Lighting'],
      category: '',
      subcategory: '',
      project: '',
      tool: '',
      list: ['Floor','Bath','Wall','Outdoor','Kitchen','Roof','Lighting'],
      type: 'categories',
      tileClicked: '',
      info: ''
    };
  }

  render() {
    return(
      <div className='app'>
        <Container>
          <Header></Header>
          <Path type={this.state.type} tile={this.state.tileClicked} returnToFn={this.returnToFn} ></Path>
          <TileList onClickFn={this.tileOnClick} type={this.state.type} list={this.state.list} info={this.state.currentInfo}></TileList>
          <TileGenerator setTileDataFn={this.setTileState} type={this.state.type} tile={this.state.tileClicked}
            category={this.state.category} subcategory={this.state.subcategory} project={this.state.project}></TileGenerator>
          {/* <ReturnTileState></ReturnTileState> */}
        </Container>
      </div>
    )
  }

  // returnTofn = async (tile,type) => {
  //   await
  // }

  setTileState = async (list,type,info) => {
    await this.setState({list, type, info})
  }

  tileOnClick = async (tile) => {
    if(this.state.type === 'categories') {
      await this.setState({tileClicked: tile, category: tile});
    }
    else if(this.state.type === 'subcategories') {
      await this.setState({tileClicked: tile, subcategory: tile});
    }
    else if(this.state.type === 'projects') {
      await this.setState({tileClicked: tile, project: tile});
    }
    else {
      await this.setState({tileClicked: tile, tool: tile});
    }

  }

returnToFn = async (stateObject) => {

  await this.setState(stateObject)

}

  returnToCategories = async(tile) => {
    await this.setState({
      category: '',
      subcategory: '',
      projects: [],
      project: '',
      tools: [],
      tool: '',
      list: ['Floor','Bath','Wall','Outdoor','Kitchen','Roof','Lighting'],
      type: 'categories',
      tileClicked: '',
      info: ''
    })
  }

  returnToSubcategories = async(tile) => {

    await this.setState({
      subcategory: '',
      project: '',
      tool: '',
      list: '',
      type: 'subcategories',
      tileClicked: tile,
      info: ''
    })

  }

  returnToProjects = async(tile) => {

    await this.setState({
      project: '',
      tool: '',
      list: '',
      type: 'projects',
      tileClicked: tile,
      info: ''
    })

    console.log(this.state);

  }

  returnToTools = async(tile) => {
    await this.setState({
      tool: '',
      list: '',
      type: 'tools',
      tileClicked: tile,
      info: ''

    })
  }

}

export default App;
