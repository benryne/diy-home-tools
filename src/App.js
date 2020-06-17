import React from 'react';
import './App.css';
import CategoryList from './Category/categoryList';
import Path from './Path/path';
import ProjectList from './Project/projectList';
import ProjectInfo from './Project/projectInfo';
import SubCategoryList from './SubCategory/subCategoryList';
import ToolList from './Tool/toolList';
import ToolInfo from './Tool/toolInfo';
import Header from './Header/header';
import Container from '@material-ui/core/Container';

class App extends React.Component {
  
  constructor() {
    super(); 
    this.state = {  
      categories: ['Floor','Bath','Wall','Outdoor','Kitchen','Roof','Lighting'],
      categoriesDisplay: true,
      category: '',
      subcategories: [],
      subcategoriesDisplay: false,
      subcategory: '',
      projects: [],
      projectsDisplay: false,
      project: '',
      projectDisplayInfo: false,
      tools: [],
      toolsDisplay: false,
      tool: '',
      toolDisplayInfo: false
    };
  }

  render() {
    return(
      <div className='app'>
        <Container>
          <Header></Header>
          <Path category={this.state.category} subcategory={this.state.subcategory} project={this.state.project} tool={this.state.tool}
            returnToCategoriesFn={this.returnToCategories} returnToCategoryFn={this.returnToCategory} returnToSubCategoryFn={this.returnToSubCategory} returnToProjectFn={this.returnToProject}></Path>
          <CategoryList onClickFn={this.categoryOnClick} categories={this.state.categories} display={this.state.categoriesDisplay}></CategoryList>
          <SubCategoryList onClickFn={this.subCategoryOnClick} subcategories={this.state.subcategories} display={this.state.subcategoriesDisplay}></SubCategoryList>
          <ProjectList onClickFn={this.projectOnClick} projects={this.state.projects} display={this.state.projectsDisplay}></ProjectList>
          <ToolList onClickFn={this.toolOnClick} tools={this.state.tools} display={this.state.toolsDisplay} project={this.state.project}></ToolList>
          <ToolInfo tool={this.state.tool} display={this.state.toolDisplayInfo}></ToolInfo>
        </Container>
      </div>
    )
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

  // Determines Sub-Categories List using the Category clicked
  // Unrenders Categories then renders Sub-Categories
  categoryOnClick = async(category) => {
    let subCategories = this.determineSubcategories(category);
    console.log(subCategories);
    await this.setState({category, categoriesDisplay: false, subcategories: subCategories, subcategoriesDisplay: true})
    console.log(this.state);
  }

  // Determines Project List using the Sub-Category clicked
  // Unrenders Sub-Categories then renders Projects
  subCategoryOnClick = async(subcategory) => {
    let projects = this.determineProjects(subcategory);
    await this.setState({subcategory, subcategoriesDisplay: false, projects: projects, projectsDisplay: true})
    console.log(this.state)
  }

  // Determines Tool List using the Project clicked
  // Unrenders Projects then renders info of Project clicked and tools 
  projectOnClick = async(project) => {

    let tools = ['tool1','tool2','tool3','tool4']
    // determine tools

    await this.setState({project, projectsDisplay: false, projectDisplayInfo: true, tools: tools, toolsDisplay: true})
  }


  toolOnClick = async(tool) => {
    await this.setState({tool, toolDisplayInfo: true, projectDisplayInfo: false, toolsDisplay: false})
  }

  determineSubcategories = (category) => {
    if(category  === 'Floor') {
      return ['Wood','Carpet','Tile'];
    }
    else if(category === 'Bathroom') {
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

  returnToCategories = async() => {
    await this.setState({
      categoriesDisplay: true,
      category: '',
      subcategories: [],
      subcategoriesDisplay: false,
      subcategory: '',
      projects: [],
      projectsDisplay: false,
      project: '',
      projectDisplayInfo: false,
      tools: [],
      toolsDisplay: false,
      tool: '',
      toolDisplayInfo: false
    })
    console.log(this.state)
  }

  returnToCategory = async(category) => {

    let subcategories = this.determineSubcategories(category);
    await this.setState({
      subcategories,
      subcategoriesDisplay: true,
      subcategory: '',
      projects: [],
      projectsDisplay: false,
      project: '',
      projectDisplayInfo: false,
      tools: [],
      toolsDisplay: false,
      tool: '',
      toolDisplayInfo: false
    })

    console.log(this.state);
  }

  returnToSubCategory = async(subcategory) => {

    let projects = this.determineProjects(subcategory);
    await this.setState({
      projects,
      projectsDisplay: true,
      project: '',
      projectDisplayInfo: false,
      tools: [],
      toolsDisplay: false,
      tool: '',
      toolDisplayInfo: false
    })

    console.log(this.state);
  }

  returnToProject = async(project) => {
    let tools = ['tool1','tool2','tool3','tool4']
    await this.setState({
      projectDisplayInfo: true,
      tools,
      toolsDisplay: true,
      tool: '',
      toolDisplayInfo: false
    })
  }

}

export default App;
