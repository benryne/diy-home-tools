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
        
        // if(this.state.clicked) {
        //     return(
        //         <div>
        //             <h1> this.state.path </h1>
        //             <Category onClickFn={this.DisplayProjectsInCategory} clicked={true} name={this.state.current}></Category>
        //         </div>
        //         )
        // }
        // else {
        //     return(
        //         <div>
        //             <Category onClickFn={this.DisplayProjectsInCategory} clicked={false} name='Floor'></Category>
        //             <Category onClickFn={this.DisplayProjectsInCategory} clicked={false} name='Drywall'></Category>
        //         </div>
        //     )
        // }
        const { categories } = this.props;
        // if(Array.isArray(categories)) {
            return(
                <div className='categoryContainer'>
                {
                    categories.map((category,index) => {
                        return(
                            <Category onClickFn={this.DisplayProjectsInCategory} key={index} category={category}></Category>
                        )
                    })
                }
                </div>
            )
        // }
        // else {
        //     <Category onClickFn={this.DisplayProjectsInCategory} clicked={false} ></Category>
        // }

    }

    DisplayProjectsInCategory = (category,path) => {
        console.log(this.props);
        this.setState({clicked: true, current: category, path: path });
        this.props.onClickFn(category)
    }

}

export default CategoryList;