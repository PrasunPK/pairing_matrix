import {isSamePair} from "../utils";

export const defaultState = () => {
    return {
        pairs: null
    }
};

const findAndUpdatePair = (state, pair) => {
    if (!state.pairs.some(p => isSamePair(p, pair))) {
        state.pairs.push(pair);
        return;
    }
    state.pairs.forEach(p => {
        if (isSamePair(p, pair)) {
            p.days = parseInt(p.days, 10) + parseInt(pair.days, 10);
        }
    });
};

const matrixReducers = (state = defaultState(), action) => {
    switch (action.type) {
        case 'DAY_INCREASED':
            findAndUpdatePair(state, action.pair);
            return {
                ...state
            };

        case 'DAY_DECREASED':
            findAndUpdatePair(state, action.pair);
            return {
                ...state
            };

        case 'FETCH_SUCCESSFUL':
            return {
                ...state,
                pairs: action.pairs
            };

        case 'SAVE_LAST_UPDATED_TIME':
            return {
                ...state,
                lastUpdatedTime: action.lastUpdatedTime
            };

        case 'IS_LOADING':
            return {
                ...state,
                isLoading: action.loading
            };

        default:
            return {
                ...state
            };
    }
};

export default matrixReducers;