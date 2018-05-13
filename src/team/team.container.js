import {connect} from "react-redux";
import TeamComponent from './team.component';
import {saveTeamDetail} from "./team.actions";

export const defaultState = () => {
    return {}
};

const mapStateToProps = (state = defaultState()) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSaveClick: (e) => {
            const teamName = document.getElementById('input-with-team-name').value;
            const teamEmail = document.getElementById('input-with-team-email').value;
            const adminUserName = document.getElementById('input-with-team-admin').value;
            const adminPassword = document.getElementById('input-with-password').value;

            saveTeamDetail(dispatch, {teamName, teamEmail, adminUserName, adminPassword});
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