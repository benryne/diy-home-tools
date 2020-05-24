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
                    <ToolList onClick={this.displayToolInfo}></ToolList>
                </div>
            )
        }
        else {
            return(
                <div onClick={this.displayToolInfo}>
                    {this.props.project}
                    {/* <ToolList></ToolList> */}
                </div>
            )
        }
    }

    displayToolInfo = () => {
        this.setState({clicked: true});
        console.log(this.props)
        this.props.onClickFn(this.props.project);
    }
}

export default Project;