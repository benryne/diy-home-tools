import React from 'react';
import Category from './category';
import Grid from '@material-ui/core/Grid';

class CategoryList extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {  
            categories: this.props.categories,
            display: this.props.display,
            categoryClicked: ''
        };
    }

    render() {
        
        const { categories } = this.props;
        if(this.state.display) {
            return(
                <Grid container spacing={2}>
                {
                    categories.map((category,index) => {
                        return(
                            <Category onClickFn={this.DislaySubCategories} key={index} category={category} display={this.state.display}></Category>
                        )
                    })
                }
                </Grid>
            )
        }
        else 
            return null;
    }

    DislaySubCategories = (category) => {
        this.setState({categoryClicked: category, display: false});
        this.props.onClickFn(category)
    }

    componentDidUpdate = async(prevProps) => {
        if(prevProps !== this.props) {
            await this.setState({categories: this.props.categories, display: this.props.display});
        } 
        else {
            console.log('state did not change!')
        }
    }

}

export default CategoryList;