import React from 'react';
import './project.css';
import Grid from '@material-ui/core/Grid';

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
                <div className='project-info'>{this.state.project}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac risus malesuada, varius purus at, posuere justo. Pellentesque sit amet tortor erat. Vivamus pharetra augue a elit elementum, sagittis semper ex cursus. Nunc interdum, ligula sed consectetur mattis, erat libero semper enim, ac auctor tellus tellus vel orci. Vestibulum vel quam nulla. Nunc rutrum, nisi sit amet bibendum sollicitudin, quam neque mattis purus, ut consequat nibh arcu sit amet purus. Praesent quis fringilla sem, at rhoncus lectus. Sed rutrum interdum elit, hendrerit tincidunt nisi pretium vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus cursus sit amet eros eu sagittis.</div>
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