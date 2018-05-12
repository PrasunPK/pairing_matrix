import {defaultState} from "./MainContainer";
import {isSamePair} from "./utils";

const findAndUpdatePair = (state, pair) => {
    if (!state.pairs.some(p => isSamePair(p, pair))) {
        state.pairs.push(pair);
        return;
    }
    state.pairs.forEach(p => {
        if (isSamePair(p, pair)) {
            p.days += pair.days;
        }
    });
};

const mainReducer = (state = defaultState(), action) => {
    switch (action.type) {
        case 'DAY_INCREASED':
            findAndUpdatePair(state, action.pair);
            return {
                ...state,
                count: state.count + action.count
            };

        case 'DAY_DECREASED':
            findAndUpdatePair(state, action.pair);
            return {
                ...state,
                count: state.count - action.count
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