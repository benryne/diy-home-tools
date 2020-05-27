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
        if(this.props.clicked) {
            return(<div> TOOL INFO</div>)
        }
        else {
            return(<div onClick={this.toolOnClick}>{this.props.tool}</div>)
        }
    }

    toolOnClick = async () => {
        console.log('here');
        await this.setState({clicked: true, current: this.props.tool})
        this.props.onClickFn(this.props.tool);
    }

}

export default Tool;