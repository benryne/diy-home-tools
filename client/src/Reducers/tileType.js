const tileTypeReducer = (state = 'categories', action) => {
    switch(action.type) {
        case 'SET_TILE_TYPE':
            return state = action.payload;
        default:
            return state;
    }

};

export default tileTypeReducer;