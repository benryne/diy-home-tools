import React from 'react';
import './path.css';

class Path extends React.Component {
    constructor() {
        super();
        this.state = {
            category: '',
            subcategory: '',
            project: '',
            tool: ''
        };
    }

    render() {
        if(this.state.tool !== '') {
            return(
                <div className='path'>
                    <div className='path-element' onClick={this.categoriesOnClick}>Categories</div> /
                    <div className='path-element' onClick={this.categoryOnClick}> {this.state.category}</div> /
                    <div className='path-element' onClick={this.subCategoryOnClick}> {this.state.subcategory}</div> /
                    <div className='path-element' onClick={this.projectOnClick}> {this.state.project}</div> /
                    <div className='path-element'> {this.state.tool}</div>
                </div>
            )
        }
        else if(this.state.project !== '') {
            return(
                <div className='path'>
                    <div className='path-element' onClick={this.categoriesOnClick}>Categories</div> /
                    <div className='path-element' onClick={this.categoryOnClick}> {this.state.category}</div> /
                    <div className='path-element' onClick={this.subCategoryOnClick}> {this.state.subcategory}</div> /
                    <div className='path-element' onClick={this.projectOnClick}> {this.state.project}</div>
                </div>
            )
        }
        else if(this.state.subcategory !== '') {
            return(
                <div className='path'>
                    <div className='path-element' onClick={this.categoriesOnClick}>Categories</div> /
                    <div className='path-element' onClick={this.categoryOnClick}> {this.state.category}</div> /
                    <div className='path-element' onClick={this.subCategoryOnClick}> {this.state.subcategory}</div>
                </div>
            )
        }
        else if(this.state.category !== '') {
            return(
                <div className='path'>
                    <div className='path-element' onClick={this.categoriesOnClick}>Categories</div> /
                    <div className='path-element' onClick={this.categoryOnClick}> {this.state.category}</div>
                </div>
            )
        }
        else {
            return(
                <div>
                    <div className='path' onClick={this.categoriesOnClick}>Categories</div>
                </div>
            )
        }

    }

    categoriesOnClick =  async () => {
        console.log(this.state);
        await this.setState({category: '', subcategory: '', project: '', tool: ''})
        console.log(this.state);
        this.props.returnToCategoriesFn();
    }

    categoryOnClick = async() => {
        await this.setState({subcategory: '', project: '', tool: ''})
        this.props.returnToCategoryFn(this.state.category);
    }

    subCategoryOnClick = async() => {
        await this.setState({ project: '', tool: ''})
        this.props.returnToSubCategoryFn(this.state.subcategory);
    }

    projectOnClick = async() => {
        await this.setState({ tool: ''})
        this.props.returnToProjectFn(this.state.project);
    }

    updateState = async () => {
        await this.setState({
            category: this.props.category,
            subcategory: this.props.subcategory,
            project: this.props.project,
            tool: this.props.tool
        })
        console.log(this.state)
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.updateState();
        }
        else
            console.log('state didnt change');
    }

}

export default Path;