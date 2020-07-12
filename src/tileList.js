import React from 'react';
import Tile from './tile';
import Grid from '@material-ui/core/Grid';

class TileList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list,
            type: this.props.type,
            info: this.props.info
        }
    }

    render() {
        
        if(this.state.list !== '') {
            const tiles = this.state.list;
            const hasInfo = this.state.info;
            return(
                <Grid container spacing={2}>
                {hasInfo ? (
                    <Grid item xs={12} sm={12} md={8} lg={6}>
                        <div className='tile-info'>{this.state.info}</div>
                    </Grid>
                ) : (
                    <div></div>
                )}
                {
                    tiles.map((tile,index) => {
                        return(
                            <Grid item xs={6} sm={4} md={3} lg={2}>
                                <Tile onClickFn={this.DisplayTileInfo} key={index} tile={tile}></Tile>
                            </Grid>
                        )
                    })
                }
                </Grid>
            )
        }
        else 
            return (
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={8} lg={6}>
                        <div className='tile-info'>{this.state.info}</div>
                    </Grid>
                </Grid>
            )

    }

    DisplayTileInfo = (tile) => {
        this.props.onClickFn(tile)
    }

    componentDidUpdate = async(prevProps) => {
        if(prevProps !== this.props) {
            await this.setState({list: this.props.list, type: this.props.type, info: this.props.info});
        } 
    }

}

export default TileList;