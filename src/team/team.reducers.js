const defaultState = () => {
    return {
        teams: [],
        team: null,
        selectedTeam: [],
        members: [],
        error: null,
        success: null
    }
};

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

        case 'FIELD_VALIDATION_FAILED':
            return {
                ...state,
                error: {
                    context: action.context,
                    message: "Fields must not be empty"
                }
            };

        case 'CLEAR_ERROR_STATE':
            return {
                ...state,
                error: null
            };

        case 'REQUEST_SUCCESSFUL':
            return {
                ...state,
                success: {
                    message: "Your request was successful",
                    context: action.context
                }
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

export default teamReducers;