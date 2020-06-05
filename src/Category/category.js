import React from 'react';
import SubCategory from '../SubCategory/subCategory';

class Category extends React.Component {

    constructor(props) {
        super(props);
        if(this.props.category.name === 'Floor') {
            this.state = {  
                clicked: false,
                display: true,
                subcategories: [
                    { name: 'Wood', clicked: false, display: true },
                    { name: 'Carpet', clicked: false, display: true }
                ]
            };
        }
        if(this.props.category.name === 'Bath') {
            this.state = {  
                clicked: false,
                display: true,
                subcategories: [
                    { name: 'Sink', clicked: false, display: true },
                    { name: 'Bathtub', clicked: false, display: true },
                    { name: 'Shower', clicked: false, display: true }
                ]
            };
        }
        if(this.props.category.name === 'Wall') {
            this.state = {  
                clicked: false,
                display: true,
                subcategories: [
                    { name: 'Drywall', clicked: false, display: true },
                    { name: 'Hanging', clicked: false, display: true }
                ]
            };
        }
        if(this.props.category.name === 'Outdoor') {
            this.state = {  
                clicked: false,
                display: true,
                subcategories: [
                    { name: 'Patio', clicked: false, display: true },
                    { name: 'Firepit', clicked: false, display: true }
                ]
            };
        }
        if(this.props.category.name === 'Kitchen') {
            this.state = {  
                clicked: false,
                display: true,
                subcategories: [
                    { name: 'Sink', clicked: false, display: true },
                    { name: 'Back Splash', clicked: false, display: true },
                    { name: 'Cabinets', clicked: false, display: true }
                ]
            };
        }
    }

    render() {
        const subCategories = this.state.subcategories;

        if (this.props.category.clicked) {
            return(
                <div className='subCategoryContainer'>
                {
                    subCategories.map((subCategory,index) => {
                        return(
                            <SubCategory pathFn={this.passPathUp} onClickFn={this.displayProjectsInSubCategory} key={index} subCategory={subCategory}></SubCategory>
                        )
                    })
                }
                </div>
            )
        }
        else if (this.props.category.display) {
            return(
                <div onClick={this.CategoryOnClick}><h2>{this.props.category.name}</h2></div>
            )
        }
        else 
            return null;
    }

    CategoryOnClick = () => {
        this.props.onClickFn(this.props.category.name);
        this.passPathUp(this.props.category.name,'category');
    }
    
    displayProjectsInSubCategory = async (subCategory) => {
        console.log(subCategory);
        const updatedSubCategories = this.state.subcategories.map(subCat => {
            if(subCategory === subCat.name)
              return {
                name: subCat.name,
                clicked: true,
                display: true
              }
            else
              return {
                name: subCat.name,
                clicked: false,
                display: false
              } 
          });


        this.props.onClickFn(this.props.category.name,subCategory);
        await this.setState({clicked: true, subcategories: updatedSubCategories});
        console.log(this.state);
    }

    passPathUp = async (path,type) => {
        this.props.pathFn(path,type);
    }

}

export default Category;