import React from 'react';
// import Category from './Category/category';
import CategoryList from './CategoryList/categoryList';
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
      path: ''
    };
  }

  render() {
    return(
      <div>
        <CategoryList onClickFn={this.onClickFn} categories={this.state.categories}></CategoryList>
      </div>
    )
  }

  onClickFn = async (chosenCat) => {
      const newCats = this.state.categories.map(cat => {
        console.log(cat);
        if(chosenCat === cat.name)
          return {
            name: chosenCat,
            clicked: true,
            display: true
          }
        else
          return {
            name: cat.name,
            clicked: false,
            display: false
          } 
      });
      await this.setState({categories: newCats});
      console.log(this.state);
      console.log(chosenCat);
  }

}

export default App;
