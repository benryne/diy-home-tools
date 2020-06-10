import React from 'react';
import './project.css';

class ProjectInfo extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            project: this.props.project,
            display: this.props.display
        }

    }

    render() {
        if(this.state.display) {
            return(
                <div className='project-info'>{this.state.project}: ProjectInfo</div>
            )
        }
        else {
            return null;
        } 
    }

    componentDidUpdate = async(prevProps) => {
        if(prevProps !== this.props) {
            await this.setState({display: this.props.display, project: this.props.project});
        } 
        else {
            console.log(this.state)
        }
    }
    
}

export default ProjectInfo;