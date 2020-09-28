const subcategoryReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_SUBCATEGORY':
            return state = action.payload;
        case 'RESET_SUBCATEGORY':
            return state = '';
        default:
            return state;
    }
};

export default subcategoryReducer;