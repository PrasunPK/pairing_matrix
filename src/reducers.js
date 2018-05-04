const mainReducer = (state = [], action) => {
    switch (action.type) {
        case 'DAY_INCREASED':
            console.log('ACTION' , action);
            return {
                ...state,
                count: action.count
            };
        default:
            return {
                ...state
            };
    }
};

export default mainReducer;