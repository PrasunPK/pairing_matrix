import {connect} from "react-redux";
import TeamComponent from './team.component';
import * as actions from "./team.actions";

const mapStateToProps = (state) => {
    return {
        ...state,
        team: state.teamReducers.team,
        teams: state.teamReducers.teams,
        selectedTeam: state.teamReducers.selectedTeam,
        members: state.teamReducers.members
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSaveClick: (e) => {
            const teamName = document.getElementById('input-with-team-name').value;
            const teamEmail = document.getElementById('input-with-team-email').value;

            actions.saveTeamDetail(dispatch, {teamName, teamEmail});
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
        },
        handleExistingSave: () => {
            const selectedTeamEmail = document.getElementById('selected-preferred-team').value;
            actions.getTeamInformation(dispatch, selectedTeamEmail);
            actions.getTeamMembers(dispatch, selectedTeamEmail);
        },
        handleAddMemberClick: () => {
            const data = {
                memberId: document.getElementById("input-with-id").value,
                memberName: document.getElementById("input-with-name").value,
                memberEmail: document.getElementById("input-with-email").value,
                teamEmail: localStorage.getItem('teamEmail')
            };
            actions.addTeamMember(dispatch, data);
        },
        handleRemoveTeam: () => {
            actions.removeTeam(dispatch);
        }
    }
};

const Team = connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamComponent);

export default Team;