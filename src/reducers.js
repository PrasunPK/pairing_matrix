import {defaultState} from "./container";

const mainReducer = (state = defaultState(), action) => {
    switch (action.type) {
        case 'DAY_INCREASED':
            state.pairs[action.pair] = state.pairs[action.pair] + action.count;
            return {
                ...state,
                count: state.count + action.count
            };
        default:
            return {
                ...state
            };
    }
};

export default mainReducer;