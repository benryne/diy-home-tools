import React from 'react';

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
                <div onClick={this.displayProjectsInSubCategory}>
                    {this.state.subcategory}
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