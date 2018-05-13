import {connect} from "react-redux";
import TeamComponent from './team.component';
import * as actions from "./team.actions";

export const defaultState = () => {
    return {
        team: null
    }
};

const mapStateToProps = (state = defaultState()) => {
    return {
        ...state,
        team: state.team
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
        },
        handleChange: (e) => {
            //noop
        }
    }
};

const Team = connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamComponent);

export default Team;