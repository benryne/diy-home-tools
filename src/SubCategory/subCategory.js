import React from 'react';
import Project from '../Project/project';

class SubCategory extends React.Component {

    constructor(props) {
        super(props); 
        if(this.props.subCategory.name === 'Wood') {
            this.state = {  
                clicked: false,
                display: true,
                projects: [
                    { name: 'Placing Floor', clicked: false, display: true },
                    { name: 'Removing Floor', clicked: false, display: true }
                ]
            };
        }
        if(this.props.subCategory.name === 'Carpet') {
            this.state = {  
                clicked: false,
                display: true,
                projects: [
                    { name: 'Ripping up Carpet', clicked: false, display: true },
                    { name: 'Placing Carpet', clicked: false, display: true }
                ]
            };
        }
        if(this.props.subCategory.name === 'Sink') {
            this.state = {  
                clicked: false,
                display: true,
                projects: [
                    { name: 'Sink Plumbing', clicked: false, display: true },
                    { name: 'Snaking Drain', clicked: false, display: true }
                ]
            };
        }
        if(this.props.subCategory.name === 'Bathtub') {
            this.state = {  
                clicked: false,
                display: true,
                projects: [
                    { name: 'Snaking Drain', clicked: false, display: true },
                    { name: 'Inserting Tub', clicked: false, display: true }
                ]
            };
        }
        if(this.props.subCategory.name === 'Shower') {
            this.state = {  
                clicked: false,
                display: true,
                projects: [
                    { name: 'Floor Tiling', clicked: false, display: true },
                    { name: 'Drain', clicked: false, display: true }
                ]
            };
        }
    }

    render() {

        const projects = this.state.projects;

        if(this.props.subCategory.clicked) {
            return(
                <div className='projectContainer'>
                {
                    projects.map((project,index) => {
                        return(
                            <Project pathFn={this.passPathUp} onClickFn={this.displayToolsInProject} key={index} project={project}></Project>
                        )
                    })
                }
                </div>
            )
        }
        else if(this.props.subCategory.display) {
            return(
                <div onClick={this.displayProjectsInSubCategory}>
                    {this.props.subCategory.name}
                </div>
            )

        }
        else 
            return null;
    }

    displayProjectsInSubCategory = async () => {
        await this.setState
        this.props.onClickFn(this.props.subCategory.name);
        this.passPathUp(this.props.subCategory.name);
    }

    displayToolsInProject = async (project) => {
        console.log(project);
        const updatedProjects = this.state.projects.map(proj => {
            if(project.name === proj.name)
              return {
                name: proj.name,
                clicked: true,
                display: true
              }
            else
              return {
                name: proj.name,
                clicked: false,
                display: false
              } 
          });
        await this.setState({projects: updatedProjects})
        // this.props.onClickFn(project.name);
        console.log(this.state)
    }

    passPathUp = async (path) => {
        this.props.pathFn(path);
    }

    // displayProjectsInSubCategory = async (project) => {
    //     console.log(this.state.projects);
    //     await this.setState({clicked: true, category: this.props.category, project: project});
    //     console.log(this.state);
    //     this.props.onClickFn(this);
    // }

}

export default SubCategory;