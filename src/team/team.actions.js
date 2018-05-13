import axios from 'axios';

const teamDetailSaved = (team) => ({
    type: 'SAVE_TEAM_DETAIL',
    team: team
});

export const saveTeamDetail = (dispatch, team) => {
    return axios
        .post('http://localhost:8080/createTeam', team)
        .then((res) => {
            if (res.status === 200) {
                dispatch(teamDetailSaved(team));
            }
        })
        .catch((err) => {
            console.log(err);
        });

};