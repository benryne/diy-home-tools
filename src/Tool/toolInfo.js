import React from 'react';

class ToolInfo extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {  
            display: this.props.display,
            info: this.props.info 
        };
    }

    render() {
        if(this.state.display) {
            return(<div>{this.props.tool} INFO </div>)
        }
        else
            return null;
    }

    componentDidUpdate = async(prevProps) => {
        if(prevProps !== this.props) {
            await this.setState({tool: this.props.tool, display: this.props.display})
        }
        else {
            console.log('State did not change!')
        }
    }


}

export default ToolInfo;