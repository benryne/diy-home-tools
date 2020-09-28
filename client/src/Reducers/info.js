const infoReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_INFO':
            return state = action.payload;
        case 'RESET_INFO':
            return state = '';
        default:
            return state;
    }

};

export default infoReducer;