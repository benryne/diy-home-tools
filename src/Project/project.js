import React from 'react';
import Tool from '../Tool/tool';
import { async } from 'q';


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
                <div onClick={this.displayProjectInfo}>
                    {this.state.project}
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