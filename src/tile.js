import React from 'react';
import './tile.css';
import Grid from '@material-ui/core/Grid';

class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tile: this.props.tile
        }
    }

    render() {


        // if(this.props.display) {
            return(
                    <div className='tile' onClick={this.displayTileInfo}>
                        <div className='tile-name'>{this.state.tile}</div>
                        <img className='tile-image' src='method-draw-image.svg' height='150px'></img>
                    </div>
            )

        // }
        // else 
        //     return null;
    }

    displayTileInfo = () => {
        // await this.setState({display: false});
        this.props.onClickFn(this.state.tile);

    }

    componentDidUpdate = async(prevProps) => {
        if(prevProps !== this.props) {
            await this.setState({tile: this.props.tile});
        } 
        // console.log(this.state)
    }


}

export default Tile;