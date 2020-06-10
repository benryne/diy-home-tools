import React from 'react';
import './project.css';

class Project extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {  
            display: this.props.display,
            project: this.props.project
        };
    }

    render() {
        if(this.state.display) {
            return(
                <div className='project' onClick={this.displayProjectInfo}>
                    <div className='project-name'>{this.state.project}</div>
                    <img className='project-image' src='method-draw-image.svg' height='150px'></img>
                    
                </div>
            )

        }
        else 
            return null;
    }

    displayProjectInfo = async () => {
        await this.setState({display: false})
        this.props.onClickFn(this.state.project);
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

export default Project;