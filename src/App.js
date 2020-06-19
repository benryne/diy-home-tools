import React from 'react';
import './App.css';
import Path from './Path/path';
import Header from './Header/header';
import TileList from './tileList';
import Container from '@material-ui/core/Container';

class App extends React.Component {
  
  constructor() {
    super(); 
    this.state = {  
      categories: ['Floor','Bath','Wall','Outdoor','Kitchen','Roof','Lighting'],
      category: '',
      subcategories: [],
      subcategory: '',
      projects: [],
      project: '',
      tools: [],
      tool: '',
      list: ['Floor','Bath','Wall','Outdoor','Kitchen','Roof','Lighting'],
      type: 'categories',
      projectInfo: '',
      toolInfo: '',
      currentInfo: ''
    };
  }

  render() {
    return(
      <div className='app'>
        <Container>
          <Header></Header>
          <Path category={this.state.category} subcategory={this.state.subcategory} project={this.state.project} tool={this.state.tool}
            returnToCategoriesFn={this.returnToCategories} returnToCategoryFn={this.returnToCategory} returnToSubCategoryFn={this.returnToSubCategory} returnToProjectFn={this.returnToProject}></Path>
          <TileList onClickFn={this.tileOnClick} type={this.state.type} list={this.state.list} info={this.state.currentInfo}></TileList>
        </Container>
      </div>
    )
  }


  determineProjectInfo = (tile) => {
    return tile + ': Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac risus malesuada, varius purus at, posuere justo. Pellentesque sit amet tortor erat. Vivamus pharetra augue a elit elementum, sagittis semper ex cursus. Nunc interdum, ligula sed consectetur mattis, erat libero semper enim, ac auctor tellus tellus vel orci. Vestibulum vel quam nulla. Nunc rutrum, nisi sit amet bibendum sollicitudin, quam neque mattis purus, ut consequat nibh arcu sit amet purus. Praesent quis fringilla sem, at rhoncus lectus. Sed rutrum interdum elit, hendrerit tincidunt nisi pretium vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus cursus sit amet eros eu sagittis.';
  }
  
  determineToolInfo = (tile) => {
    return tile + ': Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac risus malesuada, varius purus at, posuere justo. Pellentesque sit amet tortor erat. Vivamus pharetra augue a elit elementum, sagittis semper ex cursus. Nunc interdum, ligula sed consectetur mattis, erat libero semper enim, ac auctor tellus tellus vel orci. Vestibulum vel quam nulla. Nunc rutrum, nisi sit amet bibendum sollicitudin, quam neque mattis purus, ut consequat nibh arcu sit amet purus. Praesent quis fringilla sem, at rhoncus lectus. Sed rutrum interdum elit, hendrerit tincidunt nisi pretium vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus cursus sit amet eros eu sagittis.';
  }

  tileOnClick = async (tile) => {
    
    if(this.state.type === 'categories') {
      let subcategories = this.determineSubcategories(tile);
      console.log(subcategories)
      await this.setState({category: tile, subcategories: subcategories, list: subcategories, type: 'subcategories'})
      
    }
    else if(this.state.type === 'subcategories' ) {
      let projects = this.determineProjects(tile);
      console.log(this.state.subcategories)
      await this.setState({subcategory:tile, projects: projects, list: projects, type: 'projects'})
    }
    else if(this.state.type === 'projects') {
      let tools = this.determineTools(tile);
      let projectInfo = this.determineProjectInfo(tile); 
      await this.setState({project: tile,tools: tools, list: tools, type: 'tools', projectInfo, currentInfo: projectInfo})
    }
    else if(this.state.type === 'tools' ) {
      let toolInfo = this.determineToolInfo(tile);
      console.log('tool info' + toolInfo);
      await this.setState({tool: tile, list: '', type: 'tool', toolInfo, currentInfo: toolInfo})
    }

  }

  returnToCategories = async () => {
    const newCategories = this.state.categories.map(category => {
        return {
          name: category.name,
          clicked: false,
          display: true
        } 
    });
    await this.setState({categories: newCategories, category: '', subcategory: '', project: '', tool: ''});
  }

  determineSubcategories = (category) => {
    if(category  === 'Floor') {
      return ['Wood','Carpet','Tile'];
    }
    else if(category === 'Bath') {
      return ['Sink','Bathtub','Shower'];
    }
    else if(category === 'Wall') {
      return ['Drywall','Hanging', 'Painting'];
    }
    else if(category === 'Outdoor') {
      return ['Patio','Fire Pit','Exterior'];
    }
    else if(category === 'Kitchen') {
      return ['Sink','Cabinets','Counter Tops'];
    }    
    else if(category === 'Roof') {
      return ['Metal Roof', 'Vinyl Roof', 'Clay Tile', 'Concrete Tile']
    }
    else {
      return ['Indoor Lighting', 'Outdoor Lighting']
    }
  }

  determineProjects = (subcategory) => {
    if(this.state.category === 'Floor') {
      if(subcategory === 'Wood') {
        return ['Ripping Up Floors','Laying Floors'];
      }
      else {
        return ['Ripping Up Carpet','Laying Carpet'];
      }
    }
    else if(this.state.category === 'Bath') {
      if(subcategory === 'Sink') {
        return ['Adding Plumbing','Attaching Vanity'];
      }
      else if(subcategory === 'Bathtub') {
        return ['Adding Drain','Inserting Tub'];
      }
      else {
        return ['Tiling Wall','Tiling Floor', 'Adding Drain', 'Attaching Insert'];
      }
    }
    else if(this.state.category === 'Wall') {
      if(subcategory === 'Drywall') {
        return ['Patching','Adding Panel','Insulation'];
      }
      if(subcategory === 'Hanging') {
        return ['Hanging Painting','Adding Panel'];
      }
      else {
        return ['Painting Wall'];
      }
    }
    else if(this.state.category === 'Outdoor') {
      if(subcategory === 'Patio') {
        return ['Wood Patio','Paver Patio'];
      }
      if(subcategory === 'Fire Pit') {
        return ['Inground Pit','Paver Pit'];
      }
      else {
        return ['Siding','Painting','Stucco'];
      }
    }
    else if(this.state.category === 'Kitchen') {
      if(subcategory === 'Sink') {
        return ['Installing Sink','Fixing Sink Plumbing'];
      }
      if(subcategory === 'Cabinets') {
        return ['Painting Cabinets','Installing Cabinets', 'Removing Cabinets'];
      }
      else {
        return ['Siding','Painting','Stucco'];
      }
    }
    else if(this.state.category === 'Roof') {
      if(subcategory === 'Metal Roof') {
        return ['Patching Roof','Replacing Roof'];
      }
      if(subcategory === 'Vinyl Roof') {
        return ['Patching Roof','Replacing Roof'];
      }
      if(subcategory === 'Clay Tile') {
        return ['Patching Roof','Replacing Roof'];
      }
      else {
        return ['Patching Roof','Replacing Roof'];
      }
    }
    else {
      if(subcategory === 'Indoor Lighting') {
        return ['Ceiling Fan','Ceiling Light'];
      }
      else {
        return ['Porch Lighting','Flood Light'];
      }
      
    }
  }

  determineTools = (project) => {
    return ['tool1','tool2','tool3'];
  }

  returnToCategories = async() => {
    await this.setState({
      category: '',
      subcategories: [],
      subcategory: '',
      projects: [],
      project: '',
      tools: [],
      tool: '',
      list: ['Floor','Bath','Wall','Outdoor','Kitchen','Roof','Lighting'],
      type: 'categories',
      projectInfo: '',
      toolInfo: '',
      currentInfo: ''
    })
  }

  returnToCategory = async(category) => {

    let subcategories = this.determineSubcategories(category);
    await this.setState({
      subcategories,
      subcategory: '',
      projects: [],
      project: '',
      tools: [],
      tool: '',
      list: subcategories,
      type: 'subcategories',
      projectInfo: '',
      toolInfo: '',
      currentInfo: ''
    })

  }

  returnToSubCategory = async(subcategory) => {

    let projects = this.determineProjects(subcategory);
    await this.setState({
      projects,
      project: '',
      tools: [],
      tool: '',
      list: projects,
      type: 'projects',
      projectInfo: '',
      toolInfo: '',
      currentInfo: ''
    })

  }

  returnToProject = async(project) => {
    let tools = ['tool1','tool2','tool3',]
    await this.setState({
      tools: tools,
      tool: '',
      list: tools,
      type: 'tools',
      toolInfo: '',
      currentInfo: this.state.projectInfo
    })
  }

}

export default App;
