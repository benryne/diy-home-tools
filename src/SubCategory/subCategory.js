import React from 'react';
import './subCategory.css';
import Grid from '@material-ui/core/Grid';

class SubCategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subcategory: this.props.subcategory,
            display: this.props.display
        }
    }

    render() {


        if(this.props.display) {
            return(
                    <div className='subcategory' onClick={this.displayProjectsInSubCategory}>
                        <div className='subcategory-name'>{this.state.subcategory}</div>
                        <img className='subcategory-image' src='method-draw-image.svg' height='150px'></img>
                    </div>
            )

        }
        else 
            return null;
    }

    displayProjectsInSubCategory = async () => {
        await this.setState({display: false});
        this.props.onClickFn(this.state.subcategory);
    }


}

export default SubCategory;