import React from 'react';
import './tile.css';
import TileGenerator from './tileGenerator';
import TypeGenerator from './typeGenerator';
import PluralToSingular from './pluralToSignular';
import InfoGenerator from './infoGenerator';

import { useSelector, useDispatch } from 'react-redux';
import { set } from './Actions';

function Tile(tile) {
    const dispatch = useDispatch();
    const tileType = useSelector(state => state.tileType);
    const category = useSelector(state => state.category);
    const subcategory = useSelector(state => state.subcategory);
    const project = useSelector(state => state.project);

    const tileOnClick = () => {
        dispatch(set('tiles',TileGenerator(tileType,tile.name,category,subcategory,project)));
        dispatch(set(PluralToSingular(tileType),tile.name));
        dispatch(set('tile_type',TypeGenerator(tileType)));
        console.log(tileType);
        if(tileType === 'projects' || tileType === 'tools') {
            dispatch(set('info',InfoGenerator(tileType,tile.name)));
        }
    }

    console.log(tile);
    return(
        <div className='tile' onClick={tileOnClick}>
            <div className='tile-name'>{tile.name}</div>
            <img className='tile-image' src='method-draw-image.svg' height='150px'></img>
        </div>
    )

}

export default Tile;