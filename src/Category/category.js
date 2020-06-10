import React from 'react';
import './category.css';

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
                <div className='category' onClick={this.CategoryOnClick}>
                    <div className='category-name'>{this.state.category}</div>
                    <img className='category-image' src='method-draw-image.svg' height='150px'></img>
                </div>
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