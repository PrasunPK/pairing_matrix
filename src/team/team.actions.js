import {axiosInstance as axios} from '../axios-wrapper/axios.config';

export const addTeamMember = (dispatch, data) => {
    return axios
        .post('/addMember', data)
        .then((res) => {
            if (res.status === 200) {
                getTeamMembers(dispatch);
                dispatch({type: "CLEAR_ERROR_STATE"});
                dispatch({type: "REQUEST_SUCCESSFUL", context: "add_member"});
            }
        })
        .catch((err) => {
            console.log(err);
        });
};


const saveTeamMemberDetail = (members) => ({
    type: 'SAVE_TEAM_MEMBER_DETAIL',
    members: members
});

const allTeamDetail = (teams) => ({
    type: 'ALL_TEAM_DETAIL',
    teams: teams
});

export const getTeamMembers = (dispatch, emailId = localStorage.getItem('teamEmail')) => {
    return axios
        .post('/getAllMembers', {emailId})
        .then((res) => {
            dispatch(saveTeamMemberDetail(res.data));
        })
        .catch(err => console.log(err));
};


const teamDetailSaved = (team) => ({
    type: 'SAVE_TEAM_DETAIL',
    team: team
});

export const removeTeam = (dispatch) => {
    localStorage.removeItem('teamEmail');
    dispatch(teamDetailSaved(undefined));
};

export const saveTeamDetail = (dispatch, team) => {
    return axios
        .post('/createTeam', team)
        .then((res) => {
            if (res.status === 200) {
                localStorage.setItem('teamEmail', team.teamEmail);
                dispatch(teamDetailSaved(team));
                getTeamInformation(dispatch);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getTeamInformation = (dispatch, teamEmail = localStorage.getItem('teamEmail')) => {
    return axios.get('/team/getAll')
        .then((res) => {
            dispatch(allTeamDetail(res.data.teams));
            const team = res.data.teams.filter(t => t.teamEmail === teamEmail)[0];
            dispatch(teamDetailSaved(team));
            localStorage.setItem('teamEmail', team.teamEmail);
        })
        .catch((err) => {
            console.log(err);
        })
};