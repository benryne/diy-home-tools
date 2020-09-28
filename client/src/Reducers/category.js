const categoryReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_CATEGORY':
            return state = action.payload;
        case 'RESET_CATEGORY':
            return state = '';
        default:
            return state;
    }
};

export default categoryReducer;