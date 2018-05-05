export const dayIncreased = (dispatch, pair) => {
    dispatch({
        type: 'DAY_INCREASED',
        pair,
        count: 1
    });
};

export const dayDecreased = (dispatch, pair) => {
    dispatch({
        type: 'DAY_DECREASED',
        pair,
        count: 1
    });
};