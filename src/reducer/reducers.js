import {defaultState} from "../matrix/matrix.container";
import {isSamePair} from "../utils";

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

const matrixReducers = (state = defaultState(), action) => {
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

        case 'SAVE_TEAM_DETAIL':
            return {
                ...state,
                team: action.team
            };

        case 'SAVE_TEAM_MEMBER_DETAIL':
            return {
                ...state,
                members: action.members
            };

        case 'ALL_TEAM_DETAIL':
            return {
                ...state,
                teams: action.teams
            };

        case 'TEAM_VALUE_CHANGE':
            return {
                ...state,
                selectedTeam: action.selectedTeam
            };

        default:
            return {
                ...state
            };
    }
};

export default matrixReducers;