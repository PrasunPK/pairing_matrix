import {connect} from "react-redux";
import LeftNavigation from "./LeftNavigation";
import {saveStateOfPairs} from "./actions";

export const defaultState = () => {
    return {}
};

const mapStateToProps = (state = defaultState()) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSaveClick: () => {
            console.log("SAVE CLICKED");
            saveStateOfPairs();
        }
    }
};

const LeftNavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftNavigation);

export default LeftNavigationContainer;