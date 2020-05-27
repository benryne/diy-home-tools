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
        if(this.props.clicked ) {
            return(
                <div>
                    <h1> {this.props.category} > {this.props.project} </h1>
                    <ToolList onClickFn={this.displayToolInfo}></ToolList>
                </div>
            )
        }
        else {
            return(
                <div onClick={this.displayProjectInfo}>
                    {this.props.project}
                    {/* <ToolList></ToolList> */}
                </div>
            )
        }
    }

    displayProjectInfo = async () => {
        await this.setState({clicked: true, current: this.props.project});
        console.log(this.state)
        this.props.onClickFn(this.props.project);
    }

    displayToolInfo = async (tool) => {
        console.log("tool:" + tool);
    }
}

export default Project;