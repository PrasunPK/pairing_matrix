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
    console.log(Object.values(data[data.length-1])[0]);
    dispatch({
        type: 'FETCH_SUCCESSFUL',
        pairs: Object.values(data[data.length-1])[0]
    });
};

export const getLatestSavedState = (dispatch) => {
    axios.get('http://localhost:3001/collections')
        .then((res) => {
            console.log(res.data);
            fetchSuccessful(dispatch, res.data)
        })
};

export const saveStateOfPairs = ({pairs}) => {
    let date = new Date();
    return axios
        .post('http://localhost:3001/collections',
            {[date.getTime().toString()]: pairs})
        .then((res) => {
        })
        .catch((err) => {
            console.log(err);
        });
};