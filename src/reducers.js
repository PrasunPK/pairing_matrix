import {defaultState} from "./container";

const mainReducer = (state = defaultState(), action) => {
    switch (action.type) {
        case 'DAY_INCREASED':
            return {
                ...state,
                count: action.count
            };
        default:
            return {
                ...state
            } ;
    }
};

export default mainReducer;