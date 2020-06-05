import React from 'react';
import './App.css';
import CategoryList from './Category/categoryList';
import Path from './Path/path';
import ProjectList from './Project/projectList';
import ProjectInfo from './Project/projectInfo';
import SubCategoryList from './SubCategory/subCategoryList';
import ToolList from './Tool/toolList';


class App extends React.Component {
  
  constructor() {
    super(); 
    this.state = {  
      categories: ['Floor','Bath','Wall','Outdoor','Kitchen'],
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
      <div>
        <Path category={this.state.category} subcategory={this.state.subcategory} project={this.state.project} tool={this.state.tool}
          returnToCategoriesFn={this.returnToCategories} ></Path>
        <CategoryList onClickFn={this.categoryOnClick} categories={this.state.categories} display={this.state.categoriesDisplay}></CategoryList>
        <SubCategoryList onClickFn={this.subCategoryOnClick} subcategories={this.state.subcategories} display={this.state.subcategoriesDisplay}></SubCategoryList>
        <ProjectList onClickFn={this.projectOnClick} projects={this.state.projects} display={this.state.projectsDisplay}></ProjectList>
        <ProjectInfo project={this.state.project} display={this.state.projectDisplayInfo}></ProjectInfo>
        <ToolList onClickFn={this.toolOnClick} tools={this.state.tools} display={this.state.toolsDisplay}></ToolList>
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
    await this.setState({category: category, categoriesDisplay: false, subcategories: subCategories, subcategoriesDisplay: true})
    console.log(this.state);
  }

  // Determines Project List using the Sub-Category clicked
  // Unrenders Sub-Categories then renders Projects
  subCategoryOnClick = async(subcategory) => {
    let projects = this.determineProjects(subcategory);
    await this.setState({subcategory: subcategory, subcategoriesDisplay: false, projects: projects, projectsDisplay: true})
    console.log(this.state)
  }

  // Determines Tool List using the Project clicked
  // Unrenders Projects then renders info of Project clicked and tools 
  projectOnClick = async(project) => {

    let tools = ['tool1','tool2']
    // determine tools

    await this.setState({project: project, projectsDisplay: false, projectDisplayInfo: true, tools: tools, toolsDisplay: true})
  }


  toolOnClick = async(tool) => {

  }

  determineSubcategories = (category) => {
    if(category  === 'Floor') {
      return ['Wood','Carpet'];
    }
    else if(category === 'Bath') {
      return ['Sink','Bathtub','Shower'];
    }
    else if(category === 'Wall') {
      return ['Drywall','Hanging'];
    }
    else if(category === 'Outdoor') {
      return ['Patio','Fire Pit'];
    }
    else {
      return ['Sink','Cabinets','Counter Tops'];
    }    
  }

  determineProjects = (subcategory) => {
    if(this.state.category === 'Floor') {
      if(subcategory === 'Wood') {
        return ['Wproj1','proj2'];
      }
      else {
        return ['Cproj1','proj2'];
      }
    }
    else if(this.state.category === 'Bath') {
      if(subcategory === 'Sink') {
        return ['Sproj1','proj2'];
      }
      else if(subcategory === 'Bathtub') {
        return ['Bproj1','proj2'];
      }
      else {
        return ['Sproj1','proj2'];
      }
    }
    else if(this.state.category === 'Wall') {
      if(subcategory === 'Drywall') {
        return ['Dproj1','proj2'];
      }
      else {
        return ['Hproj1','proj2'];
      }
    }
    else if(this.state.category === 'Outdoor') {
      if(subcategory === 'Patio') {
        return ['Pproj1','proj2'];
      }
      else {
        return ['Fproj1','proj2'];
      }
    }
    else {
      if(subcategory === 'Sink') {
        return ['Sproj1','proj2'];
      }
      else if( subcategory === 'Cabinets') {
        return ['Cproj1','proj2'];
      }
      else {
        return ['CTproj1','proj2'];
      }
    }
  }

}

export default App;
