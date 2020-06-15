import React from 'react';
import SubCategory from './subCategory';
import Grid from '@material-ui/core/Grid';

class SubCategoryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subcategories: this.props.subcategories,
            display: this.props.display
        }
    }

    render() {
        
        if(this.state.subcategories !== '' && this.state.display) {
            const subcategories = this.state.subcategories;
            return(
                <Grid container spacing={2}>
                {
                    subcategories.map((subcategory,index) => {
                        return(
                            <Grid item xs={6} sm={4} md={3} lg={2}>
                                <SubCategory onClickFn={this.DisplayProjects} key={index} subcategory={subcategory} display={this.state.display}></SubCategory>
                            </Grid>
                        )
                    })
                }
                </Grid>
            )
        }
        else 
            return null;

    }

    DisplayProjects = (subcategory) => {
        this.setState({subcategoryClicked: subcategory, display: false});
        this.props.onClickFn(subcategory)
    }

    componentDidUpdate = async(prevProps) => {
        if(prevProps !== this.props) {
            await this.setState({display: this.props.display,subcategories: this.props.subcategories});
        } 
        else {
            console.log(this.state)
        }
    }
}

export default SubCategoryList;