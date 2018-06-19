import {connect} from "react-redux";
import AppBarComponent from "./app-bar.component";

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
)(AppBarComponent);

export default AppBar;