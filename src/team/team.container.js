import {connect} from "react-redux";
import TeamComponent from './team.component';
import * as actions from "./team.actions";
import {defaultState} from "../matrix/MainContainer";

const mapStateToProps = (state = defaultState()) => {
    return {
        ...state,
        team: state.team,
        teams: state.teams,
        selectedTeam: state.selectedTeam
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSaveClick: (e) => {
            const teamName = document.getElementById('input-with-team-name').value;
            const teamEmail = document.getElementById('input-with-team-email').value;
            const adminUserName = document.getElementById('input-with-team-admin').value;
            const adminPassword = document.getElementById('input-with-password').value;

            actions.saveTeamDetail(dispatch, {teamName, teamEmail, adminUserName, adminPassword});
        },
        fetchTeamInformation: () => {
            actions.getTeamInformation(dispatch);
            actions.getTeamMembers(dispatch);
        },
        handleChange: (e) => {
            dispatch({
                type: 'TEAM_VALUE_CHANGE',
                selectedTeam: e.target.value
            });
        }
    }
};

const Team = connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamComponent);

export default Team;