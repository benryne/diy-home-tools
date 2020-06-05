import React from 'react';

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
                <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} >
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} onClick={this.categoriesOnClick}>Categories</div> >
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} onClick={this.categoryOnClick}> {this.state.category} ></div>
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} onClick={this.subCategoryOnClick}> {this.state.subcategory} ></div>
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} onClick={this.projectOnClick}> {this.state.project}</div>
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}}> > {this.state.tool}</div>
                </div>
            )
        }
        else if(this.state.project !== '') {
            return(
                <div style={{display: "inline", fontSize: "32px", fontWeight: 700}}>
                    
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} onClick={this.categoriesOnClick}>Categories</div> >
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} onClick={this.categoryOnClick}> {this.state.category} ></div>
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} onClick={this.subCategoryOnClick}> {this.state.subcategory} ></div>
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} onClick={this.projectOnClick}> {this.state.project}</div>
                </div>
            )
        }
        else if(this.state.subcategory !== '') {
            return(
                <div style={{display: "inline", fontSize: "32px", fontWeight: 700}}>
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} onClick={this.categoriesOnClick}>Categories</div> >
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} onClick={this.categoryOnClick}> {this.state.category} ></div>
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} onClick={this.subCategoryOnClick}> {this.state.subcategory}</div>
                </div>
            )
        }
        else if(this.state.category !== '') {
            return(
                <div style={{display: "inline", fontSize: "32px", fontWeight: 700}}>
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} onClick={this.categoriesOnClick}>Categories</div> >
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} onClick={this.categoryOnClick}> {this.state.category}</div>
                </div>
            )
        }
        else {
            return(
                <div>
                    <div style={{display: "inline", fontSize: "32px", fontWeight: 700}} onClick={this.categoriesOnClick}>Categories</div>
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

    categoryOnClick = () => {
        console.log(this.props.category + ' clicked');
    }

    subCategoryOnClick = () => {
        console.log(this.props.subcategory + ' clicked');
    }

    projectOnClick = () => {
        console.log(this.props.project + ' clicked');
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