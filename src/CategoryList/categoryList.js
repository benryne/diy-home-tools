import React from 'react';
import Category from '../Category/category';


class CategoryList extends React.Component {

    constructor() {
        super(); 
        this.state = {  
          clicked: this.props,
          current: '',
          path: ''
        };
    }

    render() {
        
        const { categories } = this.props;
            return(
                <div className='categoryContainer'>
                {
                    categories.map((category,index) => {
                        return(
                            <Category pathFn={this.passPathUp} onClickFn={this.DislaySubCategories} key={index} category={category}></Category>
                        )
                    })
                }
                </div>
            )

    }

    DislaySubCategories = (category,path) => {
        this.setState({clicked: true, current: category, path: path });
        this.props.onClickFn(category)
    }

    passPathUp = async (path) => {
        this.props.pathFn(path);
    }
}

export default CategoryList;