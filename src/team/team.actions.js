import axios from 'axios';
import cookie from 'react-cookies';

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
        .post('http://localhost:8080/getAllMembers', {emailId: cookie.load('teamEmail')})
        .then((res) => {
            dispatch(saveTeamMemberDetail(res.data));
        })
        .catch(err => console.log(err));
};


const teamDetailSaved = (team) => ({
    type: 'SAVE_TEAM_DETAIL',
    team: team
});

export const saveTeamDetail = (dispatch, team) => {
    return axios
        .post('http://localhost:8080/createTeam', team)
        .then((res) => {
            if (res.status === 200) {
                cookie.save('teamEmail', team.teamEmail);
                dispatch(teamDetailSaved(team));
                //    cookie.remove('userId', { path: '/' })
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getTeamInformation = (dispatch, teamEmail = cookie.load('teamEmail')) => {
    return axios.get('http://localhost:8080/team/getAll')
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