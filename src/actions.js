export const dayIncreased = (dispatch, pair, count) => {
    dispatch({
        type: 'DAY_INCREASED',
        pair,
        count
    });
};