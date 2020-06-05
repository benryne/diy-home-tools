import React from 'react';
import Tool from './tool';


class ToolList extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {  
          display: this.props.display,
          tools: this.props.tools
        };
    }


    render() {
        if(this.state.tools !== '') {
            const tools = this.state.tools;
            return(
                <div className='categoryContainer'>
                {
                    tools.map((tool,index) => {
                        return(
                            <Tool onClickFn={this.displayToolInfo} key={index} tool={tool} display={this.state.display}></Tool>
                        )
                    })
                }
                </div>
            )
        }
        else 
            return null;
    }

    displayToolInfo = async (tool) => {
        await this.setState({display: false});
        this.props.onClickFn(tool);
    }

    componentDidUpdate = async(prevProps) => {
        if(prevProps !== this.props) {
            await this.setState({display: this.props.display,tools: this.props.tools});
        } 
        else {
            console.log(this.state)
        }
    }

}

export default ToolList;