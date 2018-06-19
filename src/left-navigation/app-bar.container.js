import {connect} from "react-redux";
import AppBarComponent from "./app-bar.component";
import {getTeamInformation} from "../team/team.actions";

const mapStateToProps = (state) => {
    return {
        ...state,
        team: state.teamReducers.team
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTeamInformation: () => {
            getTeamInformation(dispatch);
        }
    }
};

const AppBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppBarComponent);

export default AppBar;