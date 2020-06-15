import React from 'react';
import { Grid } from '@material-ui/core';

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
            return(
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={12} md={8} lg={6}>
                        <div className='tool-info'>{this.props.tool}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac risus malesuada, varius purus at, posuere justo. Pellentesque sit amet tortor erat. Vivamus pharetra augue a elit elementum, sagittis semper ex cursus. Nunc interdum, ligula sed consectetur mattis, erat libero semper enim, ac auctor tellus tellus vel orci. Vestibulum vel quam nulla. Nunc rutrum, nisi sit amet bibendum sollicitudin, quam neque mattis purus, ut consequat nibh arcu sit amet purus. Praesent quis fringilla sem, at rhoncus lectus. Sed rutrum interdum elit, hendrerit tincidunt nisi pretium vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus cursus sit amet eros eu sagittis.</div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={6} alignItems={'flex-end'}> 
                        <a className='tool-link' href='https://amazon.com' target='_blank'>Buy this product</a>
                    </Grid>
                </Grid>
            )
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