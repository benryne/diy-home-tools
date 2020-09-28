import React from 'react';
import './tile.css';
import TileGenerator from '../Generators/tileGenerator';
import TypeGenerator from '../Generators/typeGenerator';
import PluralToSingular from '../Generators/pluralToSignular';
import InfoGenerator from '../Generators/infoGenerator';

import { useSelector, useDispatch } from 'react-redux';
import { set } from '../Actions';

function Tile(tile) {
    const dispatch = useDispatch();
    const tileType = useSelector(state => state.tileType);
    const category = useSelector(state => state.category);
    const subcategory = useSelector(state => state.subcategory);
    const project = useSelector(state => state.project);

    const tileOnClick = () => {
        const tiles = TileGenerator(tileType,tile.name,category,subcategory,project);
        dispatch(set('tiles',tiles));

        const singularTileType = PluralToSingular(tileType);
        dispatch(set(singularTileType,tile.name));

        const nextTileType = TypeGenerator(tileType);
        dispatch(set('tile_type',nextTileType));

        if(tileType === 'projects' || tileType === 'tools') {
            const info = InfoGenerator(tileType,tile.name);
            dispatch(set('info',info));
        }
    }

    return(
        <div className='tile' onClick={tileOnClick}>
            <div className='tile-name'>{tile.name}</div>
            <img className='tile-image' src='method-draw-image.svg' height='150px'></img>
        </div>
    )

}

export default Tile;