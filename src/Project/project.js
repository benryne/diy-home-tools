import React from 'react';
import ToolList from '../ToolList/toolList';


class Project extends React.Component {

    constructor() {
        super(); 
        this.state = {  
          clicked: false,
          current: ''
        };
    }

    render() {

        // const {project} = this.props.project;
        if(this.props.project.clicked) {
            return(
                <div>
                    <ToolList onClickFn={this.displayToolInfo}></ToolList>
                </div>
            )
        }
        else if(this.props.project.display) {
            return(
                <div onClick={this.displayProjectInfo}>
                    {this.props.project.name}
                    {/* <ToolList></ToolList> */}
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

    displayToolInfo = async (tool) => {
        console.log("tool:" + tool);
    }
}

export default Project;