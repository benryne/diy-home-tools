import React from 'react';
import './App.css';
import Path from './Path/path';
import Header from './Header/header';
import TileList from './Tile/tileList';
import Container from '@material-ui/core/Container';

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
          <TileList onClickFn={this.tileOnClick} type={this.state.type} list={this.state.list} info={this.state.info}></TileList>
          {/* <TileGenerator setTileDataFn={this.setTileState} type={this.state.type} tile={this.state.tileClicked}
            category={this.state.category} subcategory={this.state.subcategory} project={this.state.project}></TileGenerator> */}
        </Container>
      </div>
    )
  }

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

}

export default App;
