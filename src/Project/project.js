import React from 'react';
import Tool from '../Tool/tool';


class Project extends React.Component {

    constructor() {
        super(); 
        this.state = {  
            clicked: false,
            display: true,
            tools: [
                { name: 'tool1', clicked: false, display: true },
                { name: 'tool2', clicked: false, display: true },
                { name: 'tool3', clicked: false, display: true }
            ]
        };
    }

    render() {

        const tools = this.state.tools;

        if(this.props.project.clicked) {
            return(
                <div className='projectContainer'>
                {
                    tools.map((tool,index) => {
                        return(
                            <Tool pathFn={this.passPathUp} onClickFn={this.displayToolsInProject} key={index} tool={tool}></Tool>
                        )
                    })
                }
                </div>
            )
        }
        else if(this.props.project.display) {
            return(
                <div onClick={this.displayProjectInfo}>
                    {this.props.project.name}
                </div>
            )

        }
        else 
            return null;
    }

    displayProjectInfo = async () => {
        await this.setState({clicked: true, current: this.props.project});
        console.log(this.state)
        this.props.onClickFn(this.props.project);
        this.props.pathFn(this.props.project.name);
    }

    displayToolsInProject = async (toolClicked) => {
        console.log(toolClicked);
        const updatedTools = this.state.tools.map(tool => {
            if(toolClicked.name === tool.name)
              return {
                name: tool.name,
                clicked: true,
                display: true
              }
            else
              return {
                name: tool.name,
                clicked: false,
                display: false
              } 
          });
        await this.setState({tools: updatedTools})
        // this.props.onClickFn(project.name);
        console.log(this.state)
    }

    passPathUp = (tool) => {
        this.props.pathFn(tool);
    }
}

export default Project;