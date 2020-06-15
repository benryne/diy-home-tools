import React from 'react';
import Tool from './tool';
import Grid from '@material-ui/core/Grid';
import ProjectInfo from '../Project/projectInfo';

class ToolList extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {  
          display: this.props.display,
          project: this.props.project,
          tools: this.props.tools
        };
    }


    render() {
        if(this.state.tools !== '' && this.props.display) {
            const tools = this.state.tools;
            return(
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={12} md={8} lg={6}>
                        <ProjectInfo display={this.state.display} project={this.state.project}></ProjectInfo>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={6}>
                        <Grid container spacing={2}>
                            {
                                tools.map((tool,index) => {
                                    return(
                                        <Grid item xs={6} sm={4} md={6} lg={4}>
                                            <Tool onClickFn={this.displayToolInfo} key={index} tool={tool} display={this.state.display}></Tool>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid> 
                </Grid>
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
            await this.setState({display: this.props.display,tools: this.props.tools, project: this.props.project});
        } 
        else {
            console.log(this.state)
        }
    }

}

export default ToolList;