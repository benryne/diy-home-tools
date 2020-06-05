import React from 'react';
import SubCategory from '../SubCategory/subCategory';
import { async } from 'q';

class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: this.props.display,
            category: this.props.category
        }
    }

    render() {

        if (this.props.display) {
            return(
                <div onClick={this.CategoryOnClick}><h2>{this.state.category}</h2></div>
            )
        }
        else 
            return null;
    }

    CategoryOnClick = () => {
        this.props.onClickFn(this.state.category);
    }
    

    componentDidUpdate = async(prevProps) => {
        if(prevProps !== this.props) {
            await this.setState({category: this.props.category, display: this.props.display})
        }
        else {
            console.log('State did not change!')
        }
    }


}

export default Category;