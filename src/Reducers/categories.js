const categoriesReducer = (state = ['Floor','Bath','Wall','Outdoor','Kitchen','Roof','Lighting'], action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default categoriesReducer;