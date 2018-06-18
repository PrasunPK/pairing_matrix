import {connect} from "react-redux";
import RichAppBar from "./RichAppBar";

const mapStateToProps = (state) => {
    return {
        ...state,
        team: state.teamReducers.team
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const AppBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(RichAppBar);

export default AppBar;