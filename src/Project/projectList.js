import React from 'react';
import Project from './project';

class ProjectList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: this.props.projects,
            display: this.props.display
        }
    }

    render() {
        
        if(this.state.projects !== '') {
            const projects = this.state.projects;
            return(
                <div className='categoryContainer'>
                {
                    projects.map((project,index) => {
                        return(
                            <Project onClickFn={this.DisplayProjectInfoAndTools} key={index} project={project} display={this.state.display}></Project>
                        )
                    })
                }
                </div>
            )
        }
        else 
            return null;

    }

    DisplayProjectInfoAndTools = (project) => {
        this.setState({display: false});
        this.props.onClickFn(project)
    }

    componentDidUpdate = async(prevProps) => {
        if(prevProps !== this.props) {
            await this.setState({display: this.props.display, projects: this.props.projects});
        } 
        else {
            console.log(this.state)
        }
    }

}

export default ProjectList;