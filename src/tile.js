import React from 'react';
import './tile.css';

class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tile: this.props.tile
        }
    }

    render() {
            return(
                <div className='tile' onClick={this.displayTileInfo}>
                    <div className='tile-name'>{this.state.tile}</div>
                    <img className='tile-image' src='method-draw-image.svg' height='150px'></img>
                </div>
            )
    }

    displayTileInfo = () => {
        this.props.onClickFn(this.state.tile);

    }

    componentDidUpdate = async(prevProps) => {
        if(prevProps !== this.props) {
            await this.setState({tile: this.props.tile});
        } 
    }


}

export default Tile;