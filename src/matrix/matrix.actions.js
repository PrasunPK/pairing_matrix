import {axiosInstance as axios} from '../axios-wrapper/axios.config';

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
    let teamEmail = localStorage.getItem('teamEmail');
    axios.get(`/pairingMatrix/v2/get?teamEmail=${teamEmail}`)
        .then((res) => {
            fetchSuccessful(dispatch, res.data)
        })
};

export const savePairData = (pair, dispatch, type) => {
    let teamEmail = localStorage.getItem('teamEmail');
    return axios
        .post('/pairingMatrix/save',
            {pairs: [pair], teamEmail})
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

export const getLastUpdatedTime = (dispatch) => {
    let teamEmail = localStorage.getItem('teamEmail');
    axios.get(`/pairingMatrix/v2/get/last-updated-time?teamEmail=${teamEmail}`)
        .then((res) => {
            return dispatch({
                type: "SAVE_LAST_UPDATED_TIME",
                lastUpdatedTime : res.data
            });
        })
        .catch((err) => {
            console.log(err);
        });
};