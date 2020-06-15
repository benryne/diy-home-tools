import React from 'react';
import Project from './project';
import Grid from '@material-ui/core/Grid';


class ProjectList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: this.props.projects,
            display: this.props.display
        }
    }

    render() {
        
        if(this.state.projects !== '' && this.state.display) {
            const projects = this.state.projects;
            return(
                <Grid container spacing={2}>
                {
                    projects.map((project,index) => {
                        return(
                            <Grid item xs={6} sm={4} md={3} lg={2}>
                                <Project onClickFn={this.DisplayProjectInfoAndTools} key={index} project={project} display={this.state.display}></Project>
                            </Grid>
                        )
                    })
                }
                </Grid>
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