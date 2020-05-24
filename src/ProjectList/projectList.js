import React from 'react';
import Project from '../Project/project';
import { async } from 'q';


class ProjectList extends React.Component {

    constructor() {
        super(); 
        this.state = {  
            clicked: false,
            current: ''
        };
    }

    render() {

        const { projects } = this.props;
        if(Array.isArray(projects)) {
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
        else {
            return(
                <Project onClickFn={this.displayProjectInfo} project={projects} category={this.props.category} clicked={true}></Project>
            )
        }
    }

    displayProjectInfo = async (project) => {
        await this.setState({clicked: true, current: project});
        console.log(this.state);
        this.props.onClickFn(project);
    }

}

export default ProjectList;