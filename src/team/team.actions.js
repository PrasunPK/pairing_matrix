import { axiosInstance as axios } from '../axios-wrapper/axios.config';
import cookie from 'react-cookies';

export const addTeamMember = (dispatch, data) => {
    return axios
        .post('/addMember', data)
        .then((res) => {
            if (res.status === 200) {
                getTeamMembers(dispatch);
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

export const getTeamMembers = (dispatch) => {
    return axios
        .post('/getAllMembers', {emailId: cookie.load('teamEmail')})
        .then((res) => {
            dispatch(saveTeamMemberDetail(res.data));
            getTeamMembers(dispatch);
        })
        .catch(err => console.log(err));
};


const teamDetailSaved = (team) => ({
    type: 'SAVE_TEAM_DETAIL',
    team: team
});

export const removeTeam = (dispatch) => {
    cookie.remove('teamEmail');
    dispatch(teamDetailSaved(undefined));
};

export const saveTeamDetail = (dispatch, team) => {
    return axios
        .post('/createTeam', team)
        .then((res) => {
            if (res.status === 200) {
                cookie.save('teamEmail', team.teamEmail);
                dispatch(teamDetailSaved(team));
                getTeamInformation(dispatch);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getTeamInformation = (dispatch, teamEmail = cookie.load('teamEmail')) => {
    return axios.get('/team/getAll')
        .then((res) => {
            dispatch(allTeamDetail(res.data.teams));
            const team = res.data.teams.filter(t => t.teamEmail === teamEmail)[0];
            dispatch(teamDetailSaved(team));
            cookie.save('teamEmail', team.teamEmail);
        })
        .catch((err) => {
            console.log(err);
        })
};