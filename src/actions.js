export const dayIncreased = (dispatch, pair) => {
    dispatch({
        type: 'DAY_INCREASED',
        pair,
        count: 1
    });
};