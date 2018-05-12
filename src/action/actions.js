import axios from 'axios';

export const dayIncreased = (dispatch, pair) => {
    savePairData(pair, dispatch, 'DAY_INCREASED');
};

export const dayDecreased = (dispatch, pair) => {
    savePairData(pair, dispatch, 'DAY_DECREASED');
};

export const fetchSuccessful = (dispatch, data) => {
    dispatch({
        type: 'FETCH_SUCCESSFUL',
        pairs: data
    });
};

export const getLatestSavedState = (dispatch) => {
    axios.get('http://localhost:8080/pairingMatrix/getAll')
        .then((res) => {
            fetchSuccessful(dispatch, res.data)
        })
};

export const savePairData = (pair, dispatch, type) => {
    return axios
        .post('http://localhost:8080/pairingMatrix/save',
            {pairs: [pair]})
        .then((res) => {
            if (res.status === 200) {
                return dispatch({
                    type: type,
                    pair,
                    count: 1
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
};