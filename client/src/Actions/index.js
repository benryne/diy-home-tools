
export const set = (setType,payload) => {
    return {
        type: 'SET_' + setType.toUpperCase(),
        payload
    };
};

export const reset = (setType,payload) => {
    return {
        type: 'RESET_' + setType.toUpperCase(),
        payload
    };
}