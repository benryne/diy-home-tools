import React from 'react';
import Tile from './tile';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

function TileList() {
    const tiles  = useSelector(state => state.tiles);
    const info = useSelector(state => state.info);
        
    if(tiles !== '') {
        const hasInfo = (info !== '');
        return(
            <Grid container spacing={2}>
            {hasInfo ? (
                <Grid item xs={12} sm={12} md={8} lg={6}>
                    <div className='tile-info'>{info}</div>
                </Grid>
            ) : (
                <div></div>
            )}
            {
                tiles.map((tile,index) => {
                    return(
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Tile name={tile} key={index}></Tile>
                        </Grid>
                    )
                })
            }
            </Grid>
        )
    }
    else {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={6}>
                    <div className='tile-info'>{info}</div>
                </Grid>
            </Grid>
        )
    }

}

export default TileList;