import React from 'react';
import './tool.css';

class Tool extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {  
            display: this.props.display,
            clicked: false,
            tool: this.props.tool 
        };
    }

    render() {
        if(this.props.display) {
            return(
                <div className='tool' onClick={this.toolOnClick}>
                    <div className='tool-name'>{this.props.tool}</div>
                    <img className='tool-image' src='method-draw-image.svg' height='150px'></img>
                </div>
            )
        }
        else
            return null;
    }

    toolOnClick = async () => {
        await this.setState({clicked: true, tool: this.props.tool})
        await this.props.onClickFn(this.props.tool);
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

export default Tool;