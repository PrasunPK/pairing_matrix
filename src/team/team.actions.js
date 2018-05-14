import axios from 'axios';
import cookie from 'react-cookies';

const saveTeamMemberDetail = (members) => ({
    type: 'SAVE_TEAM_MEMBER_DETAIL',
    members: members
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

export const getTeamInformation = (dispatch) => {
    return axios.get('http://localhost:8080/team/getAll')
        .then((res) => {
            const team = res.data.teams.filter(t => t.teamEmail === cookie.load('teamEmail'))[0];
            dispatch(teamDetailSaved(team));
        })
        .catch((err) => {
            console.log(err);
        })
};