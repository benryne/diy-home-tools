import React from 'react';
import CategoryList from './CategoryList/categoryList';
import Path from './Path/path';
import './App.css';

class App extends React.Component {
  
  constructor() {
    super(); 
    this.state = {  
      categories: [
        { name: 'Floor', clicked: false, display: true },
        { name: 'Bath', clicked: false, display: true },
        { name: 'Wall', clicked: false, display: true },
        { name: 'Outdoor', clicked: false, display: true },
        { name: 'Kitchen', clicked: false, display: true }
      ],
      category: '',
      subcategory: '',
      project: '',
      tool: ''
    };
  }

  render() {
    return(
      <div>
        <Path category={this.state.category} subcategory={this.state.subcategory} project={this.state.project} tool={this.state.tool}
          returnToCategoriesFn={this.returnToCategories} ></Path>
        <h1>{this.state.path}</h1>
        <CategoryList pathFn={this.updatePath} onClickFn={this.onClickFn} categories={this.state.categories}></CategoryList>
      </div>
    )
  }

  onClickFn = async (chosenCategory) => {
      const newCategories = this.state.categories.map(category => {
        if(chosenCategory === category.name)
          return {
            name: chosenCategory,
            clicked: true,
            display: true
          }
        else
          return {
            name: category.name,
            clicked: false,
            display: false
          } 
      });
      await this.setState({categories: newCategories});
  }

  updatePath = async (path,type) => {
    if(type === 'category') 
      await this.setState({category: path});
    else if(type === 'subcategory')
      await this.setState({subcategory: path});
    else if(type === 'project')
      await this.setState({project: path});
    else
      await this.setState({tool: path});

    console.log(this.state);
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

}

export default App;
