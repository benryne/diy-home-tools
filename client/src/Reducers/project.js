const projectReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_PROJECT':
            return state = action.payload;
        case 'RESET_PROJECT':
            return state = '';
        default:
            return state;
    }
};

export default projectReducer;