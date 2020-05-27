import React from 'react';
import Tool from '../Tool/tool';


class ToolList extends React.Component {

    constructor() {
        super(); 
        this.state = {  
          clicked: false,
          current: ''
        };
    }


    render() {
        if(this.state.clicked) {
            return(
                <Tool onClickFn={this.displayToolInfo} tool={this.props.current} clicked={true}></Tool>
            )
        }
        else {
            return(
                <div>
                    <Tool onClickFn={this.displayToolInfo} tool='tool1' clicked={false} ></Tool>
                    <Tool onClickFn={this.displayToolInfo} tool='tool2' clicked={false}></Tool>
                </div>
                )
        }
    }

    displayToolInfo = async (tool) => {
        await this.setState({clicked: true, current: tool});
        console.log(tool)
        this.props.onClickFn(tool);
    }

}

export default ToolList;