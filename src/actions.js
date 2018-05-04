export const dayIncreased = (dispatch) => {
    dispatch({
        type: 'DAY_INCREASED',
        count: 1
    });
};