import React from 'react';
import Category from '../Category/category';


class CategoryList extends React.Component {

    constructor() {
        super(); 
        this.state = {  
          clicked: false,
          current: ''
        };
    }

    render() {
        
        if(this.state.clicked) {
            return(
                <div>
                    <Category onClickFn={this.DisplayProjectsInCategory} clicked={true} name={this.state.current}></Category>
                </div>
                )
        }
        else {
            return(
                <div>
                    <Category onClickFn={this.DisplayProjectsInCategory} clicked={false} name='Floor'></Category>
                    <Category onClickFn={this.DisplayProjectsInCategory} clicked={false} name='Drywall'></Category>
                </div>
            )
        }
    }

    DisplayProjectsInCategory = (name) => {
        this.setState({clicked: true, current: name});
    }

}

export default CategoryList;