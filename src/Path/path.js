import React from 'react';
import './path.css';
import { useSelector, useDispatch } from 'react-redux';
import { set,reset } from '../Actions';
import TileGenerator from '../Generators/tileGenerator';
import InfoGenerator from '../Generators/infoGenerator';


function Path() {

    const dispatch = useDispatch();
    const category = useSelector(state => state.category);
    const subcategory = useSelector(state => state.subcategory);
    const project = useSelector(state => state.project);
    const tool = useSelector(state => state.tool);

    const categoriesOnClick = () => {
        dispatch(reset('category'));
        dispatch(reset('subcategory'));
        dispatch(reset('project'));
        dispatch(reset('tool'));
        dispatch(reset('tiles'));
        dispatch(reset('info'));
        dispatch(set('tile_type','categories'));
    }

    const categoryOnClick = () => {
        const tiles = TileGenerator('categories',category,category,'','');
        dispatch(reset('subcategory'));
        dispatch(reset('project'));
        dispatch(reset('tool'));
        dispatch(reset('info'));
        dispatch(set('tiles',tiles));
        dispatch(set('tile_type','subcategories'));
    }

    const subCategoryOnClick = () => {
        const tiles = TileGenerator('subcategories',category,category,subcategory,'');
        dispatch(reset('project'));
        dispatch(reset('tool'));
        dispatch(reset('tiles'));
        dispatch(reset('info'));
        dispatch(set('tiles',tiles));
        dispatch(set('tile_type','projects'));
    }

    const projectOnClick = () => {
        const tiles = TileGenerator('projects',category,category,subcategory,'');
        const info = InfoGenerator('project',project);
        dispatch(reset('tool'));
        dispatch(reset('tiles'));
        dispatch(set('info',info));
        dispatch(set('tiles',tiles));
        dispatch(set('tile_type','tools'));
    }

    if(tool !== '') {
        return(
            <div className='path'>
                <div className='path-element' onClick={categoriesOnClick}>Categories</div> /
                <div className='path-element' onClick={categoryOnClick}> {category}</div> /
                <div className='path-element' onClick={subCategoryOnClick}> {subcategory}</div> /
                <div className='path-element' onClick={projectOnClick}> {project}</div> /
                <div className='path-element'> {tool}</div>
            </div>
        )
    }
    else if(project !== '') {
        return(
            <div className='path'>
                <div className='path-element' onClick={categoriesOnClick}>Categories</div> /
                <div className='path-element' onClick={categoryOnClick}> {category}</div> /
                <div className='path-element' onClick={subCategoryOnClick}> {subcategory}</div> /
                <div className='path-element'> {project}</div>
            </div>
        )
    }
    else if(subcategory !== '') {
        return(
            <div className='path'>
                <div className='path-element' onClick={categoriesOnClick}>Categories</div> /
                <div className='path-element' onClick={categoryOnClick}> {category}</div> /
                <div className='path-element'> {subcategory}</div>
            </div>
        )
    }
    else if(category !== '') {
        return(
            <div className='path'>
                <div className='path-element' onClick={categoriesOnClick}>Categories</div> /
                <div className='path-element'> {category}</div>
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

export default Path;