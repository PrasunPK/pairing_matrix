import {connect} from "react-redux";
import LeftNavigation from "./LeftNavigation";

export const defaultState = () => {
    return {}
};

const mapStateToProps = (state = defaultState(), ownProps) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSaveClick: () => {
            console.log("SAVE CLICKED");
        }
    }
};

const LeftNavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftNavigation);

export default LeftNavigationContainer;