import axios from 'axios';

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

export const fetchSuccessful = (dispatch, data) => {
    dispatch({
        type: 'FETCH_SUCCESSFUL',
        pairs: data.length > 0 && Object.values(data[data.length - 1])[0]
    });
};

export const getLatestSavedState = (dispatch) => {
    axios.get('http://localhost:3001/collections')
        .then((res) => {
            fetchSuccessful(dispatch, res.data)
        })
};

export const saveStateTemporarily = ({pairs}) => {
    return axios
        .put('http://localhost:3001/temp_collection',
            {pairs})
        .then((res) => {
        })
        .catch((err) => {
            console.log(err);
        });
};

const getTemporarySavedState = () => {
    return axios.get('http://localhost:3001/temp_collection');
};

export const saveStateOfPairs = () => {
    let date = new Date();
    return getTemporarySavedState()
        .then((res) => {
            console.log(res);
            axios
                .post('http://localhost:3001/collections',
                    {[date.getTime().toString()]: res.data.pairs})
                .then((res) => {
                })
                .catch((err) => {
                    console.log(err);
                });
        })
};