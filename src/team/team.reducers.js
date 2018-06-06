import {defaultState} from "../matrix/matrix.container";

const teamReducers = (state = defaultState(), action) => {
    switch (action.type) {
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

export default teamReducers;