import {defaultState} from "./MainContainer";

const mainReducer = (state = defaultState(), action) => {
    switch (action.type) {
        case 'DAY_INCREASED':
            state.pairs[action.pair] = state.pairs[action.pair] + action.count;
            return {
                ...state,
                count: state.count + action.count
            };

        case 'DAY_DECREASED':
            state.pairs[action.pair] =
                state.pairs[action.pair] > 0 ?
                    state.pairs[action.pair] - action.count : 0;
            return {
                ...state,
                count: state.count > 0 ? state.count - action.count : 0
            };

        case 'FETCH_SUCCESSFUL':
            return {
                ...state,
                pairs: action.pairs
            };

        default:
            return {
                ...state
            };
    }
};

export default mainReducer;