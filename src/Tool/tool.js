import React from 'react';

class Tool extends React.Component {

    constructor() {
        super(); 
        this.state = {  
            clicked: false,
            current: ''
        };
    }

    render() {
        if(this.props.tool.clicked) {
            return(<div> TOOL INFO</div>)
        }
        else if(this.props.tool.display) {
            return(<div onClick={this.toolOnClick}>{this.props.tool.name}</div>)
        }
        else
            return null;
    }

    toolOnClick = async () => {
        console.log('here');
        await this.setState({clicked: true, current: this.props.tool})
        await this.props.onClickFn(this.props.tool);
        await this.props.pathFn(this.props.tool.name,'tool');
    }

}

export default Tool;