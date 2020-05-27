import React from 'react';
import SubCategory from '../SubCategory/subCategory';


class Category extends React.Component {

    constructor() {
        super(); 
        this.state = {  
            clicked: false,
            display: true,
            projects: ['proj']
        };
    }

    render() {

        
        if(this.props.category.clicked) {
            if(this.state.clicked) {
                return(
                    <SubCategory onClickFn={this.displayProjectfromList} category={this.props.name} projects={this.state.category}></SubCategory>
                )
            }
            else {
                return(
                    <div>
                        <SubCategory onClickFn={this.displayProjectfromList} category={this.props.name} projects={['proj1','proj2','proj3']}></SubCategory>
                    </div>
                )
            }
        }
        else if (this.props.category.display) {
            return(
                <div onClick={this.CategoryOnClick}><h1>{this.props.category.name}</h1></div>
            )
        }
        else 
            return null;
    }

    CategoryOnClick = () => {
        console.log('props: ');
        console.log(this.props);
        this.props.onClickFn(this.props.category.name);
        console.log('props: ');
        console.log(this.props);
    }
    
    displayProjectfromList = async (projectName) => {
        await this.setState({clicked:true, category: projectName});
        console.log(this.state);
    }

}

export default Category;