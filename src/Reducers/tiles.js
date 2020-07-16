const tilesReducer = (state = ['Floor','Bath','Wall','Outdoor','Kitchen','Roof','Lighting'], action) => {
    switch(action.type) {
        case 'SET_TILES':
            return state = action.payload;
        case 'RESET_TILES':
            return state = '';
        default:
            return state;
    }
};

export default tilesReducer;