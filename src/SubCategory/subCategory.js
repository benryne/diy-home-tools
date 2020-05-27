import React from 'react';
import Project from '../Project/project';

class SubCategory extends React.Component {

    constructor() {
        super(); 
        this.state = {  
            clicked: false,
            category: '',
            projects: ['proj1','proj2','proj3'],
            project: ''
        };
    }

    render() {
        const { projects } = this.state;

        if(this.state.clicked) {
            return(
                <Project onClickFn={this.displayProjectInfo} project={this.state.project} category={this.props.category} clicked={true}></Project>
            )
        }
        else {
            return(
                <div>
                    <h1> {this.props.category}</h1>
                    <div className='projectsContainer'>
                        {
                            projects.map((project,index) => {
                                return(
                                    <Project onClickFn={this.displayProjectInfo} key={index} project={project} category={this.props.category} clicked={false}></Project>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
    }

    displayProjectInfo = async (project) => {
        console.log(this.state.projects);
        await this.setState({clicked: true, category: this.props.category, project: project});
        console.log(this.state);
        this.props.onClickFn(project);
    }

}

export default SubCategory;