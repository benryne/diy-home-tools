const toolReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_TOOL':
            return state = action.payload;
        case 'RESET_TOOL':
            return state = '';
        default:
            return state;
    }
};

export default toolReducer;