import React from 'react';
import ProjectList from '../ProjectList/projectList';


class Category extends React.Component {

    constructor() {
        super(); 
        this.state = {  
            clicked: false,
            current: ''
        };
    }

    render() {
        
        if(this.props.clicked) {
            if(this.state.clicked) {
                return(
                    <ProjectList onClickFn={this.displayProjectfromList} category={this.props.name} projects={this.state.current}></ProjectList>
                )
            }
            else {
                return(
                    <div>
                        <ProjectList onClickFn={this.displayProjectfromList} category={this.props.name} projects={['proj1','proj2','proj3']}></ProjectList>
                    </div>
                )
            }
        }
        else {
            return(
                <div onClick={this.CategoryOnClick}><h1>{this.props.name}</h1></div>
            )
        }
    }

    CategoryOnClick = () => {
        this.props.onClickFn(this.props.name);
    }
    
    displayProjectfromList = async (projectName) => {
        await this.setState({clicked:true, current: projectName});
        console.log(this.state);
    }

}

export default Category;