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
                    <div className='path-element'> {this.state.project}</div>
                </div>
            )
        }
        else if(this.state.subcategory !== '') {
            return(
                <div className='path'>
                    <div className='path-element' onClick={this.categoriesOnClick}>Categories</div> /
                    <div className='path-element' onClick={this.categoryOnClick}> {this.state.category}</div> /
                    <div className='path-element'> {this.state.subcategory}</div>
                </div>
            )
        }
        else if(this.state.category !== '') {
            return(
                <div className='path'>
                    <div className='path-element' onClick={this.categoriesOnClick}>Categories</div> /
                    <div className='path-element'> {this.state.category}</div>
                </div>
            )
        }
        else {
            return(
                <div>
                    <div className='path'>Categories</div>
                </div>
            )
        }

    }

    categoriesOnClick =  async () => {
        
        await this.setState({category: '', subcategory: '', project: '', tool: ''})
        this.props.returnToFn({  
            categories: ['Floor','Bath','Wall','Outdoor','Kitchen','Roof','Lighting'],
            category: '',
            subcategory: '',
            project: '',
            tool: '',
            list: ['Floor','Bath','Wall','Outdoor','Kitchen','Roof','Lighting'],
            type: 'categories',
            tileClicked: '',
            info: ''
        });
    }

    categoryOnClick = async() => {
        let tile = this.state.category;
        await this.setState({subcategory: '', project: '', tool: ''})
        this.props.returnToFn({  
            subcategory: '',
            project: '',
            tool: '',
            list: ['Floor','Bath','Wall','Outdoor','Kitchen','Roof','Lighting'],
            type: 'categories',
            tileClicked: tile,
            info: ''
        });
    }

    subCategoryOnClick = async() => {
        let tile = this.state.subcategory;
        await this.setState({ project: '', tool: ''})
        this.props.returnToFn({  
            project: '',
            tool: '',
            type: 'subcategories',
            tileClicked: tile,
            info: ''
        });
    }

    projectOnClick = async() => {
        let tile = this.state.project;
        await this.setState({ tool: ''})
        this.props.returnToFn({  
            project: '',
            tool: '',
            type: 'projects',
            tileClicked: tile,
            info: ''
        });
    }

    updateState = async () => {
        console.log('path: ' + this.props.tile + ' type: ' + this.props.type);
        if(this.props.type === 'categories') {
            await this.setState({
                category: this.props.tile
            })
        }
        else if(this.props.type === 'subcategories') {
            await this.setState({
                subcategory: this.props.tile
            })
        }
        else if(this.props.type === 'projects') {
            await this.setState({
                project: this.props.tile
            })
        }
        else {
            await this.setState({
                tool: this.props.tile
            })
        }
        // await this.setState({
        //     category: this.props.category,
        //     subcategory: this.props.subcategory,
        //     project: this.props.project,
        //     tool: this.props.tool
        // })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.tile !== this.props.tile) {
            this.updateState();
        }
        else
            console.log('state didnt change');
    }

}

export default Path;